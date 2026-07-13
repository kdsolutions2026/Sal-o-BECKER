import type { CheckoutOrderRow, PendingOrderRecord } from "./types";

function toCents(value: number) {
  return Math.round(Number(value || 0) * 100);
}

function serialize(value: unknown) {
  return JSON.stringify(value ?? null);
}

export async function createOrGetPendingOrder(db: D1Database, record: PendingOrderRecord) {
  await db
    .prepare(
      `INSERT OR IGNORE INTO checkout_orders (
        id, request_id, external_reference, status, payment_method_id,
        buyer_name, buyer_email, buyer_cpf, buyer_phone, notes,
        shipping_mode, shipping_zip, shipping_label,
        subtotal_amount_cents, shipping_amount_cents, total_amount_cents,
        cart_items, mercado_pago_payload
      ) VALUES (?, ?, ?, 'creating', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      record.id,
      record.requestId,
      record.externalReference,
      record.paymentMethodId,
      record.buyerName,
      record.buyerEmail,
      record.buyerCpf,
      record.buyerPhone,
      record.notes,
      record.shippingMode,
      record.shippingZip,
      record.shippingLabel,
      toCents(record.subtotalAmount),
      toCents(record.shippingAmount),
      toCents(record.totalAmount),
      serialize(record.cartItems),
      serialize(record.mercadoPagoPayload),
    )
    .run();

  return getOrderByRequestId(db, record.requestId);
}

export async function getOrderByRequestId(db: D1Database, requestId: string) {
  return db
    .prepare(
      `SELECT id, request_id, external_reference, payment_id, status,
        status_detail, payment_method_id, shipping_amount_cents,
        total_amount_cents, mercado_pago_response
       FROM checkout_orders
       WHERE request_id = ?
       LIMIT 1`,
    )
    .bind(requestId)
    .first<CheckoutOrderRow>();
}

export async function storePaymentResult(
  db: D1Database,
  externalReference: string,
  payment: Record<string, any>,
) {
  return db
    .prepare(
      `UPDATE checkout_orders
       SET payment_id = ?, status = ?, status_detail = ?, payment_method_id = ?,
           total_amount_cents = ?, mercado_pago_response = ?, last_error = NULL,
           updated_at = CURRENT_TIMESTAMP
       WHERE external_reference = ?`,
    )
    .bind(
      String(payment.id || "") || null,
      String(payment.status || "pending"),
      String(payment.status_detail || "") || null,
      String(payment.payment_method_id || "") || null,
      toCents(Number(payment.transaction_amount || 0)),
      serialize(payment),
      externalReference,
    )
    .run();
}

export async function storePaymentError(db: D1Database, externalReference: string, error: unknown) {
  const typedError = error as Error & { details?: unknown };
  return db
    .prepare(
      `UPDATE checkout_orders
       SET status = 'payment_error', last_error = ?, updated_at = CURRENT_TIMESTAMP
       WHERE external_reference = ?`,
    )
    .bind(
      serialize({
        message: typedError?.message || "Erro desconhecido",
        details: typedError?.details || null,
      }),
      externalReference,
    )
    .run();
}

export async function insertWebhookLog(
  db: D1Database,
  record: {
    requestId: string;
    topic: string;
    action: string;
    paymentId: string;
    payload: unknown;
  },
) {
  return db
    .prepare(
      `INSERT INTO mercadopago_webhooks (
        request_id, topic, action, payment_id, signature_valid, payload
      ) VALUES (?, ?, ?, ?, 1, ?)`,
    )
    .bind(
      record.requestId || null,
      record.topic || null,
      record.action || null,
      record.paymentId || null,
      serialize(record.payload),
    )
    .run();
}

export async function updateOrderFromWebhook(
  db: D1Database,
  payment: Record<string, any>,
) {
  const externalReference = String(payment.external_reference || "").trim();
  const paymentId = String(payment.id || "").trim();
  if (!externalReference && !paymentId) return null;

  const whereClause = externalReference ? "external_reference = ?" : "payment_id = ?";
  const whereValue = externalReference || paymentId;

  return db
    .prepare(
      `UPDATE checkout_orders
       SET payment_id = ?, status = ?, status_detail = ?, payment_method_id = ?,
           total_amount_cents = ?, mercado_pago_response = ?, last_error = NULL,
           updated_at = CURRENT_TIMESTAMP
       WHERE ${whereClause}`,
    )
    .bind(
      paymentId || null,
      String(payment.status || "pending"),
      String(payment.status_detail || "") || null,
      String(payment.payment_method_id || "") || null,
      toCents(Number(payment.transaction_amount || 0)),
      serialize(payment),
      whereValue,
    )
    .run();
}

export function parseStoredPayment(row: CheckoutOrderRow | null) {
  if (!row?.mercado_pago_response) return null;
  try {
    return JSON.parse(row.mercado_pago_response) as Record<string, any>;
  } catch {
    return null;
  }
}
