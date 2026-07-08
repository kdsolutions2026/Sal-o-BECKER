function readServiceRoleKey() {
  const legacy = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")?.trim();
  if (legacy) return legacy;

  const secretKeysRaw = Deno.env.get("SUPABASE_SECRET_KEYS")?.trim();
  if (!secretKeysRaw) return "";

  try {
    const secretKeys = JSON.parse(secretKeysRaw);
    if (typeof secretKeys?.default === "string" && secretKeys.default.trim()) {
      return secretKeys.default.trim();
    }

    const firstKey = Object.values(secretKeys).find((value) => typeof value === "string" && value.trim());
    return typeof firstKey === "string" ? firstKey.trim() : "";
  } catch {
    return "";
  }
}

function readRestConfig() {
  const rawUrl = Deno.env.get("SUPABASE_URL")?.trim();
  const url = rawUrl ? rawUrl.replace(/\/$/, "") : "";
  const serviceRoleKey = readServiceRoleKey();

  if (!url || !serviceRoleKey) {
    return null;
  }

  return { url, serviceRoleKey };
}

async function restRequest(path: string, init: RequestInit) {
  const config = readRestConfig();
  if (!config) {
    return { ok: false, skipped: true, reason: "Supabase REST credentials indisponiveis." };
  }

  const response = await fetch(`${config.url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(message || "Operacao REST no Supabase falhou.");
  }

  return { ok: true, skipped: false };
}

export async function upsertCheckoutOrder(record: Record<string, unknown>) {
  return restRequest("checkout_orders?on_conflict=external_reference", {
    method: "POST",
    headers: {
      Prefer: "resolution=merge-duplicates, return=minimal",
    },
    body: JSON.stringify([record]),
  });
}

export async function updateCheckoutOrderByExternalReference(externalReference: string, patch: Record<string, unknown>) {
  return restRequest(`checkout_orders?external_reference=eq.${encodeURIComponent(externalReference)}`, {
    method: "PATCH",
    headers: {
      Prefer: "return=minimal",
    },
    body: JSON.stringify(patch),
  });
}

export async function updateCheckoutOrderByPaymentId(paymentId: string | number, patch: Record<string, unknown>) {
  return restRequest(`checkout_orders?payment_id=eq.${encodeURIComponent(String(paymentId))}`, {
    method: "PATCH",
    headers: {
      Prefer: "return=minimal",
    },
    body: JSON.stringify(patch),
  });
}

export async function insertWebhookLog(record: Record<string, unknown>) {
  return restRequest("mercadopago_webhooks", {
    method: "POST",
    headers: {
      Prefer: "return=minimal",
    },
    body: JSON.stringify([record]),
  });
}
