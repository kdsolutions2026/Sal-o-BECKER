# Supabase Backend

Esta pasta contem a migracao do backend para Supabase Edge Functions.

Funcoes criadas:
- `config`
- `shipping-quote`
- `process-payment`
- `webhook-mercadopago`

Banco criado:
- `migrations/20260708_init_checkout.sql`
- tabela `checkout_orders`
- tabela `mercadopago_webhooks`

Secrets necessarias:
- `MERCADO_PAGO_PUBLIC_KEY`
- `MERCADO_PAGO_ACCESS_TOKEN`
- `MERCADO_PAGO_WEBHOOK_URL` opcional

Fluxo esperado:
- frontend publicado no GitHub Pages
- funcoes publicadas no Supabase
- frontend apontando para `https://SEU_PROJECT_REF.supabase.co/functions/v1`

Comandos de deploy:
- `supabase login`
- `supabase link --project-ref SEU_PROJECT_REF`
- `supabase db push`
- `supabase secrets set --env-file functions/.env`
- `supabase functions deploy`

Para chamar as funcoes do navegador, use a publishable key do Supabase em `frontend/scripts/runtime-config.js`.
