export interface Env {
  DB: D1Database;
  ALLOWED_ORIGINS?: string;
  MERCADO_PAGO_PUBLIC_KEY: string;
  MERCADO_PAGO_ACCESS_TOKEN: string;
  MERCADO_PAGO_WEBHOOK_SECRET: string;
  MERCADO_PAGO_WEBHOOK_URL?: string;
  MERCADO_PAGO_API_BASE_URL?: string;
}

export interface CheckoutOrderRow {
  id: string;
  request_id: string;
  external_reference: string;
  payment_id: string | null;
  status: string;
  status_detail: string | null;
  payment_method_id: string | null;
  shipping_amount_cents: number;
  total_amount_cents: number;
  mercado_pago_response: string | null;
}

export interface PendingOrderRecord {
  id: string;
  requestId: string;
  externalReference: string;
  paymentMethodId: string;
  buyerName: string;
  buyerEmail: string;
  buyerCpf: string;
  buyerPhone: string;
  notes: string;
  shippingMode: string;
  shippingZip: string;
  shippingLabel: string;
  subtotalAmount: number;
  shippingAmount: number;
  totalAmount: number;
  cartItems: unknown;
  mercadoPagoPayload: unknown;
}
