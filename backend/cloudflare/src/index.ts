import {
  buildOrder,
  buildPaymentPayload,
  calculateShippingQuote,
  createMercadoPagoPayment,
  fetchMercadoPagoPayment,
  generateExternalReference,
  getPublicConfig,
  normalizeDigits,
  normalizeString,
} from "./domain";
import { handleOptions, isOriginAllowed, jsonResponse, readJsonBody } from "./http";
import {
  createOrGetPendingOrder,
  insertWebhookLog,
  parseStoredPayment,
  storePaymentError,
  storePaymentResult,
  updateOrderFromWebhook,
} from "./persistence";
import type { CheckoutOrderRow, Env } from "./types";
import { verifyMercadoPagoSignature } from "./webhook-signature";

function routeName(req: Request) {
  const parts = new URL(req.url).pathname.split("/").filter(Boolean);
  return parts.at(-1) || "";
}

function assertMethod(req: Request, expected: string) {
  if (req.method !== expected) {
    throw Object.assign(new Error("Metodo nao permitido."), { status: 405 });
  }
}

function readRequestId(req: Request) {
  const value = String(req.headers.get("X-Idempotency-Key") || "").trim();
  if (!value) return crypto.randomUUID();
  if (!/^[a-zA-Z0-9_-]{8,128}$/.test(value)) {
    throw Object.assign(new Error("Identificador de tentativa invalido."), { status: 400 });
  }
  return value;
}

function paymentResponse(payment: Record<string, any>, externalReference: string, orderStored = true) {
  return {
    externalReference,
    paymentId: payment.id || null,
    status: payment.status || null,
    statusDetail: payment.status_detail || null,
    paymentMethodId: payment.payment_method_id || null,
    amount: Number(payment.transaction_amount || 0),
    orderStored,
    pix: {
      code: payment.point_of_interaction?.transaction_data?.qr_code || null,
      qrCodeBase64: payment.point_of_interaction?.transaction_data?.qr_code_base64 || null,
    },
    boletoUrl: payment.transaction_details?.external_resource_url || null,
    ticketUrl: payment.point_of_interaction?.transaction_data?.ticket_url || null,
  };
}

function extractWebhookPaymentId(url: URL, payload: Record<string, unknown>) {
  const queryId = normalizeString(url.searchParams.get("data.id") || url.searchParams.get("id"));
  if (queryId) return queryId;

  const data = payload.data;
  if (data && typeof data === "object") {
    const nestedId = normalizeString((data as Record<string, unknown>).id);
    if (nestedId) return nestedId;
  }

  const resource = normalizeString(payload.resource);
  const matched = resource.match(/\/payments\/(\d+)/);
  return matched?.[1] || "";
}

async function handleConfig(req: Request, env: Env) {
  assertMethod(req, "GET");
  return jsonResponse(req, env, {
    ...getPublicConfig(env),
    shippingQuoteModel: "correios_estimado_base_local",
  });
}

async function handleShippingQuote(req: Request, env: Env) {
  assertMethod(req, "POST");
  const body = await readJsonBody(req);
  const quote = calculateShippingQuote(body?.zip || "", body?.cartItems || []);
  return jsonResponse(req, env, quote);
}

