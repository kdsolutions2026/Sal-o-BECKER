import logisticsData from "./data/logistics.json";
import type { Env } from "./types";

type CartEntry = { id?: string; qty?: number };
type Buyer = {
  fullName?: string;
  email?: string;
  cpf?: string;
  phone?: string;
};

type PaymentFormData = Record<string, unknown>;

type ShippingInput = {
  mode?: string;
  zip?: string;
};

type LogisticsProduct = {
  id: string;
  name: string;
  price_brl: number | null;
  shipping_enabled: boolean;
  weight_kg: number | null;
  width_cm: number | null;
  height_cm: number | null;
  length_cm: number | null;
  data_status?: string;
};

type LogisticsFile = {
  meta?: {
    origin?: {
      postal_code?: string;
    };
  };
  products?: LogisticsProduct[];
};

const logistics = logisticsData as LogisticsFile;

const PRODUCT_CATALOG = Object.fromEntries(
  (logistics.products || []).map((product) => [
    product.id,
    {
      price: Number(product.price_brl || 0),
      shippingEnabled: Boolean(product.shipping_enabled),
      weightKg: Number(product.weight_kg || 0),
      widthCm: Number(product.width_cm || 0),
      heightCm: Number(product.height_cm || 0),
      lengthCm: Number(product.length_cm || 0),
      dataStatus: String(product.data_status || ""),
      name: String(product.name || product.id),
    },
  ]),
);

export function getPublicConfig(env: Env) {
  const publicKey = env.MERCADO_PAGO_PUBLIC_KEY?.trim();
  if (!publicKey) {
    throw new Error("Defina MERCADO_PAGO_PUBLIC_KEY nas secrets do Cloudflare Worker.");
  }

  return {
    publicKey,
    isTestMode: publicKey.startsWith("TEST-"),
  };
}

export function normalizeDigits(value: unknown) {
  return String(value || "").replace(/\D/g, "");
}

export function normalizeString(value: unknown) {
  return String(value || "").trim();
}

function isRepeatedDigits(value: string) {
  return /^(\d)\1+$/.test(value);
}

