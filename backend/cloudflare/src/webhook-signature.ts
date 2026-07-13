function parseSignature(value: string) {
  const parts = Object.fromEntries(
    value
      .split(",")
      .map((part) => part.trim().split("=", 2))
      .filter(([key, item]) => key && item),
  );

  return {
    timestamp: parts.ts || "",
    signature: parts.v1 || "",
  };
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

export async function verifyMercadoPagoSignature(req: Request, secret: string) {
  const signatureHeader = req.headers.get("x-signature") || "";
  const requestId = req.headers.get("x-request-id") || "";
  const url = new URL(req.url);
  const dataId = (url.searchParams.get("data.id") || url.searchParams.get("id") || "").toLowerCase();
  const { timestamp, signature } = parseSignature(signatureHeader);

  if (!secret || !dataId || !requestId || !timestamp || !signature) return false;

  const manifest = `id:${dataId};request-id:${requestId};ts:${timestamp};`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(manifest));
  return timingSafeEqual(toHex(digest), signature.toLowerCase());
}
