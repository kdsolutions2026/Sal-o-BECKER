import { handleOptions, jsonResponse } from "../_shared/cors.ts";
import { getPublicConfig, originPostalCode } from "../_shared/domain.ts";

Deno.serve((req) => {
  const optionsResponse = handleOptions(req);
  if (optionsResponse) return optionsResponse;

  if (req.method !== "GET") {
    return jsonResponse({ error: "Metodo nao permitido." }, 405);
  }

  try {
    return jsonResponse({
      ...getPublicConfig(),
      shippingOriginZip: originPostalCode(),
      shippingQuoteModel: "correios_estimado_base_local",
    });
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Erro ao carregar configuracao." }, 500);
  }
});
