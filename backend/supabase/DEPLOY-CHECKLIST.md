# Checklist de Publicacao

## 1. Banco

No diretório `backend/supabase/`:

- `supabase login`
- `supabase link --project-ref SEU_PROJECT_REF`
- `supabase db push`

Isso cria as tabelas:
- `checkout_orders`
- `mercadopago_webhooks`

## 2. Secrets do Mercado Pago

Crie `functions/.env` baseado em `functions/.env.example` e preencha:

- `MERCADO_PAGO_PUBLIC_KEY`
- `MERCADO_PAGO_ACCESS_TOKEN`
- `MERCADO_PAGO_WEBHOOK_URL`

Depois envie:

- `supabase secrets set --env-file functions/.env`

## 3. Functions

Ainda em `backend/supabase/`:

- `supabase functions deploy config`
- `supabase functions deploy shipping-quote`
- `supabase functions deploy process-payment`
- `supabase functions deploy webhook-mercadopago`

## 4. Frontend

No `frontend/scripts/runtime-config.js`, preencher:

- `apiBaseUrl: "https://SEU_PROJECT_REF.supabase.co/functions/v1"`
- `apiKey: "SUA_PUBLISHABLE_KEY_DO_SUPABASE"`

## 5. Publicacao final

- GitHub: subir `frontend/`
- Supabase: usar `backend/supabase/`
- `_local/` nao publicar
- `backend/api/` nao publicar se for usar Supabase
