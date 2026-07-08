import { handleOptions, jsonResponse } from "../_shared/cors.ts";
import { calculateShippingQuote } from "../_shared/domain.ts";

Deno.serve(async (req) => {
  const optionsResponse = handleOptions(req);
  if (optionsResponse) return optionsResponse;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Metodo nao permitido." }, 405);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const quote = calculateShippingQuote(body?.zip || "", body?.cartItems || []);
    return jsonResponse(quote);
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Nao foi possivel calcular o frete." }, 400);
  }
});

