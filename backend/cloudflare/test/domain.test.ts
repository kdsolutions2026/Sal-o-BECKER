import { describe, expect, it } from "vitest";
import { buildOrder, buildPaymentPayload, calculateShippingQuote, isValidCpf } from "../src/domain";
import type { Env } from "../src/types";

const env = {
  MERCADO_PAGO_PUBLIC_KEY: "TEST-public",
  MERCADO_PAGO_ACCESS_TOKEN: "TEST-access",
  MERCADO_PAGO_WEBHOOK_SECRET: "secret",
} as Env;

describe("checkout domain", () => {
  it("recalcula o preco pelo catalogo do servidor", () => {
    const order = buildOrder([{ id: "lanza-trauma-treatment", qty: 2 }], { mode: "pickup" });
    expect(order.subtotal).toBe(680);
    expect(order.total).toBe(680);
    expect(order.items[0]?.unitPrice).toBe(340);
  });

  it("mantem o produto temporario de homologacao em R$ 1,00", () => {
    const order = buildOrder([{ id: "pagamento-teste-1-real", qty: 1 }], { mode: "pickup" });
    expect(order.subtotal).toBe(1);
    expect(order.total).toBe(1);
  });

  it("calcula frete sem confiar em valores enviados pelo navegador", () => {
    const quote = calculateShippingQuote("15061-090", [{ id: "lanza-trauma-treatment", qty: 1 }]);
    expect(quote.amount).toBeGreaterThan(0);
    expect(quote.originZip).toBe("15061090");
    expect(quote.region).toBe("SP");
  });

  it("limita quantidade por item", () => {
    const order = buildOrder([{ id: "lanza-trauma-treatment", qty: 999 }], { mode: "pickup" });
    expect(order.items[0]?.qty).toBe(20);
  });

  it("valida CPF antes do pagamento", () => {
    expect(isValidCpf("529.982.247-25")).toBe(true);
    expect(isValidCpf("111.111.111-11")).toBe(false);
  });

  it("monta a URL do webhook no proprio Worker", () => {
    const order = buildOrder([{ id: "lanza-trauma-treatment", qty: 1 }], { mode: "pickup" });
    const payload = buildPaymentPayload(
      order,
      { payment_method_id: "pix" },
      { fullName: "Cliente Teste", email: "cliente@example.com", cpf: "52998224725" },
      "https://salao-becker-api.example.workers.dev/process-payment",
      env,
      "becker-test",
    );

    expect(payload.notification_url).toBe(
      "https://salao-becker-api.example.workers.dev/webhook-mercadopago",
    );
    expect(payload.external_reference).toBe("becker-test");
  });
});
