const products = [
  {
    id: "lanza-trauma-treatment",
    name: "L'Anza Trauma Treatment",
    category: "Leave-in",
    price: 340,
    rating: 4.9,
    reviews: 51,
    image: "assets/products/catalog/lanza-trauma-treatment-clean.png",
    description: "Leave-in condicionante para cabelos sensibilizados por coloração, mechas ou processos químicos.",
    benefits: ["Reparação", "Maciez", "Elasticidade", "Proteção UV"],
    idealFor: "Fios fragilizados, sem toque e sem resistência depois da química.",
    usage: "Aplique pequena quantidade no comprimento e pontas antes da escova ou deixe secar naturalmente.",
    tip: "Eu gosto dele para cabelos que perderam toque e resistência depois da cor. Use uma pequena quantidade no comprimento e pontas antes da escova ou deixe secar naturalmente para manter o fio mais alinhado e protegido.",
    ingredients: "Composição cosmética profissional da linha Trauma Treatment. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Para publicação final, valide sempre a composição do lote no rótulo original antes da venda online, conforme exigência regulatória.",
    seoDescription: "Leave-in profissional para cabelos sensibilizados, com foco em reparação, maciez e proteção do fio no dia a dia."
  },
  {
    id: "lanza-healing-curls-conditioner",
    name: "L'Anza Healing Curls Conditioner",
    category: "Condicionador",
    price: 307,
    rating: 4.8,
    reviews: 24,
    image: "assets/products/catalog/lanza-healing-curls-conditioner-clean.png",
    description: "Condicionador para definição, emoliência e cuidado de cabelos cacheados ou ondulados.",
    benefits: ["Definição", "Emoliência", "Maciez", "Cachos"],
    idealFor: "Rotinas que precisam de cachos definidos sem perder movimento.",
    usage: "Aplique no comprimento após o shampoo, desembarace com delicadeza e enxágue bem.",
    tip: "Indico para quem quer cachos mais definidos sem perder movimento. Aplique no comprimento após o shampoo, desembarace com delicadeza e enxágue bem para manter leveza.",
    ingredients: "Composição cosmética profissional da linha Healing Curls. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Mantenha a composição exibida alinhada à rotulagem oficial do fabricante antes de disponibilizar o produto na loja.",
    seoDescription: "Condicionador profissional para cabelos cacheados e ondulados, com definição, maciez e emoliência."
  },
  {
    id: "lanza-colorcare-shampoo",
    name: "L'Anza Healing ColorCare Shampoo",
    category: "Shampoo",
    price: 312,
    rating: 4.8,
    reviews: 29,
    image: "assets/products/catalog/lanza-colorcare-shampoo-clean.png",
    description: "Shampoo para cabelos coloridos, indicado para preservar a cor e manter o fio com toque limpo e suave.",
    benefits: ["Cor preservada", "Limpeza suave", "Brilho", "Cabelos coloridos"],
    idealFor: "Quem faz coloração ou tonalização e quer manter o brilho entre as visitas ao salão.",
    usage: "Use nas lavagens de rotina e prefira água morna para preservar melhor a cor.",
    tip: "É uma boa escolha para quem faz coloração ou tonalização e quer prolongar o brilho. Use nas lavagens de rotina e evite água muito quente para preservar ainda mais a cor.",
    ingredients: "Composição cosmética profissional da linha ColorCare. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "A lista de ingredientes precisa acompanhar exatamente o rótulo do lote comercializado.",
    seoDescription: "Shampoo profissional para cabelos coloridos, com limpeza suave, brilho e proteção da cor."
  },
  {
    id: "sh-rd-protein-cream",
    name: "N.p.p.e. Sh-rd Nutra Protein Hair Treatment",
    category: "Tratamento",
    price: 110,
    rating: 4.8,
    reviews: 37,
    image: "assets/products/catalog/sh-rd-protein-cream-clean.png",
    description: "Leave-in de tratamento para reparação, restauração e revitalização dos fios.",
    benefits: ["Reparação", "Nutrição", "Controle de frizz", "Brilho"],
    idealFor: "Fios ressecados ou com química que precisam de acabamento mais polido.",
    usage: "Aplique pequena quantidade no cabelo úmido ou seco, sempre no comprimento e pontas.",
    tip: "Uso quando o cabelo precisa de acabamento mais polido. Uma pequena quantidade já ajuda a reduzir frizz e entregar brilho, principalmente em fios ressecados ou com química.",
    ingredients: "Composição cosmética profissional da linha Protein Cream. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Para adequação regulatória, a informação exibida deve ser revisada sempre que houver mudança de formulação do fabricante.",
    seoDescription: "Tratamento leave-in profissional para reparação, nutrição, brilho e controle de frizz."
  },
  {
    id: "redken-all-soft-shampoo",
    name: "Redken All Soft Shampoo",
    category: "Shampoo",
    price: null,
    priceLabel: "Consultar valor",
    rating: 4.8,
    reviews: 22,
    image: "assets/products/catalog/redken-all-soft-shampoo-clean.png",
    description: "Shampoo hidratante para cabelos secos, frágeis ou com toque áspero.",
    benefits: ["Hidratação", "Maciez", "Toque sedoso", "Cabelo seco"],
    idealFor: "Rotinas que buscam devolver maleabilidade e sensação de cabelo tratado.",
    usage: "Massageie no couro cabeludo e deixe a espuma escorrer para o comprimento.",
    tip: "Recomendo para quem sente o fio sem maleabilidade. Ele entra muito bem na rotina de cabelos secos, alternando com tratamentos profissionais quando o fio precisa de mais disciplina.",
    ingredients: "Composição cosmética profissional da linha All Soft. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Confirme a composição do lote no rótulo oficial antes da publicação final na loja.",
    seoDescription: "Shampoo profissional hidratante para cabelos secos, frágeis e com toque áspero."
  },
  {
    id: "kerastase-nutritive-bain-satin",
    name: "Kérastase Nutritive Bain Satin",
    category: "Shampoo",
    price: 254,
    rating: 4.9,
    reviews: 35,
    image: "assets/products/catalog/kerastase-nutritive-bain-satin-clean.png",
    description: "Shampoo hidratante da linha Nutritive para cabelos secos.",
    benefits: ["Nutrição", "Hidratação", "Cabelo seco", "Brilho"],
    idealFor: "Quem precisa de limpeza confortável sem deixar o cabelo rígido.",
    usage: "Massageie o couro cabeludo e deixe a espuma escorrer para o comprimento.",
    tip: "Gosto para quem precisa de uma limpeza confortável, sem deixar o cabelo rígido. Massageie o couro cabeludo e deixe a espuma escorrer para o comprimento.",
    ingredients: "Composição cosmética profissional da linha Nutritive. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Use o rótulo oficial como fonte final da composição anunciada no site.",
    seoDescription: "Shampoo profissional nutritivo para cabelos secos, com hidratação e brilho."
  },
  {
    id: "kerastase-chroma-bain-respect",
    name: "Kérastase Chroma Absolu Bain Chroma Respect",
    category: "Shampoo",
    price: 267,
    rating: 4.9,
    reviews: 27,
    image: "assets/products/catalog/kerastase-chroma-bain-respect-clean.png",
    description: "Shampoo hidratante protetor para cabelos coloridos, sensibilizados ou danificados.",
    benefits: ["Proteção da cor", "Hidratação", "Cabelos coloridos", "Sensibilidade"],
    idealFor: "Manutenção da cor com toque confortável entre as visitas ao salão.",
    usage: "Use com água morna e finalize com máscara ou condicionador da rotina.",
    tip: "É uma das escolhas que eu indicaria para manter a cor bonita entre as visitas ao salão. Use com água morna e finalize com máscara ou condicionador da rotina.",
    ingredients: "Composição cosmética profissional da linha Chroma Absolu. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "A composição informada no site deve refletir a rotulagem oficial do produto comercializado.",
    seoDescription: "Shampoo profissional para cabelos coloridos, com hidratação e proteção da cor."
  },
  {
    id: "kerastase-chroma-masque",
    name: "Kérastase Chroma Absolu Masque Chroma Filler",
    category: "Máscara",
    price: 532,
    rating: 4.9,
    reviews: 31,
    image: "assets/products/catalog/kerastase-chroma-masque-clean.png",
    description: "Máscara para cabelos coloridos sensibilizados ou danificados, médios a grossos.",
    benefits: ["Máscara", "Cor", "Porosidade", "Cabelo sensibilizado"],
    idealFor: "Cabelos coloridos que precisam de mais corpo, preenchimento e rotina de tratamento.",
    usage: "Use uma vez por semana, retirando o excesso de água antes da aplicação.",
    tip: "Gosto dela quando o cabelo colorido precisa de mais corpo e preenchimento. Use uma vez por semana ou conforme orientação, sempre retirando o excesso de água antes da aplicação.",
    ingredients: "Composição cosmética profissional da linha Chroma Absolu. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Antes da publicação definitiva, confirme a composição do lote e mantenha a referência oficial arquivada.",
    seoDescription: "Máscara profissional para cabelos coloridos sensibilizados, com foco em preenchimento, tratamento e cuidado da cor."
  },
  {
    id: "wella-ultimate-luxe-oil",
    name: "Wella Ultimate Luxe Oil Óleo Reconstrutor",
    category: "Óleo finalizador",
    price: 212,
    rating: 4.8,
    reviews: 26,
    image: "assets/products/catalog/wella-ultimate-luxe-oil-clean.png",
    description: "Óleo reconstrutor para todos os tipos de cabelo, com acabamento luminoso.",
    benefits: ["Brilho", "Finalização", "Nutrição", "Todos os fios"],
    idealFor: "Finalização de brilho e toque de cabelo bem cuidado sem pesar.",
    usage: "Aplique uma ou duas gotas no comprimento e pontas após a finalização.",
    tip: "Indico uma ou duas gotas no comprimento e pontas após a finalização. Ele ajuda muito no brilho e na sensação de cabelo bem cuidado, sem exagerar na quantidade.",
    ingredients: "Composição cosmética profissional da linha Luxe Oil. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "A composição exposta no site precisa acompanhar a informação oficial do fabricante e o rótulo do lote.",
    seoDescription: "Óleo finalizador profissional para brilho, nutrição e acabamento luminoso em todos os tipos de cabelo."
  },
  {
    id: "wella-ultimate-luxe-oil-conditioner",
    name: "Wella Ultimate Luxe Oil Condicionador de Nutrição",
    category: "Condicionador",
    price: 212,
    rating: 4.8,
    reviews: 14,
    image: "assets/products/catalog/wella-ultimate-luxe-oil-conditioner-clean.png",
    description: "Condicionador nutritivo para todos os tipos de cabelo, com acabamento mais macio e sedoso.",
    benefits: ["Maciez", "Nutrição", "Brilho", "Desembaraço"],
    idealFor: "Rotinas que precisam devolver toque sedoso sem pesar no comprimento.",
    usage: "Aplique após o shampoo no comprimento e pontas, deixe agir por instantes e enxágue bem.",
    tip: "Funciona bem quando o cabelo precisa de maciez rápida no dia a dia. Eu aplicaria no comprimento, deixaria agir por pouco tempo e enxaguaria bem para manter leveza.",
    ingredients: "Composição cosmética profissional da linha Ultimate Luxe Oil. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Revise a composição oficial do fabricante antes da publicação final do produto na loja.",
    seoDescription: "Condicionador profissional nutritivo com maciez, brilho e desembaraço para todos os tipos de cabelo."
  },
  {
    id: "wella-ultimate-luxe-shampoo",
    name: "Shampoo Wella Professionals Ultimate Luxe",
    category: "Shampoo",
    price: 296,
    rating: 4.8,
    reviews: 12,
    image: "assets/products/catalog/wella-ultimate-luxe-shampoo-clean.png",
    description: "Shampoo nutritivo da linha Ultimate Luxe para limpeza suave, brilho e toque sedoso.",
    benefits: ["Limpeza suave", "Nutrição", "Brilho", "Maciez"],
    idealFor: "Rotinas que buscam limpeza confortável sem perder a sensação de cabelo nutrido.",
    usage: "Aplique no couro cabeludo e comprimento molhados, massageie até formar espuma e enxágue bem.",
    tip: "Eu usaria como shampoo de rotina quando a ideia for limpar sem deixar o fio com toque áspero, mantendo brilho e maciez.",
    ingredients: "Composição cosmética profissional da linha Ultimate Luxe. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Antes da publicação definitiva, valide a composição oficial do lote no rótulo do fabricante.",
    seoDescription: "Shampoo profissional nutritivo com limpeza suave, brilho e maciez para todos os tipos de cabelo."
  },
  {
    id: "lanza-detangling-primer",
    name: "L'Anza Healing Strength Detangling Primer",
    category: "Leave-in",
    price: 344,
    rating: 4.8,
    reviews: 11,
    image: "assets/products/catalog/lanza-detangling-primer-clean.png",
    description: "Primer leave-in para desembaraçar, fortalecer e proteger cabelos fragilizados no momento da finalização.",
    benefits: ["Desembaraço", "Força", "Proteção", "Controle de frizz"],
    idealFor: "Fios frágeis, quebradiços ou com dificuldade para pentear no dia a dia.",
    usage: "Aplique no cabelo úmido antes de desembaraçar e prossiga com a finalização desejada.",
    tip: "Eu gosto dele quando o fio embaraça com facilidade e perde resistência. Ele ajuda a pentear com menos tração e deixa o cabelo mais preparado para escova ou secagem natural.",
    ingredients: "Composição cosmética profissional da linha Healing Strength. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Mantenha a composição exibida alinhada ao rótulo oficial do lote comercializado.",
    seoDescription: "Primer leave-in profissional para desembaraço, força, proteção e controle de frizz."
  },
  {
    id: "kerastase-nutritive-lait-vital",
    name: "Kérastase Nutritive Lait Vital",
    category: "Condicionador",
    price: 381,
    rating: 4.9,
    reviews: 18,
    image: "assets/products/catalog/kerastase-nutritive-lait-vital-clean.png",
    description: "Condicionador nutritivo ultraleve para cabelos secos, finos a médios, com foco em desembaraço e maciez.",
    benefits: ["Nutrição", "Maciez", "Desembaraço", "Leveza"],
    idealFor: "Cabelos secos que pedem hidratação sem perder movimento.",
    usage: "Aplique após o shampoo no comprimento e pontas, deixe agir por alguns minutos e enxágue bem.",
    tip: "É uma escolha bonita para cabelos secos que não gostam de peso. Eu usaria depois do Bain Satin para manter maciez e desembaraço com sensação leve.",
    ingredients: "Composição cosmética profissional da linha Nutritive. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "A composição anunciada deve ser conferida com a rotulagem oficial do fabricante antes da venda.",
    seoDescription: "Condicionador profissional nutritivo para cabelos secos, com maciez, leveza e desembaraço."
  },
  {
    id: "paul-mitchell-clarify-shampoo-two",
    name: "Shampoo Paul Mitchell Two Clarifying",
    category: "Shampoo",
    price: 211,
    rating: 4.8,
    reviews: 9,
    image: "assets/products/catalog/paul-mitchell-clarify-shampoo-two-clean.png",
    description: "Shampoo de limpeza profunda para remover residuos, controlar oleosidade e devolver sensacao de frescor.",
    benefits: ["Limpeza profunda", "Anti-residuos", "Frescor", "Oleosidade controlada"],
    idealFor: "Cabelos que acumulam finalizadores, oleosidade ou residuos ao longo da semana.",
    usage: "Use nas lavagens de limpeza profunda, massageando o couro cabeludo e enxaguando completamente.",
    tip: "Eu deixaria esse shampoo para os dias em que o cabelo pede uma limpeza mais intensa. E otimo para recomecar a rotina quando ha acumulo de produto ou excesso de oleosidade.",
    ingredients: "Composicao cosmetica profissional da linha Clarify. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Antes da publicacao definitiva, valide a composicao no rotulo oficial do lote comercializado.",
    seoDescription: "Shampoo profissional anti-residuos com limpeza profunda, frescor e controle de oleosidade."
  },
  {
    id: "paul-mitchell-tea-tree-special-shampoo",
    name: "Paul Mitchell Tea Tree Special Shampoo",
    category: "Shampoo",
    price: 261,
    rating: 4.8,
    reviews: 13,
    image: "assets/products/catalog/paul-mitchell-tea-tree-special-shampoo-clean.png",
    description: "Shampoo refrescante com tea tree para limpeza revigorante do couro cabeludo e dos fios.",
    benefits: ["Frescor", "Limpeza", "Tea tree", "Revigorante"],
    idealFor: "Quem gosta de sensação mentolada e limpeza energizante no couro cabeludo.",
    usage: "Massageie no couro cabeludo até formar espuma e enxague bem em seguida.",
    tip: "E um shampoo que entrega sensacao fresca logo na aplicacao. Eu indicaria para quem gosta de couro cabeludo mais revigorado e de uma limpeza confortavel no dia a dia.",
    ingredients: "Composicao cosmetica profissional da linha Tea Tree. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Use sempre a rotulagem oficial do fabricante como fonte final da composicao divulgada.",
    seoDescription: "Shampoo profissional com tea tree para frescor, limpeza revigorante e sensacao energizante."
  },
  {
    id: "paul-mitchell-tea-tree-body-bar",
    name: "Paul Mitchell Tea Tree Body Bar Sabonete em Barra",
    category: "Sabonete",
    price: 143,
    rating: 4.7,
    reviews: 7,
    image: "assets/products/catalog/paul-mitchell-tea-tree-body-bar-clean.png",
    description: "Barra corporal com tea tree para limpeza prática, sensação refrescante e uso diário.",
    benefits: ["Corpo", "Frescor", "Tea tree", "Limpeza prática"],
    idealFor: "Quem quer uma opção refrescante para banho e rotina corporal.",
    usage: "Aplique sobre a pele úmida durante o banho, massageie suavemente e enxágue.",
    tip: "É uma opção interessante para quem gosta de banho com sensação mais fresca. Eu usaria no dia a dia, sempre observando a resposta da pele.",
    ingredients: "Composicao cosmetica profissional da linha Clarify. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Confirme a composição do lote no rótulo oficial antes da publicação final na loja.",
    seoDescription: "Barra corporal profissional com tea tree para limpeza prática e sensação refrescante."
  },
  {
    id: "tangle-teezer-detangling-hairbrush",
    name: "Tangle Teezer Ultimate Detangler Brush",
    category: "Escova",
    price: 150,
    rating: 4.9,
    reviews: 10,
    image: "assets/products/catalog/tangle-teezer-detangling-hairbrush-clean.png",
    description: "Escova desembaraçante para fios finos e frágeis, criada para reduzir quebra e puxões ao pentear.",
    benefits: ["Desembaraço", "Menos quebra", "Fios frágeis", "Uso diário"],
    idealFor: "Quem quer pentear o cabelo com mais conforto e menos tração nos fios.",
    usage: "Use no cabelo seco ou úmido, começando pelas pontas e subindo gradualmente para a raiz.",
    tip: "Gosto desse tipo de escova para reduzir puxões, especialmente em fios finos ou sensíveis. Vale começar pelas pontas e subir aos poucos para evitar quebra.",
    ingredients: "Acessório profissional para cuidado capilar. Consulte a embalagem do fabricante para instruções e composição do material.",
    ingredientsNote: "Mantenha nome, modelo e características alinhados às informações oficiais da embalagem do produto comercializado.",
    seoDescription: "Escova profissional desembaraçante para fios finos e frágeis, com menos quebra e mais conforto ao pentear."
  },
  {
    id: "bounce-curl-brush",
    name: "Bounce Curl",
    category: "Escova",
    price: 150,
    rating: 4.8,
    reviews: 9,
    image: "assets/products/catalog/bounce-curl-brush-clean.png",
    description: "Escova modeladora para desembaracar, separar mechas e ajudar na definicao de cachos durante a finalizacao.",
    benefits: ["Definicao", "Desembaraco", "Finalizacao", "Cachos"],
    idealFor: "Quem finaliza cabelos ondulados, cacheados ou crespos e quer mais controle na formacao das fitas.",
    usage: "Use no cabelo umido com creme ou gel, trabalhando as mechas para alinhar e definir os fios.",
    tip: "Eu usaria na finalizacao para ajudar a separar as mechas e incentivar uma definicao mais organizada, sem puxar demais os fios.",
    ingredients: "Acessorio profissional para cuidado e finalizacao capilar. Consulte a embalagem do fabricante para instrucoes e composicao do material.",
    ingredientsNote: "Antes da publicacao definitiva, confirme as especificacoes oficiais do acessorio na embalagem do fabricante.",
    seoDescription: "Escova modeladora para desembaraco e definicao de cachos, com uso pratico na finalizacao."
  },
  {
    id: "miracle-luminous-elixir",
    name: "Miracle Luminous Elixir",
    category: "Tratamento",
    price: null,
    priceLabel: "Consultar valor",
    rating: 4.8,
    reviews: 6,
    image: "assets/products/catalog/miracle-luminous-elixir-clean.png",
    description: "Tratamento de ação rápida com proposta de transformação em um minuto para brilho e aparência mais alinhada.",
    benefits: ["Brilho", "Tratamento rápido", "Maciez", "Finalização"],
    idealFor: "Rotinas que pedem resultado visual rápido e toque mais luminoso nos fios.",
    usage: "Use conforme a orientação da embalagem e ajuste a frequência à necessidade do cabelo.",
    tip: "É um tipo de produto interessante para quando o cabelo precisa de impacto rápido no brilho e na sensação de tratamento. Eu seguiria o modo de uso da embalagem para aproveitar melhor o resultado.",
    ingredients: "Composição cosmética profissional do Miracle Luminous Elixir. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Como o valor não apareceu nas imagens recebidas, este produto foi mantido como consulta de preço até confirmação final.",
    seoDescription: "Tratamento profissional de ação rápida para brilho, maciez e aparência mais alinhada dos fios."
  },
  {
    id: "anazoe-oleo-argan",
    name: "Óleo de Argan Anazoe",
    category: "Óleos Anazoe",
    price: 79.9,
    rating: 4.7,
    reviews: 28,
    image: "assets/products/catalog/anazoe-oleo-argan-clean.png",
    description: "Óleo vegetal para brilho, maciez, pontas ressecadas e umectação.",
    benefits: ["Brilho", "Maciez", "Pontas", "Umectação"],
    idealFor: "Pontas opacas e rotinas que pedem nutrição com acabamento leve.",
    usage: "Use em pequena quantidade como finalizador ou em umectação antes da lavagem.",
    tip: "Gosto dele para pontas opacas e ressecadas. Use em pequena quantidade como finalizador ou em umectação antes da lavagem, sempre evitando excesso na raiz.",
    ingredients: "Óleo vegetal da linha Anazoe. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Como se trata de item cosmético, a composição anunciada deve reproduzir a rotulagem oficial vigente.",
    seoDescription: "Óleo vegetal profissional para brilho, maciez, pontas ressecadas e umectação."
  },
  {
    id: "anazoe-oleo-ricino",
    name: "Óleo de Rícino Anazoe",
    category: "Óleos Anazoe",
    price: 69.9,
    rating: 4.8,
    reviews: 33,
    image: "assets/products/catalog/anazoe-oleo-ricino-clean.png",
    description: "Óleo vegetal de alto poder nutritivo para fios, cílios, sobrancelhas e áreas ressecadas.",
    benefits: ["Nutrição", "Cílios", "Sobrancelhas", "Umectação"],
    idealFor: "Nutrição pontual e rituais de umectação em fios muito ressecados.",
    usage: "Aplique pouca quantidade nas áreas desejadas, evitando excesso na raiz do cabelo.",
    tip: "Ele é mais denso, então a quantidade precisa ser pequena. Indico para nutrição pontual e rituais de umectação, principalmente quando o fio está muito ressecado.",
    ingredients: "Óleo vegetal da linha Anazoe. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Valide sempre a composição oficial do lote antes de expor a informação no site.",
    seoDescription: "Óleo vegetal profissional para nutrição de fios, cílios, sobrancelhas e áreas ressecadas."
  },
  {
    id: "anazoe-oleo-abacate",
    name: "Óleo de Abacate Anazoe",
    category: "Óleos Anazoe",
    price: 79.9,
    rating: 4.8,
    reviews: 30,
    image: "assets/products/catalog/anazoe-oleo-abacate-clean.png",
    description: "Óleo vegetal para maciez, redução de ressecamento e cuidado de cabelos cacheados, crespos e barbas.",
    benefits: ["Maciez", "Cachos", "Barba", "Ressecamento"],
    idealFor: "Fios secos, cacheados ou crespos que pedem nutrição extra.",
    usage: "Use em umectação ou misture algumas gotas ao tratamento quando o cabelo precisar de mais nutrição.",
    tip: "Gosto para fios mais secos, cacheados ou crespos. Use em umectação ou misture algumas gotas no tratamento quando o cabelo estiver pedindo mais nutrição.",
    ingredients: "Óleo vegetal da linha Anazoe. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "A composição divulgada precisa ser revisada junto ao rótulo original do fabricante.",
    seoDescription: "Óleo vegetal profissional para maciez, nutrição e cuidado de cabelos cacheados, crespos e barbas."
  },
  {
    id: "anazoe-oleo-rosa-mosqueta",
    name: "Óleo de Rosa Mosqueta Anazoe",
    category: "Óleos Anazoe",
    price: 89.9,
    rating: 4.9,
    reviews: 46,
    image: "assets/products/catalog/anazoe-oleo-rosa-mosqueta-clean.png",
    description: "Óleo vegetal para pele e cabelo, com foco em hidratação, maciez e cuidado antioxidante.",
    benefits: ["Hidratação", "Pele", "Cabelo", "Antioxidante"],
    idealFor: "Quem quer um cuidado multifuncional para pontas e regiões ressecadas da pele.",
    usage: "No cabelo, use pouco nas pontas; na pele, aplique conforme orientação e observe a resposta da sua pele.",
    tip: "É uma opção delicada para quem quer cuidado multifuncional. No cabelo, use pouco nas pontas; na pele, aplique conforme orientação e sempre observe a resposta da sua pele.",
    ingredients: "Óleo vegetal da linha Anazoe. Consulte a embalagem do fabricante para a lista INCI completa e atualizada do lote.",
    ingredientsNote: "Para adequação à rotulagem cosmética, publique somente a composição confirmada no rótulo do lote.",
    seoDescription: "Óleo vegetal profissional para hidratação, maciez e cuidado antioxidante da pele e do cabelo."
  }
];

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const SHOP_PHONE = "5517997711729";
const STORE_NAME = "Becker";
const state = {
  cart: JSON.parse(localStorage.getItem("becker:cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("becker:wishlist") || "[]"),
  filter: "Todos",
  view: "all",
  filtersOpen: false
};

const explicitRootPrefix = document.body?.dataset.rootPrefix;
const isPagesPath = location.pathname.replace(/\\/g, "/").includes("/pages/");
const rootPrefix = explicitRootPrefix ?? (isPagesPath ? "../" : "");
const assetUrl = (path) => `${rootPrefix}${path}`;
const pageUrl = (path) => `${rootPrefix}pages/${path}`;
const normalizeText = (value = "") =>
  String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const tokenizeSearch = (value = "") => normalizeText(value).split(/\s+/).filter(Boolean);
const hasWordStartingWith = (value = "", token = "") => value.split(/\s+/).some((word) => word.startsWith(token));
const byId = (id) => products.find((product) => product.id === id);

const save = () => {
  localStorage.setItem("becker:cart", JSON.stringify(state.cart));
  localStorage.setItem("becker:wishlist", JSON.stringify(state.wishlist));
};

const hasPrice = (product) => Number(product.price || 0) > 0;
const productPrice = (product) => product.priceLabel || (hasPrice(product) ? money.format(product.price) : "Consultar valor");
const productCashPrice = (product) =>
  hasPrice(product) ? `${money.format(product.price)} à vista` : productPrice(product);
const formatRating = (value) => Number(value || 0).toFixed(1).replace(".", ",");
const productInstallments = (product) =>
  hasPrice(product) ? `3x de ${money.format(Number(product.price || 0) / 3)} sem juros` : "Consulte as condições com a equipe";
const productWhatsapp = (product, prompt) =>
  `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(`Olá! ${prompt}: ${product.name}. Pode me orientar?`)}`;
const productHref = (product) => `${rootPrefix}produto/${product.id}/index.html`;
const absoluteUrl = (value) => {
  try {
    return new URL(value, location.href).toString();
  } catch {
    return value;
  }
};
const productAbsoluteUrl = (product) => absoluteUrl(productHref(product));
const productBrandName = (product) => {
  const name = normalizeText(product.name);
  if (name.includes("l'anza") || name.includes("lanza")) return "L'Anza";
  if (name.includes("kerastase")) return "Kérastase";
  if (name.includes("wella")) return "Wella Professionals";
  if (name.includes("redken")) return "Redken";
  if (name.includes("paul mitchell")) return "Paul Mitchell";
  if (name.includes("tangle teezer")) return "Tangle Teezer";
  if (name.includes("bounce curl")) return "Bounce Curl";
  if (name.includes("anazoe")) return "Anazoe";
  if (name.includes("sh-rd") || name.includes("sh rd") || name.includes("n.p.p.e")) return "SH-RD";
  if (name.includes("miracle")) return "Miracle";
  return STORE_NAME;
};
const productImageAlt = (product) => {
  const category = product.category.toLowerCase();
  if (category.includes("shampoo")) return `Shampoo profissional ${product.name} disponível na Loja Becker.`;
  if (category.includes("condicionador")) return `Condicionador profissional ${product.name} disponível na Loja Becker.`;
  if (category.includes("óleo")) return `Frasco do ${product.name} para cuidado de cabelo, pele ou finalização.`;
  if (category.includes("escova")) return `Escova ${product.name} para desembaraço e finalização capilar.`;
  if (category.includes("máscara")) return `Máscara profissional ${product.name} para tratamento capilar.`;
  if (category.includes("leave")) return `Leave-in profissional ${product.name} para cuidado e finalização dos fios.`;
  return `Produto profissional ${product.name} da categoria ${product.category} na Loja Becker.`;
};
const productKeywords = (product) =>
  [product.name, productBrandName(product), product.category, ...(product.benefits || []), "Loja Becker", "produto capilar profissional"]
    .filter(Boolean)
    .join(", ");
const getProductIdFromUrl = () => {
  const params = new URLSearchParams(location.search);
  const parts = location.pathname.replace(/\\/g, "/").replace(/\/+$/, "").split("/").filter(Boolean);
  const productIndex = parts.lastIndexOf("produto");
  return document.body?.dataset.productId || params.get("produto") || (productIndex >= 0 ? parts[productIndex + 1] : "");
};

const navElement = document.querySelector("[data-nav]");
const navStartsScrolled = navElement?.dataset.navStatic === "scrolled";

function syncNav() {
  navElement?.classList.toggle("scrolled", navStartsScrolled || window.scrollY > 18);
}

window.addEventListener("scroll", syncNav, { passive: true });
syncNav();

const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");

menuToggle?.addEventListener("click", () => {
  const open = navPanel.classList.toggle("open");
  menuToggle.classList.toggle("open", open);
  document.querySelector("[data-nav]")?.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".submenu-toggle").forEach((button) =>
  button.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 1120px)").matches) {
      button.closest(".nav-group")?.classList.toggle("open");
    }
  })
);

