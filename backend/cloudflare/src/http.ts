import type { Env } from "./types";

const BASE_HEADERS = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
};

function configuredOrigins(env: Env) {
  return String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export function isOriginAllowed(req: Request, env: Env) {
  const origin = req.headers.get("Origin");
  if (!origin) return true;

  const allowed = configuredOrigins(env);
  return allowed.includes("*") || allowed.includes(origin);
}

export function corsHeaders(req: Request, env: Env) {
  const origin = req.headers.get("Origin");
  const allowed = configuredOrigins(env);
  const allowOrigin = allowed.includes("*") ? "*" : origin && allowed.includes(origin) ? origin : "";

  return {
    ...(allowOrigin ? { "Access-Control-Allow-Origin": allowOrigin } : {}),
    "Access-Control-Allow-Headers": "content-type, x-idempotency-key",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export function jsonResponse(
  req: Request,
  env: Env,
  payload: unknown,
  status = 200,
  extraHeaders: HeadersInit = {},
) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...BASE_HEADERS,
      ...corsHeaders(req, env),
      ...extraHeaders,
    },
  });
}

export function handleOptions(req: Request, env: Env) {
  if (req.method !== "OPTIONS") return null;
  if (!isOriginAllowed(req, env)) {
    return jsonResponse(req, env, { error: "Origem nao autorizada." }, 403);
  }
  return new Response(null, { status: 204, headers: corsHeaders(req, env) });
}

export async function readJsonBody(req: Request, maxBytes = 64 * 1024) {
  const declaredLength = Number(req.headers.get("Content-Length") || 0);
  if (declaredLength > maxBytes) {
    throw Object.assign(new Error("Solicitacao muito grande."), { status: 413 });
  }

  const raw = await req.text();
  if (new TextEncoder().encode(raw).byteLength > maxBytes) {
    throw Object.assign(new Error("Solicitacao muito grande."), { status: 413 });
  }

  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    throw Object.assign(new Error("JSON invalido."), { status: 400 });
  }
}
