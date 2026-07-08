# Base de Frete

Esta pasta guarda a base inicial para frete real da loja.

Arquivos:
- `base-frete-correios.json`: base estruturada para futura integracao no sistema.
- `base-frete-correios.csv`: planilha simples para revisar e completar manualmente.

Decisoes assumidas nesta base:
- origem do envio: `Rua dos Lirios, 886 - Jd Seixas - Sao Jose do Rio Preto/SP`
- CEP de origem: `15061-090`
- transportadora alvo: `Correios`
- forma de integracao prevista: `Melhor Envio`
- servicos previstos: `PAC` e `SEDEX`

Campos que ainda precisam de confirmacao:
- `weight_kg`
- `width_cm`
- `height_cm`
- `length_cm`

Observacao importante:
As medidas do frete devem refletir a embalagem real de envio, nao apenas o frasco ou produto solto. Por isso os campos fisicos foram deixados como pendentes nesta primeira base.