document.querySelectorAll(".nav-panel a").forEach((link) =>
  link.addEventListener("click", () => {
    if (!window.matchMedia("(max-width: 1120px)").matches) return;
    navPanel?.classList.remove("open");
    menuToggle?.classList.remove("open");
    document.querySelector("[data-nav]")?.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  })
);

const homeSlides = [...document.querySelectorAll("[data-home-slide]")];
const homeDots = [...document.querySelectorAll("[data-home-dot]")];

if (homeSlides.length > 1) {
  let activeSlide = 0;
  setInterval(() => {
    homeSlides[activeSlide].classList.remove("active");
    homeDots[activeSlide]?.classList.remove("active");
    activeSlide = (activeSlide + 1) % homeSlides.length;
    homeSlides[activeSlide].classList.add("active");
    homeDots[activeSlide]?.classList.add("active");
  }, 5600);
}

const observer =
  "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.14 })
    : null;

document.querySelectorAll(".reveal").forEach((element) => (observer ? observer.observe(element) : element.classList.add("visible")));

function focusServiceCategoryFromHash() {
  const categoryName = decodeURIComponent(window.location.hash || "").replace("#", "");
  if (!categoryName) return;
  const category = document.querySelector(`[data-service-category="${categoryName}"]`);
  if (!category) return;
  document.querySelectorAll(".service-category[open]").forEach((item) => {
    if (item !== category) item.removeAttribute("open");
  });
  category.setAttribute("open", "");
  setTimeout(() => category.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
}

focusServiceCategoryFromHash();
window.addEventListener("hashchange", focusServiceCategoryFromHash);

function openCart() {
  document.body.classList.add("cart-open");
  document.querySelector("#cartDrawer")?.setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  document.querySelector("#cartDrawer")?.setAttribute("aria-hidden", "true");
}

function setMeta(selector, content) {
  const element = document.querySelector(selector);
  if (element && typeof content === "string") element.setAttribute("content", content);
}

function setCanonical(url) {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", url);
}

function setSchema(data) {
  const schema = document.querySelector("[data-page-schema]");
  if (schema) schema.textContent = JSON.stringify(data, null, 2);
}

function updateShopSeo() {
  const url = absoluteUrl(location.href);
  const image = absoluteUrl(assetUrl(products[0].image));
  document.title = "Loja Becker | Produtos profissionais para cuidado capilar";
  setMeta('meta[name="description"]', "Compre produtos profissionais com curadoria Becker e orientação especializada para manter o resultado do salão em casa.");
  setMeta('meta[name="keywords"]', "produtos profissionais para cabelo, loja Becker, tratamento capilar, shampoo profissional, mascara capilar, leave-in");
  setMeta('meta[property="og:title"]', "Loja Becker | Produtos profissionais para cuidado capilar");
  setMeta('meta[property="og:description"]', "Compre produtos profissionais com curadoria Becker e orientação especializada para manter o resultado do salão em casa.");
  setMeta('meta[property="og:url"]', url);
  setMeta('meta[property="og:image"]', image);
  setMeta('meta[name="twitter:title"]', "Loja Becker | Produtos profissionais para cuidado capilar");
  setMeta('meta[name="twitter:description"]', "Compre produtos profissionais com curadoria Becker e orientação especializada para manter o resultado do salão em casa.");
  setMeta('meta[name="twitter:image"]', image);
  setCanonical(url);
  setSchema({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Loja Becker",
    description: "Loja online da Becker com produtos profissionais para cuidado capilar.",
    url,
    about: "Produtos profissionais para manutenção do resultado de salão em casa.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: productAbsoluteUrl(product),
        name: product.name
      }))
    }
  });
}

