const products = [
  {
    id: "lanza-trauma-treatment",
    name: "L'Anza Trauma Treatment",
    category: "Leave-in",
    price: 219.9,
    rating: 4.9,
    reviews: 51,
    image: "assets/products/catalog/lanza-trauma-treatment.webp",
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
    price: null,
    priceLabel: "Consultar valor",
    rating: 4.8,
    reviews: 24,
    image: "assets/products/catalog/lanza-healing-curls-conditioner.webp",
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
    price: null,
    priceLabel: "Consultar valor",
    rating: 4.8,
    reviews: 29,
    image: "assets/products/catalog/lanza-colorcare-shampoo.webp",
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
    name: "SH-RD Protein Cream",
    category: "Tratamento",
    price: 249.9,
    rating: 4.8,
    reviews: 37,
    image: "assets/products/catalog/sh-rd-protein-cream.webp",
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
    image: "assets/products/catalog/redken-all-soft-shampoo.webp",
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
    price: null,
    priceLabel: "Consultar valor",
    rating: 4.9,
    reviews: 35,
    image: "assets/products/catalog/kerastase-nutritive-bain-satin.webp",
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
    price: null,
    priceLabel: "Consultar valor",
    rating: 4.9,
    reviews: 27,
    image: "assets/products/catalog/kerastase-chroma-bain-respect.webp",
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
    price: null,
    priceLabel: "Consultar valor",
    rating: 4.9,
    reviews: 31,
    image: "assets/products/catalog/kerastase-chroma-masque.webp",
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
    name: "Wella Ultimate Luxe Oil",
    category: "Óleo finalizador",
    price: null,
    priceLabel: "Consultar valor",
    rating: 4.8,
    reviews: 26,
    image: "assets/products/catalog/wella-ultimate-luxe-oil.webp",
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
    id: "anazoe-oleo-argan",
    name: "Óleo de Argan Anazoe",
    category: "Óleos Anazoe",
    price: 79.9,
    rating: 4.7,
    reviews: 28,
    image: "assets/products/catalog/anazoe-oleo-argan.webp",
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
    image: "assets/products/catalog/anazoe-oleo-ricino.webp",
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
    image: "assets/products/catalog/anazoe-oleo-abacate.webp",
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
    image: "assets/products/catalog/anazoe-oleo-rosa-mosqueta.webp",
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
  view: "all"
};

const isPagesPath = location.pathname.replace(/\\/g, "/").includes("/pages/");
const rootPrefix = isPagesPath ? "../" : "";
const assetUrl = (path) => `${rootPrefix}${path}`;
const pageUrl = (path) => (isPagesPath ? path : `pages/${path}`);
const normalizeText = (value = "") =>
  String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
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
const productHref = (product) => pageUrl(`produto.html?produto=${product.id}`);
const absoluteUrl = (value) => {
  try {
    return new URL(value, location.href).toString();
  } catch {
    return value;
  }
};

function syncNav() {
  document.querySelector("[data-nav]")?.classList.toggle("scrolled", window.scrollY > 18);
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
        url: absoluteUrl(productHref(product)),
        name: product.name
      }))
    }
  });
}

function updateProductSeo(product) {
  const url = absoluteUrl(location.href);
  const image = absoluteUrl(assetUrl(product.image));
  const keywords = [product.name, product.category, ...product.benefits].join(", ");
  document.title = `${product.name} | Loja Becker`;
  setMeta('meta[name="description"]', product.seoDescription);
  setMeta('meta[name="keywords"]', keywords);
  setMeta('meta[property="og:title"]', `${product.name} | Loja Becker`);
  setMeta('meta[property="og:description"]', product.seoDescription);
  setMeta('meta[property="og:url"]', url);
  setMeta('meta[property="og:image"]', image);
  setMeta('meta[name="twitter:title"]', `${product.name} | Loja Becker`);
  setMeta('meta[name="twitter:description"]', product.seoDescription);
  setMeta('meta[name="twitter:image"]', image);
  setCanonical(url);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    image: [image],
    sku: product.id,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: STORE_NAME
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
        <img src="${assetUrl(product.image)}" alt="${product.name} - ${product.category} profissional Becker">
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
  const search = normalizeText(searchValue);
  let list = products
    .filter((product) => state.filter === "Todos" || product.category === state.filter)
    .filter((product) => state.view !== "favorites" || state.wishlist.includes(product.id))
    .filter((product) =>
      normalizeText([product.name, product.category, product.description, product.idealFor, product.usage, ...product.benefits].join(" ")).includes(search)
    );

  if (sortValue === "price-asc") list.sort((a, b) => Number(a.price || 999999) - Number(b.price || 999999));
  if (sortValue === "price-desc") list.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
  if (sortValue === "rating") list.sort((a, b) => b.rating - a.rating);

  return list;
}

function renderShop() {
  const grids = document.querySelectorAll("[data-product-grid]");
  if (!grids.length) return;

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

  const params = new URLSearchParams(location.search);
  const product = byId(params.get("produto")) || products[0];

  detail.innerHTML = `
    <div class="product-media-stack reveal visible">
      <div class="product-media-head">
        <a class="product-back-link" href="loja.html">&larr; Voltar para a loja</a>
        <div class="product-favorite-wrap">
          ${wishlistCardButton(product)}
        </div>
      </div>
      <button class="product-gallery" type="button" data-product-lightbox="${assetUrl(product.image)}" aria-label="Ampliar imagem de ${product.name}">
        <img src="${assetUrl(product.image)}" alt="${product.name} - ${product.category} profissional Becker">
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
      <span class="eyebrow">${product.category}</span>
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
      <p class="product-related-note">Ao lado, você encontra outros produtos da curadoria para complementar esse cuidado.</p>
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