export function isValidCpf(value: unknown) {
  const digits = normalizeDigits(value);
  if (digits.length !== 11 || isRepeatedDigits(digits)) return false;

  const calcDigit = (base: string, factor: number) => {
    let total = 0;
    for (const digit of base) {
      total += Number(digit) * factor--;
    }
    const remainder = (total * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  const firstDigit = calcDigit(digits.slice(0, 9), 10);
  const secondDigit = calcDigit(digits.slice(0, 10), 11);
  return firstDigit === Number(digits[9]) && secondDigit === Number(digits[10]);
}

export function roundMoney(value: unknown) {
  return Number(Number(value || 0).toFixed(2));
}

export function originPostalCode() {
  const digits = normalizeDigits(logistics?.meta?.origin?.postal_code || "15061-090");
  return digits.length === 8 ? digits : "15061090";
}

function detectDestinationRegion(zip: string) {
  const prefix = Number(String(zip || "").slice(0, 2));

  if (prefix >= 1 && prefix <= 19) {
    return {
      code: "sp",
      label: "SP",
      pacBase: 14.9,
      sedexBase: 23.9,
      pacWeightRate: 7.2,
      sedexWeightRate: 10.4,
      pacDays: "3 a 5 dias uteis",
      sedexDays: "1 a 3 dias uteis",
      pacExtraItem: 1.25,
      sedexExtraItem: 1.75,
    };
  }

  if ((prefix >= 20 && prefix <= 39) || prefix === 13) {
    return {
      code: "sudeste",
      label: "Sudeste",
      pacBase: 18.9,
      sedexBase: 29.9,
      pacWeightRate: 8.4,
      sedexWeightRate: 12.6,
      pacDays: "4 a 6 dias uteis",
      sedexDays: "2 a 4 dias uteis",
      pacExtraItem: 1.5,
      sedexExtraItem: 2.1,
    };
  }

  if ((prefix >= 80 && prefix <= 99) || (prefix >= 70 && prefix <= 79)) {
    return {
      code: "sul_centro",
      label: "Sul e Centro-Oeste",
      pacBase: 23.9,
      sedexBase: 36.9,
      pacWeightRate: 9.8,
      sedexWeightRate: 14.9,
      pacDays: "5 a 8 dias uteis",
      sedexDays: "2 a 5 dias uteis",
      pacExtraItem: 1.9,
      sedexExtraItem: 2.6,
    };
  }

  if (prefix >= 40 && prefix <= 69) {
    return {
      code: "nordeste",
      label: "Nordeste",
      pacBase: 29.9,
      sedexBase: 44.9,
      pacWeightRate: 11.6,
      sedexWeightRate: 17.4,
      pacDays: "6 a 9 dias uteis",
      sedexDays: "3 a 6 dias uteis",
      pacExtraItem: 2.2,
      sedexExtraItem: 3.1,
    };
  }

  return {
    code: "norte",
    label: "Norte",
    pacBase: 36.9,
    sedexBase: 54.9,
    pacWeightRate: 13.8,
    sedexWeightRate: 20.6,
    pacDays: "7 a 11 dias uteis",
    sedexDays: "4 a 7 dias uteis",
    pacExtraItem: 2.6,
    sedexExtraItem: 3.7,
  };
}

export function normalizeCartItems(input: CartEntry[]) {
  if (!Array.isArray(input)) return [];

  return input.map((entry) => {
    const id = normalizeString(entry?.id);
    const product = PRODUCT_CATALOG[id];
    const unitPrice = Number(product?.price || 0);
    if (!id || !(unitPrice > 0)) return null;

    const qty = Math.min(20, Math.max(1, Math.floor(Number(entry?.qty || 1))));
    const widthCm = Number(product?.widthCm || 0);
    const heightCm = Number(product?.heightCm || 0);
    const lengthCm = Number(product?.lengthCm || 0);

    return {
      id,
      qty,
      unitPrice: roundMoney(unitPrice),
      total: roundMoney(unitPrice * qty),
      weightKg: Number(product?.weightKg || 0),
      widthCm,
      heightCm,
      lengthCm,
      volumeCm3: roundMoney(widthCm * heightCm * lengthCm),
      shippingEnabled: Boolean(product?.shippingEnabled),
      dataStatus: String(product?.dataStatus || ""),
      name: String(product?.name || id),
    };
  }).filter((item): item is NonNullable<typeof item> => Boolean(item));
}

export function calculateShippingQuote(zip: string, cartItems: CartEntry[]) {
  const normalizedZip = normalizeDigits(zip);
  if (normalizedZip.length !== 8) {
    throw new Error("CEP invalido para calculo de frete.");
  }

  const items = normalizeCartItems(cartItems);
  if (!items.length) {
    throw new Error("Carrinho vazio para calculo de frete.");
  }

  const invalidItems = items.filter((item) =>
    !item.shippingEnabled ||
    !(item.weightKg > 0) ||
    !(item.widthCm > 0) ||
    !(item.heightCm > 0) ||
    !(item.lengthCm > 0)
  );

  if (invalidItems.length) {
    throw new Error("Alguns produtos ainda nao possuem dados logisticos suficientes para calcular o frete.");
  }

  const quantity = items.reduce((sum, item) => sum + item.qty, 0);
  const actualWeight = items.reduce((sum, item) => sum + (item.weightKg * item.qty), 0);
  const totalVolumeCm3 = items.reduce((sum, item) => sum + (item.volumeCm3 * item.qty), 0);
  const volumetricWeight = totalVolumeCm3 / 6000;
  const billableWeight = roundMoney(Math.max(actualWeight, volumetricWeight, 0.3));
  const extraItems = Math.max(0, quantity - 1);
  const region = detectDestinationRegion(normalizedZip);

  const options = [
    {
      code: "PAC",
      serviceLabel: `Correios PAC - ${region.label}`,
      estimate: region.pacDays,
      amount: roundMoney(region.pacBase + billableWeight * region.pacWeightRate + extraItems * region.pacExtraItem),
    },
    {
      code: "SEDEX",
      serviceLabel: `Correios SEDEX - ${region.label}`,
      estimate: region.sedexDays,
      amount: roundMoney(region.sedexBase + billableWeight * region.sedexWeightRate + extraItems * region.sedexExtraItem),
    },
  ].sort((a, b) => a.amount - b.amount);

  const selected = options[0];

  return {
    zip: normalizedZip,
    originZip: originPostalCode(),
    amount: selected.amount,
    quantity,
    estimate: selected.estimate,
    serviceLabel: selected.serviceLabel,
    serviceCode: selected.code,
    options,
    region: region.label,
    actualWeightKg: roundMoney(actualWeight),
    volumetricWeightKg: roundMoney(volumetricWeight),
    billableWeightKg: billableWeight,
    quoteModel: "correios_estimado_base_local",
  };
}

export function buildOrder(cartItems: CartEntry[], shipping: ShippingInput = {}) {
  const items = normalizeCartItems(cartItems);
  const subtotal = roundMoney(items.reduce((sum, item) => sum + item.total, 0));
  const quantity = items.reduce((sum, item) => sum + item.qty, 0);
  const shippingMode = (shipping?.mode || "pickup") === "delivery" ? "delivery" : "pickup";
  const shippingZip = shippingMode === "delivery" ? normalizeDigits(shipping?.zip || "") : "";

  let shippingAmount = 0;
  let shippingLabel = "Retirada no salao";

  if (shippingMode === "delivery") {
    const quote = calculateShippingQuote(shipping?.zip || "", cartItems);
    shippingAmount = quote.amount;
    shippingLabel = quote.serviceLabel;
  }

  return {
    items,
    subtotal,
    shippingAmount,
    shippingLabel,
    shippingMode,
    shippingZip,
    total: roundMoney(subtotal + shippingAmount),
    quantity,
    description: quantity === 1 ? "Pedido Becker - 1 item" : `Pedido Becker - ${quantity} itens`,
  };
}

function splitFullName(value: string) {
  const parts = String(value || "").trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
}

export function buildPayer(formData: PaymentFormData, buyer: Buyer = {}) {
  const raw = formData as any;
  const cpf = normalizeDigits(
    buyer?.cpf ||
      raw?.payer?.identification?.number ||
      raw?.identificationNumber,
  );
  const phone = normalizeDigits(
    buyer?.phone ||
      raw?.payer?.phone?.number ||
      raw?.phone?.number,
  );
  const fallbackSeed = cpf || phone || String(Date.now());
  const fullName = normalizeString(buyer?.fullName);
  const { firstName, lastName } = splitFullName(fullName);

  const payer: Record<string, unknown> = {
    email:
      normalizeString(
        buyer?.email ||
          raw?.payer?.email ||
          raw?.email ||
          raw?.cardholderEmail,
      ) || `cliente-${fallbackSeed}@becker-checkout.example.com`,
  };

  if (firstName) payer.first_name = firstName;
  if (lastName) payer.last_name = lastName;
  if (cpf && !isValidCpf(cpf)) {
    throw new Error("CPF invalido para gerar o pagamento.");
  }
  if (cpf.length === 11) {
    payer.identification = {
      type: "CPF",
      number: cpf,
    };
  }

  return payer;
}

function inferWebhookUrl(requestUrl: string, env: Env) {
  const configured = env.MERCADO_PAGO_WEBHOOK_URL?.trim();
  if (configured) return configured;
  return requestUrl.replace(/process-payment\/?$/, "webhook-mercadopago");
}

export function generateExternalReference() {
  return `becker-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
}

export function buildPaymentPayload(
  order: ReturnType<typeof buildOrder>,
  formData: PaymentFormData,
  buyer: Buyer,
  requestUrl: string,
  env: Env,
  externalReference = generateExternalReference(),
) {
  const raw = formData as any;
  const paymentMethodId = normalizeString(raw?.payment_method_id || raw?.paymentMethodId);
  if (!paymentMethodId) {
    throw new Error("Metodo de pagamento nao informado pelo checkout.");
  }

  const payload: Record<string, unknown> = {
    transaction_amount: order.total,
    description: order.description,
    payment_method_id: paymentMethodId,
    payer: buildPayer(formData, buyer),
    external_reference: externalReference,
    notification_url: inferWebhookUrl(requestUrl, env),
  };

  if (paymentMethodId === "pix") {
    return payload;
  }

  payload.token = normalizeString(raw?.token);
  payload.installments = Math.max(1, Number(raw?.installments || 1));

  const issuerId = Number(raw?.issuer_id || raw?.issuerId || 0);
  if (issuerId > 0) payload.issuer_id = issuerId;

  if (!payload.token) {
    throw new Error("Token do cartao nao foi recebido.");
  }

  return payload;
}

export async function createMercadoPagoPayment(
  payload: Record<string, unknown>,
  env: Env,
  idempotencyKey: string,
) {
  const accessToken = env.MERCADO_PAGO_ACCESS_TOKEN?.trim();
  if (!accessToken) {
    throw new Error("Defina MERCADO_PAGO_ACCESS_TOKEN nas secrets do Cloudflare Worker.");
  }

  const apiBaseUrl = String(env.MERCADO_PAGO_API_BASE_URL || "https://api.mercadopago.com").replace(/\/$/, "");
  const response = await fetch(`${apiBaseUrl}/v1/payments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "X-Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as Record<string, any>;

  if (!response.ok) {
    const message =
      data?.message ||
      data?.cause?.[0]?.description ||
      "Mercado Pago recusou a solicitacao.";
    const error = new Error(message);
    (error as Error & { status?: number; details?: unknown }).status = response.status;
    (error as Error & { status?: number; details?: unknown }).details = data;
    throw error;
  }

  return data;
}

export async function fetchMercadoPagoPayment(paymentId: string | number, env: Env) {
  const accessToken = env.MERCADO_PAGO_ACCESS_TOKEN?.trim();
  if (!accessToken) {
    throw new Error("Defina MERCADO_PAGO_ACCESS_TOKEN nas secrets do Cloudflare Worker.");
  }

  const apiBaseUrl = String(env.MERCADO_PAGO_API_BASE_URL || "https://api.mercadopago.com").replace(/\/$/, "");
  const response = await fetch(`${apiBaseUrl}/v1/payments/${encodeURIComponent(String(paymentId))}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json().catch(() => ({}))) as Record<string, any>;

  if (!response.ok) {
    const message =
      data?.message ||
      data?.cause?.[0]?.description ||
      "Nao foi possivel consultar o pagamento no Mercado Pago.";
    throw new Error(message);
  }

  return data;
}