function updateProductSeo(product) {
  const url = productAbsoluteUrl(product);
  const image = absoluteUrl(assetUrl(product.image));
  const keywords = productKeywords(product);
  const description = product.seoDescription || product.description;
  document.title = `${product.name} | Loja Becker`;
  setMeta('meta[name="description"]', description);
  setMeta('meta[name="keywords"]', keywords);
  setMeta('meta[property="og:title"]', `${product.name} | Loja Becker`);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:url"]', url);
  setMeta('meta[property="og:image"]', image);
  setMeta('meta[name="twitter:title"]', `${product.name} | Loja Becker`);
  setMeta('meta[name="twitter:description"]', description);
  setMeta('meta[name="twitter:image"]', image);
  setCanonical(url);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description,
    image: [image],
    sku: product.id,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: productBrandName(product)
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(product.rating),
      reviewCount: String(product.reviews)
    }
  };

  if (hasPrice(product)) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: Number(product.price).toFixed(2),
      availability: "https://schema.org/InStock",
      url
    };
  } else {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url,
      description: "Valor sob consulta na Loja Becker."
    };
  }

  setSchema(schema);
}

function heartIcon(active) {
  return `<span class="heart-icon" aria-hidden="true">${active ? "\u2764" : "\u2661"}</span>`;
}

