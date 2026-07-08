import { handleOptions, jsonResponse } from "../_shared/cors.ts";
import {
  buildOrder,
  buildPaymentPayload,
  createMercadoPagoPayment,
  generateExternalReference,
} from "../_shared/domain.ts";
import { upsertCheckoutOrder } from "../_shared/persistence.ts";

Deno.serve(async (req) => {
  const optionsResponse = handleOptions(req);
  if (optionsResponse) return optionsResponse;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Metodo nao permitido." }, 405);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const order = buildOrder(body?.cartItems || [], body?.shipping || {});

    if (!order.items.length || !order.total) {
      return jsonResponse({ error: "Carrinho vazio ou com itens sem preco valido." }, 400);
    }

    const externalReference = generateExternalReference();
    const payload = buildPaymentPayload(order, body?.formData || {}, body?.buyer || {}, req.url, externalReference);
    const payment = await createMercadoPagoPayment(payload);
    let orderStored = false;

    try {
      const persistence = await upsertCheckoutOrder({
        external_reference: externalReference,
        payment_id: payment.id,
        status: payment.status,
        status_detail: payment.status_detail,
        payment_method_id: payment.payment_method_id,
        buyer_name: String(body?.buyer?.fullName || ""),
        buyer_email: String(body?.buyer?.email || ""),
        buyer_cpf: String(body?.buyer?.cpf || ""),
        buyer_phone: String(body?.buyer?.phone || ""),
        notes: String(body?.buyer?.notes || ""),
        shipping_mode: order.shippingMode,
        shipping_zip: order.shippingZip,
        shipping_label: order.shippingLabel,
        subtotal_amount: order.subtotal,
        shipping_amount: order.shippingAmount,
        total_amount: payment.transaction_amount,
        cart_items: order.items,
        mercado_pago_payload: payload,
        mercado_pago_response: payment,
      });
      orderStored = Boolean(persistence.ok && !persistence.skipped);
    } catch (persistenceError) {
      console.error("checkout-order-persist-failed", persistenceError);
    }

    return jsonResponse({
      externalReference,
      paymentId: payment.id,
      status: payment.status,
      statusDetail: payment.status_detail,
      paymentMethodId: payment.payment_method_id,
      subtotal: order.subtotal,
      shippingAmount: order.shippingAmount,
      amount: payment.transaction_amount,
      orderStored,
      pix: {
        code: payment.point_of_interaction?.transaction_data?.qr_code || null,
        qrCodeBase64: payment.point_of_interaction?.transaction_data?.qr_code_base64 || null,
      },
      boletoUrl: payment.transaction_details?.external_resource_url || null,
      ticketUrl: payment.point_of_interaction?.transaction_data?.ticket_url || null,
      mercadoPagoResponse: payment,
    });
  } catch (error) {
    const typedError = error as Error & { status?: number; details?: unknown };
    return jsonResponse(
      {
        error: typedError.message || "Nao foi possivel processar o pagamento.",
        details: typedError.details || null,
      },
      typedError.status || 400,
    );
  }
});
