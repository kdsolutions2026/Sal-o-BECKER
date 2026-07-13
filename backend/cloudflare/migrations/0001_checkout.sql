CREATE TABLE IF NOT EXISTS checkout_orders (
  id TEXT PRIMARY KEY NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  request_id TEXT NOT NULL UNIQUE,
  external_reference TEXT NOT NULL UNIQUE,
  payment_id TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'creating',
  status_detail TEXT,
  payment_method_id TEXT,
  buyer_name TEXT,
  buyer_email TEXT,
  buyer_cpf TEXT,
  buyer_phone TEXT,
  notes TEXT,
  shipping_mode TEXT NOT NULL DEFAULT 'pickup',
  shipping_zip TEXT,
  shipping_label TEXT,
  subtotal_amount_cents INTEGER NOT NULL DEFAULT 0,
  shipping_amount_cents INTEGER NOT NULL DEFAULT 0,
  total_amount_cents INTEGER NOT NULL DEFAULT 0,
  cart_items TEXT NOT NULL DEFAULT '[]',
  mercado_pago_payload TEXT,
  mercado_pago_response TEXT,
  last_error TEXT
);

CREATE TABLE IF NOT EXISTS mercadopago_webhooks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  request_id TEXT,
  topic TEXT,
  action TEXT,
  payment_id TEXT,
  signature_valid INTEGER NOT NULL DEFAULT 1,
  payload TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_checkout_orders_created_at
  ON checkout_orders (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_checkout_orders_status
  ON checkout_orders (status);

CREATE INDEX IF NOT EXISTS idx_checkout_orders_payment_id
  ON checkout_orders (payment_id);

CREATE INDEX IF NOT EXISTS idx_mercadopago_webhooks_created_at
  ON mercadopago_webhooks (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_mercadopago_webhooks_payment_id
  ON mercadopago_webhooks (payment_id);