function wishlistCardButton(product) {
  const active = state.wishlist.includes(product.id);
  return `<button class="wishlist ${active ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="${active ? "Remover dos favoritos" : "Salvar nos favoritos"}">${heartIcon(active)}</button>`;
}

function wishlistInlineButton(product) {
  const active = state.wishlist.includes(product.id);
  return `<button class="wishlist-inline ${active ? "active" : ""}" type="button" data-wishlist="${product.id}" data-wishlist-inline="true" aria-label="${active ? "Remover dos favoritos" : "Salvar nos favoritos"}">${heartIcon(active)}<span>${active ? "Salvo nos favoritos" : "Salvar aos favoritos"}</span></button>`;
}

function productAction(product, size = "small") {
  return hasPrice(product)
    ? `<button class="btn ${size}" type="button" data-add-cart="${product.id}">Comprar</button>`
    : `<a class="btn ${size} ghost dark" href="${productWhatsapp(product, "Gostaria de consultar o valor do produto")}" target="_blank" rel="noopener">Consultar preço</a>`;
}

function anaileTip(product) {
  return `
    <aside class="anaile-tip">
      <div class="anaile-head">
        <img src="${assetUrl("assets/img/anaile-avatar.webp")}" alt="Anaile, profissional da Becker">
        <div>
          <span>Dica da Anaile</span>
          <strong>Recomendação profissional</strong>
        </div>
      </div>
      <p>"${product.tip}"</p>
    </aside>
  `;
}

