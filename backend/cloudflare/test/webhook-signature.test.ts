import { describe, expect, it } from "vitest";
import { verifyMercadoPagoSignature } from "../src/webhook-signature";

async function sign(value: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

describe("Mercado Pago webhook signature", () => {
  it("aceita uma assinatura valida e rejeita adulteracao", async () => {
    const secret = "webhook-secret";
    const requestId = "request-123";
    const timestamp = "1720000000";
    const manifest = `id:987654;request-id:${requestId};ts:${timestamp};`;
    const signature = await sign(manifest, secret);
    const request = new Request("https://example.workers.dev/webhook-mercadopago?data.id=987654", {
      method: "POST",
      headers: {
        "x-request-id": requestId,
        "x-signature": `ts=${timestamp},v1=${signature}`,
      },
    });

    expect(await verifyMercadoPagoSignature(request, secret)).toBe(true);
    expect(await verifyMercadoPagoSignature(request, "wrong-secret")).toBe(false);
  });
});
