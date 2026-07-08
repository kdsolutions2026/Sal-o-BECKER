import { handleOptions, jsonResponse } from "../_shared/cors.ts";
import { fetchMercadoPagoPayment, normalizeString } from "../_shared/domain.ts";
import {
  insertWebhookLog,
  updateCheckoutOrderByExternalReference,
  updateCheckoutOrderByPaymentId,
} from "../_shared/persistence.ts";

function extractPaymentId(payload: Record<string, unknown>) {
  const directId = normalizeString(payload?.["id"]);
  if (directId) return directId;

  const data = payload?.["data"];
  if (data && typeof data === "object") {
    const nestedId = normalizeString((data as Record<string, unknown>)["id"]);
    if (nestedId) return nestedId;
  }

  const resource = normalizeString(payload?.["resource"]);
  const matched = resource.match(/\/payments\/(\d+)/);
  return matched?.[1] || "";
}

Deno.serve(async (req) => {
  const optionsResponse = handleOptions(req);
  if (optionsResponse) return optionsResponse;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Metodo nao permitido." }, 405);
  }

  const rawPayload = await req.text();
  let parsedPayload: Record<string, unknown> = {};

  try {
    parsedPayload = rawPayload ? JSON.parse(rawPayload) : {};
  } catch {
    parsedPayload = { raw: rawPayload };
  }

  console.log("mercadopago-webhook", parsedPayload);

  const paymentId = extractPaymentId(parsedPayload);

  try {
    await insertWebhookLog({
      action: normalizeString(parsedPayload?.["action"]),
      topic: normalizeString(parsedPayload?.["type"] || parsedPayload?.["topic"]),
      payment_id: paymentId || null,
      payload: parsedPayload,
    });
  } catch (error) {
    console.error("webhook-log-persist-failed", error);
  }

  if (paymentId) {
    try {
      const payment = await fetchMercadoPagoPayment(paymentId);
      const patch = {
        payment_id: payment.id,
        status: payment.status,
        status_detail: payment.status_detail,
        payment_method_id: payment.payment_method_id,
        total_amount: payment.transaction_amount,
        mercado_pago_response: payment,
      };

      const externalReference = normalizeString(payment.external_reference);
      if (externalReference) {
        await updateCheckoutOrderByExternalReference(externalReference, patch);
      } else {
        await updateCheckoutOrderByPaymentId(payment.id, patch);
      }
    } catch (error) {
      console.error("webhook-order-update-failed", error);
    }
  }

  return jsonResponse({ ok: true });
});