function productCardMarkup(product, variant = "shop") {
  const compactBenefits = product.benefits.slice(0, variant === "shop" ? 2 : 3);
  return `
    <article class="product-card ${variant === "shop" ? "shop-product-card" : ""} reveal visible" data-product-card data-card-link="${productHref(product)}" data-id="${product.id}" data-category="${normalizeText(product.category)}" data-name="${normalizeText(product.name)}">
      ${wishlistCardButton(product)}
      <a class="product-media" href="${productHref(product)}" aria-label="Ver ${product.name}">
        <img src="${assetUrl(product.image)}" alt="${productImageAlt(product)}">
      </a>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3><a href="${productHref(product)}">${product.name}</a></h3>
        <div class="benefit-list">${compactBenefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div>
        <div class="rating product-rating"><strong>&#9733; ${formatRating(product.rating)}</strong><small>${product.reviews} avaliações</small></div>
        <div class="product-purchase">
          <div class="price"><strong>${productCashPrice(product)}</strong></div>
          <p class="product-installment">${productInstallments(product)}</p>
        </div>
        <div class="product-card-actions">
          ${productAction(product)}
          <a class="btn small ghost dark" href="${productHref(product)}">Ver produto</a>
        </div>
      </div>
    </article>
  `;
}

function updateWishlistUi() {
  const count = state.wishlist.length;
  document.querySelectorAll("[data-wishlist-count]").forEach((element) => {
    element.textContent = String(count);
  });

  document.querySelectorAll("[data-shop-view='favorites']").forEach((button) => {
    const active = state.view === "favorites";
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll("[data-wishlist]").forEach((button) => {
    const active = state.wishlist.includes(button.dataset.wishlist);
    button.classList.toggle("active", active);
    button.setAttribute("aria-label", active ? "Remover dos favoritos" : "Salvar nos favoritos");

    const icon = button.querySelector(".heart-icon");
    if (icon) icon.textContent = active ? "\u2764" : "\u2661";

    if (button.hasAttribute("data-wishlist-inline")) {
      const label = button.querySelector("span:last-child");
      if (label) label.textContent = active ? "Salvo nos favoritos" : "Salvar aos favoritos";
    }
  });
}

function cartTotals() {
  return state.cart.reduce(
    (acc, entry) => {
      const product = byId(entry.id);
      if (!product) return acc;
      acc.qty += entry.qty;
      acc.total += Number(product.price || 0) * entry.qty;
      return acc;
    },
    { qty: 0, total: 0 }
  );
}

function renderCart() {
  const itemsEl = document.querySelector("[data-cart-items]");
  const emptyEl = document.querySelector("[data-cart-empty]");
  const totalEl = document.querySelector("[data-cart-total]");
  const count = cartTotals();

  document.querySelectorAll("[data-cart-count]").forEach((element) => {
    element.textContent = String(count.qty);
  });
  if (totalEl) totalEl.textContent = money.format(count.total);
  if (!itemsEl || !emptyEl) return;

  emptyEl.classList.toggle("show", state.cart.length === 0);
  itemsEl.innerHTML = state.cart
    .map((entry) => {
      const product = byId(entry.id);
      if (!product) return "";
      return `<article class="cart-item"><img src="${assetUrl(product.image)}" alt="${product.name}"><div><h4>${product.name}</h4><span>${productPrice(product)}</span><div class="cart-item-controls"><button type="button" data-cart-minus="${product.id}">-</button><b>${entry.qty}</b><button type="button" data-cart-plus="${product.id}">+</button><button type="button" data-cart-remove="${product.id}">Remover</button></div></div><strong>${money.format(Number(product.price || 0) * entry.qty)}</strong></article>`;
    })
    .join("");
}

function addToCart(id, qty = 1) {
  const product = byId(id);
  if (!product || !hasPrice(product)) return;
  const existing = state.cart.find((item) => item.id === id);
  if (existing) existing.qty += qty;
  else state.cart.push({ id, qty });
  save();
  renderCart();
  renderCheckout();
  openCart();
}

function updateCart(id, delta) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeCart(id);
  else {
    save();
    renderCart();
    renderCheckout();
  }
}

function removeCart(id) {
  state.cart = state.cart.filter((entry) => entry.id !== id);
  save();
  renderCart();
  renderCheckout();
}

function toggleWishlist(id) {
  state.wishlist = state.wishlist.includes(id)
    ? state.wishlist.filter((item) => item !== id)
    : [...state.wishlist, id];
  save();
  updateWishlistUi();

  if (state.view === "favorites" && document.querySelector("[data-product-grid]")) {
    renderShop();
  }
}

function filteredProducts(searchValue, sortValue) {
  const query = normalizeText(searchValue).trim();
  const tokens = tokenizeSearch(query);

  const scoreProductSearch = (product) => {
    if (!tokens.length) return 0;

    const name = normalizeText(product.name);
    const category = normalizeText(product.category);
    const description = normalizeText(product.description);
    const idealFor = normalizeText(product.idealFor);
    const usage = normalizeText(product.usage);
    const benefits = normalizeText((product.benefits || []).join(" "));
    const all = [name, category, description, idealFor, usage, benefits].join(" ");

    if (!tokens.every((token) => all.includes(token))) return -1;

    let score = 0;

    if (name === query) score += 180;
    else if (name.startsWith(query)) score += 130;
    else if (name.includes(query)) score += 95;

    if (category === query) score += 110;
    else if (category.startsWith(query)) score += 80;
    else if (category.includes(query)) score += 52;

    if (benefits.includes(query)) score += 36;
    if (idealFor.includes(query)) score += 24;
    if (description.includes(query)) score += 18;

    tokens.forEach((token) => {
      if (hasWordStartingWith(name, token)) score += 24;
      else if (name.includes(token)) score += 12;

      if (hasWordStartingWith(category, token)) score += 16;
      else if (category.includes(token)) score += 9;

      if (hasWordStartingWith(benefits, token)) score += 8;
      else if (benefits.includes(token)) score += 4;

      if (idealFor.includes(token)) score += 4;
      if (usage.includes(token)) score += 3;
      if (description.includes(token)) score += 2;
    });

    return score + Number(product.rating || 0);
  };

  let list = products
    .filter((product) => state.filter === "Todos" || product.category === state.filter)
    .filter((product) => state.view !== "favorites" || state.wishlist.includes(product.id))
    .map((product) => ({ product, searchScore: scoreProductSearch(product) }))
    .filter(({ searchScore }) => !tokens.length || searchScore >= 0);

  if (sortValue === "price-asc") list.sort((a, b) => Number(a.product.price || 999999) - Number(b.product.price || 999999));
  else if (sortValue === "price-desc") list.sort((a, b) => Number(b.product.price || 0) - Number(a.product.price || 0));
  else if (sortValue === "rating") list.sort((a, b) => b.product.rating - a.product.rating);
  else if (tokens.length) list.sort((a, b) => b.searchScore - a.searchScore || b.product.rating - a.product.rating || a.product.name.localeCompare(b.product.name, "pt-BR"));

  return list.map(({ product }) => product);
}

function renderShop() {
  const grids = document.querySelectorAll("[data-product-grid]");
  if (!grids.length) return;

  const filtersPanel = document.querySelector("[data-shop-filters]");
  const filterToggle = document.querySelector("[data-shop-filter-toggle]");
  const filtersExpanded = state.filtersOpen || state.filter !== "Todos";
  if (filtersPanel) filtersPanel.hidden = !filtersExpanded;
  if (filterToggle) {
    filterToggle.setAttribute("aria-expanded", String(filtersExpanded));
    filterToggle.textContent = filtersExpanded ? "Ocultar filtros" : "Filtros";
  }

  const categories = document.querySelector("[data-shop-categories]");
  if (categories) {
    const categoryList = ["Todos", ...new Set(products.map((product) => product.category))];
    categories.innerHTML = categoryList
      .map((category) => {
        const count = category === "Todos" ? products.length : products.filter((product) => product.category === category).length;
        return `<button type="button" class="shop-filter-option ${state.filter === category ? "active" : ""}" data-shop-filter="${category}"><span>${category}</span><small>${count}</small></button>`;
      })
      .join("");
  }

  const searchInput = document.querySelector("[data-shop-search]");
  const searchRaw = searchInput?.value.trim() || "";
  const sort = document.querySelector("[data-shop-sort]")?.value || "featured";
  const list = filteredProducts(searchRaw, sort);

  grids.forEach((grid) => {
    grid.innerHTML = list.map((product) => productCardMarkup(product, "shop")).join("");
  });

  const summary = document.querySelector("[data-shop-summary]");
  if (summary) {
    if (state.view === "favorites" && !state.wishlist.length) {
      summary.textContent = "Você ainda não salvou nenhum favorito.";
    } else if (searchRaw) {
      summary.textContent = `${list.length} ${list.length === 1 ? "produto encontrado" : "produtos encontrados"} para "${searchRaw}".`;
    } else if (state.view === "favorites") {
      summary.textContent = `${list.length} ${list.length === 1 ? "favorito salvo" : "favoritos salvos"} para você revisar depois.`;
    } else if (state.filter !== "Todos") {
      summary.textContent = `${list.length} ${list.length === 1 ? "produto disponível" : "produtos disponíveis"} em ${state.filter}.`;
    } else {
      summary.textContent = `${list.length} produtos na curadoria profissional do salão.`;
    }
  }

  const empty = document.querySelector("[data-shop-empty]");
  if (empty) {
    const isEmpty = list.length === 0;
    empty.classList.toggle("show", isEmpty);
    if (state.view === "favorites" && isEmpty) {
      empty.innerHTML = "<h3>Nenhum favorito salvo</h3><p>Toque no coração dos produtos para montar sua seleção preferida.</p>";
    } else {
      empty.innerHTML = "<h3>Nenhum produto encontrado</h3><p>Tente outro nome, mude a categoria ou fale com a equipe para receber uma indicação.</p>";
    }
  }

  updateWishlistUi();
  updateShopSeo();
}

function renderProductPage() {
  const detail = document.querySelector("[data-product-detail]");
  if (!detail) return;

  const product = byId(getProductIdFromUrl()) || products[0];

  detail.innerHTML = `
    <div class="product-media-stack reveal visible">
      <div class="product-media-head">
        <a class="product-back-link" href="${pageUrl("loja.html")}">&larr; Voltar para a loja</a>
        <div class="product-favorite-wrap">
          ${wishlistCardButton(product)}
        </div>
      </div>
      <button class="product-gallery" type="button" data-product-lightbox="${assetUrl(product.image)}" aria-label="Ampliar imagem de ${product.name}">
        <img src="${assetUrl(product.image)}" alt="${productImageAlt(product)}">
      </button>
    </div>
    <div class="product-copy reveal visible">
      <span class="eyebrow">${product.category}</span>
      <h1>${product.name}</h1>
      <div class="rating product-rating"><strong>&#9733; ${formatRating(product.rating)}</strong><small>${product.reviews} avaliações</small></div>
      <div class="price"><strong>${productPrice(product)}</strong></div>
      <p class="lead">${product.description} <a class="product-more-link" href="#descricao-produto">Saiba mais</a></p>
      <div class="benefit-list">${product.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div>

      <div class="product-actions">
        ${hasPrice(product) ? `<div class="qty-control"><button type="button" data-detail-minus>-</button><span data-detail-qty>1</span><button type="button" data-detail-plus>+</button></div><button class="btn" type="button" data-add-cart="${product.id}" data-qty="1">Comprar</button>` : `<a class="btn ghost dark" href="${productWhatsapp(product, "Gostaria de consultar o valor do produto")}" target="_blank" rel="noopener">Consultar preço</a>`}
      </div>
      ${anaileTip(product)}
    </div>
  `;

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .concat(products.filter((item) => item.category !== product.category))
    .slice(0, 4);
  const relatedEl = document.querySelector("[data-related-products]");
  if (relatedEl) relatedEl.innerHTML = related.map((item) => productCardMarkup(item, "related")).join("");

  const relatedCopyEl = document.querySelector("[data-related-copy]");
  if (relatedCopyEl) {
    relatedCopyEl.innerHTML = `
      <span class="eyebrow">Descrição</span>
      <h2>${product.name}</h2>
      <p class="product-related-description">${product.description}</p>
      <div class="product-related-info-list">
        <article class="product-related-info-item">
          <h3>Indicação</h3>
          <p>${product.idealFor}</p>
        </article>
        <article class="product-related-info-item">
          <h3>Como usar</h3>
          <p>${product.usage}</p>
        </article>
        <article class="product-related-info-item product-related-info-item-ingredients">
          <span class="eyebrow">ANVISA</span>
          <h3>Ingredientes e composição</h3>
          <p>${product.ingredients}</p>
          <p class="product-related-info-note">${product.ingredientsNote}</p>
        </article>
      </div>
    `;
  }

  let qty = 1;
  const detailAddButton = detail.querySelector("[data-add-cart]");
  detail.querySelector("[data-detail-plus]")?.addEventListener("click", () => {
    qty += 1;
    detail.querySelector("[data-detail-qty]").textContent = String(qty);
    if (detailAddButton) detailAddButton.dataset.qty = String(qty);
  });
  detail.querySelector("[data-detail-minus]")?.addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    detail.querySelector("[data-detail-qty]").textContent = String(qty);
    if (detailAddButton) detailAddButton.dataset.qty = String(qty);
  });

  updateWishlistUi();
  updateProductSeo(product);
}

