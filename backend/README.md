# Backend

Esta pasta contem o que fica fora do frontend:

- `api/`
  - backend PHP atual
- `logistica/`
  - base de frete usada no checkout
- `supabase/`
  - nova estrutura de Edge Functions para publicacao
  - migrations do banco para pedidos e webhooks

Destino previsto:
- hoje: `supabase/` para publicacao no Supabase
- `api/` fica como referencia do backend antigo

Observacao:
- a pasta `_local/` que ficou na raiz e apenas para teste local com Node
- ela nao deve ir para GitHub Pages
- a pasta `supabase/` e a que voce vai usar para concluir a migracao