async function handleProcessPayment(req: Request, env: Env) {
  assertMethod(req, "POST");
  const body = await readJsonBody(req);
  const cartItems = Array.isArray(body?.cartItems) ? body.cartItems.slice(0, 50) : [];
  const buyer = body?.buyer || {};
  const order = buildOrder(cartItems, body?.shipping || {});

  if (!order.items.length || !order.total) {
    throw Object.assign(new Error("Carrinho vazio ou com itens sem preco valido."), { status: 400 });
  }
  if (order.total > 100000) {
    throw Object.assign(new Error("Valor do pedido acima do limite permitido."), { status: 400 });
  }

  const requestId = readRequestId(req);
  const externalReference = generateExternalReference();
  const paymentPayload = buildPaymentPayload(
    order,
    body?.formData || {},
    buyer,
    req.url,
    env,
    externalReference,
  );
  const paymentMethodId = normalizeString((paymentPayload as Record<string, unknown>).payment_method_id);

  const pendingOrder = await createOrGetPendingOrder(env.DB, {
    id: crypto.randomUUID(),
    requestId,
    externalReference,
    paymentMethodId,
    buyerName: normalizeString(buyer?.fullName),
    buyerEmail: normalizeString(buyer?.email),
    buyerCpf: normalizeDigits(buyer?.cpf),
    buyerPhone: normalizeDigits(buyer?.phone),
    notes: normalizeString(buyer?.notes),
    shippingMode: order.shippingMode,
    shippingZip: order.shippingZip,
    shippingLabel: order.shippingLabel,
    subtotalAmount: order.subtotal,
    shippingAmount: order.shippingAmount,
    totalAmount: order.total,
    cartItems: order.items,
    mercadoPagoPayload: paymentPayload,
  });

  if (!pendingOrder) {
    throw Object.assign(new Error("Nao foi possivel registrar o pedido antes do pagamento."), { status: 503 });
  }

  const previousPayment = parseStoredPayment(pendingOrder as CheckoutOrderRow);
  if (previousPayment) {
    return jsonResponse(
      req,
      env,
      paymentResponse(previousPayment, pendingOrder.external_reference, true),
    );
  }

  try {
    const payment = await createMercadoPagoPayment(paymentPayload, env, requestId);
    const stored = await storePaymentResult(env.DB, pendingOrder.external_reference, payment);
    return jsonResponse(
      req,
      env,
      {
        ...paymentResponse(payment, pendingOrder.external_reference, Boolean(stored.success)),
        subtotal: order.subtotal,
        shippingAmount: order.shippingAmount,
      },
    );
  } catch (error) {
    await storePaymentError(env.DB, pendingOrder.external_reference, error).catch((storageError) => {
      console.error("payment-error-persistence-failed", storageError);
    });
    throw error;
  }
}

async function handleWebhook(req: Request, env: Env) {
  assertMethod(req, "POST");
  const secret = env.MERCADO_PAGO_WEBHOOK_SECRET?.trim();
  if (!secret) {
    throw Object.assign(new Error("Segredo do webhook nao configurado."), { status: 503 });
  }

  const signatureValid = await verifyMercadoPagoSignature(req, secret);
  if (!signatureValid) {
    throw Object.assign(new Error("Assinatura do webhook invalida."), { status: 401 });
  }

  const body = await readJsonBody(req);
  const url = new URL(req.url);
  const paymentId = extractWebhookPaymentId(url, body);

  await insertWebhookLog(env.DB, {
    requestId: req.headers.get("x-request-id") || "",
    topic: normalizeString(body?.type || body?.topic),
    action: normalizeString(body?.action),
    paymentId,
    payload: body,
  });

  if (!paymentId) {
    return jsonResponse(req, env, { ok: true, ignored: true });
  }

  const payment = await fetchMercadoPagoPayment(paymentId, env);
  await updateOrderFromWebhook(env.DB, payment);
  return jsonResponse(req, env, { ok: true });
}

async function handleHealth(req: Request, env: Env) {
  assertMethod(req, "GET");
  await env.DB.prepare("SELECT 1 AS ok").first();
  return jsonResponse(req, env, { ok: true, service: "salao-becker-api" });
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const optionsResponse = handleOptions(req, env);
    if (optionsResponse) return optionsResponse;

    const route = routeName(req);
    const isWebhook = route === "webhook-mercadopago";
    if (!isWebhook && !isOriginAllowed(req, env)) {
      return jsonResponse(req, env, { error: "Origem nao autorizada." }, 403);
    }

    try {
      switch (route) {
        case "config":
          return await handleConfig(req, env);
        case "shipping-quote":
          return await handleShippingQuote(req, env);
        case "process-payment":
          return await handleProcessPayment(req, env);
        case "webhook-mercadopago":
          return await handleWebhook(req, env);
        case "health":
          return await handleHealth(req, env);
        default:
          return jsonResponse(req, env, { error: "Rota nao encontrada." }, 404);
      }
    } catch (error) {
      const typedError = error as Error & { status?: number; details?: unknown };
      const status = Number(typedError.status || 500);
      if (status >= 500) console.error("worker-request-failed", error);

      return jsonResponse(
        req,
        env,
        {
          error: typedError.message || "Erro interno do servidor.",
          ...(status < 500 && typedError.details ? { details: typedError.details } : {}),
        },
        status,
      );
    }
  },
} satisfies ExportedHandler<Env>;