function renderCheckout() {
  const items = document.querySelector("[data-checkout-items]");
  const total = document.querySelector("[data-checkout-total]");
  if (!items || !total) return;

  items.innerHTML = state.cart.length
    ? state.cart
        .map((entry) => {
          const product = byId(entry.id);
          if (!product) return "";
          return `<article class="summary-item"><img src="${assetUrl(product.image)}" alt="${product.name}"><div><h4>${product.name}</h4><span>${entry.qty} item(ns)</span></div><strong>${hasPrice(product) ? money.format(Number(product.price || 0) * entry.qty) : "Consultar valor"}</strong></article>`;
        })
        .join("")
    : '<p class="lead">Seu carrinho está vazio. Adicione produtos para visualizar o resumo.</p>';

  const subtotal = cartTotals().total;
  const shipping = state.cart.length ? 24.9 : 0;
  total.innerHTML = `<div><span>Subtotal</span><strong>${money.format(subtotal)}</strong></div><div><span>Frete estimado</span><strong>${money.format(shipping)}</strong></div><div><span>Total</span><strong>${money.format(subtotal + shipping)}</strong></div>`;
}

document.addEventListener("click", (event) => {
  const lightboxTarget = event.target.closest("[data-product-lightbox]");
  if (lightboxTarget) {
    event.preventDefault();
    openLightbox(lightboxTarget.dataset.productLightbox, lightboxTarget.querySelector("img")?.alt || "Produto Becker");
    return;
  }

  const cardLink = event.target.closest("[data-card-link]");
  if (cardLink && !event.target.closest("a, button, input, select, textarea, label")) {
    window.location.href = cardLink.dataset.cardLink;
    return;
  }

  const shopFilter = event.target.closest("[data-shop-filter]");
  if (shopFilter) {
    state.filter = shopFilter.dataset.shopFilter;
    state.filtersOpen = true;
    renderShop();
    return;
  }

  const shopFilterToggle = event.target.closest("[data-shop-filter-toggle]");
  if (shopFilterToggle) {
    state.filtersOpen = !state.filtersOpen;
    renderShop();
    return;
  }

  const shopView = event.target.closest("[data-shop-view]");
  if (shopView) {
    state.view = state.view === "favorites" ? "all" : "favorites";
    renderShop();
    return;
  }

  const target = event.target.closest("[data-open-cart], [data-close-cart], [data-add-cart], [data-wishlist], [data-cart-plus], [data-cart-minus], [data-cart-remove]");
  if (!target) return;

  if (target.matches("[data-open-cart]")) openCart();
  if (target.matches("[data-close-cart]")) closeCart();
  if (target.dataset.addCart) addToCart(target.dataset.addCart, Number(target.dataset.qty || 1));
  if (target.dataset.wishlist) toggleWishlist(target.dataset.wishlist);
  if (target.dataset.cartPlus) updateCart(target.dataset.cartPlus, 1);
  if (target.dataset.cartMinus) updateCart(target.dataset.cartMinus, -1);
  if (target.dataset.cartRemove) removeCart(target.dataset.cartRemove);
});

