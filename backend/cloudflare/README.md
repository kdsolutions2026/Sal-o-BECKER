# Backend Cloudflare - Salao Becker

Este e o backend que substitui o Supabase no checkout.

## O que ele oferece

- Worker HTTP com as rotas `config`, `shipping-quote`, `process-payment`,
  `webhook-mercadopago` e `health`.
- Banco D1 para pedidos e notificacoes do Mercado Pago.
- pedido pendente gravado antes de chamar o Mercado Pago;
- idempotencia para evitar pagamentos duplicados em repeticoes da mesma tentativa;
- validacao HMAC da assinatura do webhook;
- precos e frete recalculados no servidor;
- CORS limitado as origens configuradas.

O frontend continua no Vercel ou GitHub Pages. O Supabase deve permanecer
configurado em `scripts/runtime-config.js` ate o Worker publicado passar pelos
testes finais.

## Preparacao local

1. Instale as dependencias com `npm install` nesta pasta.
2. Copie `.dev.vars.example` para `.dev.vars` e use credenciais TEST do Mercado Pago.
3. Rode `npm run db:migrate:local`.
4. Rode `npm run dev`.
5. Teste `http://localhost:8787/health`.

## Publicacao

1. Entre na Cloudflare com `npx wrangler login`.
2. Crie o banco com `npx wrangler d1 create salao-becker`.
3. Troque o `database_id` de exemplo em `wrangler.toml` pelo ID retornado.
4. Cadastre as secrets:

   - `npx wrangler secret put MERCADO_PAGO_PUBLIC_KEY`
   - `npx wrangler secret put MERCADO_PAGO_ACCESS_TOKEN`
   - `npx wrangler secret put MERCADO_PAGO_WEBHOOK_SECRET`

5. Rode `npm run db:migrate:remote`.
6. Rode `npm run deploy`.
7. Configure no Mercado Pago o webhook publicado:
   `https://SEU_WORKER.workers.dev/webhook-mercadopago`.
8. Atualize `scripts/runtime-config.js` para:

```js
window.BECKER_RUNTIME = window.BECKER_RUNTIME || {
  apiProvider: "cloudflare",
  apiBaseUrl: "https://SEU_WORKER.workers.dev",
  apiKey: "",
};
```

## Observacoes de seguranca

- `.dev.vars` nunca deve ser publicado.
- O Access Token do Mercado Pago existe somente como secret do Worker.
- A Public Key pode ser entregue ao navegador pela rota `config`.
- O banco nao possui rota publica para listar pedidos.
- No plano gratuito, o Time Travel do D1 permite restaurar os ultimos 7 dias.
  Para retencao maior, exporte o banco periodicamente.
