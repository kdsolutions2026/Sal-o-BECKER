# Checklist de troca Supabase para Cloudflare

## Antes da troca

- [ ] Testes e verificacao de tipos aprovados.
- [ ] Conta Cloudflare criada.
- [ ] Banco D1 `salao-becker` criado.
- [ ] `database_id` real colocado em `wrangler.toml`.
- [ ] Credenciais de TEST do Mercado Pago cadastradas como secrets.
- [ ] Migracao D1 aplicada remotamente.
- [ ] Worker publicado.

## Validacao em TEST

- [ ] `GET /health` retorna `ok: true`.
- [ ] `GET /config` retorna a Public Key TEST.
- [ ] Calculo de frete funciona para retirada e entrega.
- [ ] Pix TEST e criado uma unica vez ao repetir a mesma tentativa.
- [ ] Cartao TEST retorna o status esperado.
- [ ] Webhook assinado cria um registro e atualiza o pedido.
- [ ] Pedido aparece no D1 antes do envio ao Mercado Pago.

## Entrada em producao

- [ ] Secrets TEST trocadas pelas credenciais de producao.
- [ ] URL e assinatura do webhook de producao configuradas no Mercado Pago.
- [ ] `ALLOWED_ORIGINS` contem o endereco publico correto do site.
- [ ] `scripts/runtime-config.js` aponta para Cloudflare.
- [ ] Site publicado e checkout real validado com valor controlado.
- [ ] Supabase mantido intacto por alguns dias como contingencia.
- [ ] Backup final do Supabase exportado antes do encerramento.