document.querySelector("[data-shop-search]")?.addEventListener("input", renderShop);
document.querySelector("[data-shop-sort]")?.addEventListener("change", renderShop);
document.querySelector("[data-shop-clear]")?.addEventListener("click", () => {
  state.filter = "Todos";
  state.view = "all";
  state.filtersOpen = false;
  const search = document.querySelector("[data-shop-search]");
  const sort = document.querySelector("[data-shop-sort]");
  if (search) search.value = "";
  if (sort) sort.value = "featured";
  renderShop();
});

document.querySelector("[data-checkout-confirm]")?.addEventListener("click", () => {
  const note = document.querySelector("[data-checkout-note]");
  if (note) {
    note.textContent = state.cart.length
      ? "Pedido registrado para revisão. A integração de pagamento pode ser conectada nesta etapa."
      : "Adicione produtos ao carrinho antes de confirmar.";
  }
});

document.querySelector("[data-shipping-calc]")?.addEventListener("click", () => {
  const zip = document.querySelector("[data-shipping-zip]")?.value || "";
  document.querySelector("[data-shipping-result]").textContent =
    zip.replace(/\D/g, "").length >= 8
      ? "Entrega estimada em 3 a 6 dias úteis: R$ 24,90."
      : "Digite um CEP válido para simular.";
});

document.querySelector("[data-apply-coupon]")?.addEventListener("click", () => {
  const coupon = document.querySelector("[data-coupon]")?.value.trim().toUpperCase();
  document.querySelector("[data-coupon-result]").textContent =
    coupon === "BECKER10" ? "Cupom aplicado: 10% de desconto." : "Cupom não encontrado.";
});

document.querySelector("[data-payment-tabs]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-payment]");
  if (!button) return;
  document.querySelectorAll("[data-payment]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelector("[data-payment-panel]").innerHTML = `Pagamento selecionado: <strong>${button.dataset.payment}</strong>. Nossa equipe confirmará os dados do pedido.`;
});

const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImg = lightbox?.querySelector("img");

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("open");
}

lightbox?.querySelector("button")?.addEventListener("click", () => lightbox.classList.remove("open"));
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.classList.remove("open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    lightbox?.classList.remove("open");
  }
});

renderCart();
renderShop();
renderProductPage();
renderCheckout();
updateWishlistUi();





















