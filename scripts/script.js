const productsRaw = [
  {
    id: "lanza-trauma-treatment",
    name: "L'Anza Trauma Treatment",
    category: "Leave-in",
    price: 219.9,
    oldPrice: 0,
    rating: 4.9,
    reviews: 51,
    image: "assets/products/catalog/lanza-trauma-treatment.webp",
    description: "Leave-in condicionante para cabelos sensibilizados por coloraÃƒÂ§ÃƒÂ£o, mechas ou processos quÃƒÂ­micos.",
    benefits: ["ReparaÃƒÂ§ÃƒÂ£o", "Maciez", "Elasticidade", "ProteÃƒÂ§ÃƒÂ£o UV"],
    tip: "Eu gosto dele para cabelos que perderam toque e resistÃƒÂªncia depois da cor. Use uma pequena quantidade no comprimento e pontas antes da escova ou deixe secar naturalmente para manter o fio mais alinhado e protegido."
  },
  {
    id: "lanza-healing-curls-conditioner",
    name: "L'Anza Healing Curls Conditioner",
    category: "Condicionador",
    price: null,
    priceLabel: "Consultar valor",
    oldPrice: 0,
    rating: 4.8,
    reviews: 24,
    image: "assets/products/catalog/lanza-healing-curls-conditioner.webp",
    description: "Condicionador para definiÃƒÂ§ÃƒÂ£o, emoliÃƒÂªncia e cuidado de cabelos cacheados ou ondulados.",
    benefits: ["DefiniÃƒÂ§ÃƒÂ£o", "EmoliÃƒÂªncia", "Maciez", "Cachos"],
    tip: "Indico para quem quer cachos mais definidos sem perder movimento. Aplique no comprimento apÃƒÂ³s o shampoo, desembarace com delicadeza e enxÃƒÂ¡gue bem para manter leveza."
  },
  {
    id: "lanza-colorcare-shampoo",
    name: "L'Anza Healing ColorCare Shampoo",
    category: "Shampoo",
    price: null,
    priceLabel: "Consultar valor",
    oldPrice: 0,
    rating: 4.8,
    reviews: 29,
    image: "assets/products/catalog/lanza-colorcare-shampoo.webp",
    description: "Shampoo para cabelos coloridos, indicado para preservar a cor e manter o fio com toque limpo e suave.",
    benefits: ["Cor preservada", "Limpeza suave", "Brilho", "Cabelos coloridos"],
    tip: "Ãƒâ€° uma boa escolha para quem faz coloraÃƒÂ§ÃƒÂ£o ou tonalizaÃƒÂ§ÃƒÂ£o e quer prolongar o brilho. Use nas lavagens de rotina e evite ÃƒÂ¡gua muito quente para preservar ainda mais a cor."
  },
  {
    id: "sh-rd-protein-cream",
    name: "SH-RD Protein Cream",
    category: "Tratamento",
    price: 249.9,
    oldPrice: 0,
    rating: 4.8,
    reviews: 37,
    image: "assets/products/catalog/sh-rd-protein-cream.webp",
    description: "Leave-in de tratamento para reparaÃƒÂ§ÃƒÂ£o, restauraÃƒÂ§ÃƒÂ£o e revitalizaÃƒÂ§ÃƒÂ£o dos fios.",
    benefits: ["ReparaÃƒÂ§ÃƒÂ£o", "NutriÃƒÂ§ÃƒÂ£o", "Controle de frizz", "Brilho"],
    tip: "Uso quando o cabelo precisa de acabamento mais polido. Uma pequena quantidade jÃƒÂ¡ ajuda a reduzir frizz e entregar brilho, principalmente em fios ressecados ou com quÃƒÂ­mica."
  },
  {
    id: "redken-all-soft-shampoo",
    name: "Redken All Soft Shampoo",
    category: "Shampoo",
    price: null,
    priceLabel: "Consultar valor",
    oldPrice: 0,
    rating: 4.8,
    reviews: 22,
    image: "assets/products/catalog/redken-all-soft-shampoo.webp",
    description: "Shampoo hidratante para cabelos secos, frÃƒÂ¡geis ou com toque ÃƒÂ¡spero.",
    benefits: ["HidrataÃƒÂ§ÃƒÂ£o", "Maciez", "Toque sedoso", "Cabelo seco"],
    tip: "Recomendo para quem sente o fio sem maleabilidade. Ele entra muito bem na rotina de cabelos secos, alternando com tratamentos profissionais quando o fio precisa de mais disciplina."
  },
  {
    id: "kerastase-nutritive-bain-satin",
    name: "KÃƒÂ©rastase Nutritive Bain Satin",
    category: "Shampoo",
    price: null,
    priceLabel: "Consultar valor",
    oldPrice: 0,
    rating: 4.9,
    reviews: 35,
    image: "assets/products/catalog/kerastase-nutritive-bain-satin.webp?v=20260703a",
    description: "Shampoo hidratante da linha Nutritive para cabelos secos.",
    benefits: ["NutriÃƒÂ§ÃƒÂ£o", "HidrataÃƒÂ§ÃƒÂ£o", "Cabelo seco", "Brilho"],
    tip: "Gosto para quem precisa de uma limpeza confortÃƒÂ¡vel, sem deixar o cabelo rÃƒÂ­gido. Massageie o couro cabeludo e deixe a espuma escorrer para o comprimento."
  },
  {
    id: "kerastase-chroma-bain-respect",
    name: "KÃƒÂ©rastase Chroma Absolu Bain Chroma Respect",
    category: "Shampoo",
    price: null,
    priceLabel: "Consultar valor",
    oldPrice: 0,
    rating: 4.9,
    reviews: 27,
    image: "assets/products/catalog/kerastase-chroma-bain-respect.webp?v=20260703a",
    description: "Shampoo hidratante protetor para cabelos coloridos, sensibilizados ou danificados.",
    benefits: ["ProteÃƒÂ§ÃƒÂ£o da cor", "HidrataÃƒÂ§ÃƒÂ£o", "Cabelos coloridos", "Sensibilidade"],
    tip: "Ãƒâ€° uma das escolhas que eu indicaria para manter a cor bonita entre as visitas ao salÃƒÂ£o. Use com ÃƒÂ¡gua morna e finalize com mÃƒÂ¡scara ou condicionador da rotina."
  },
  {
    id: "kerastase-chroma-masque",
    name: "KÃƒÂ©rastase Chroma Absolu Masque Chroma Filler",
    category: "MÃƒÂ¡scara",
    price: null,
    priceLabel: "Consultar valor",
    oldPrice: 0,
    rating: 4.9,
    reviews: 31,
    image: "assets/products/catalog/kerastase-chroma-masque.webp?v=20260703a",
    description: "MÃƒÂ¡scara para cabelos coloridos sensibilizados ou danificados, mÃƒÂ©dios a grossos.",
    benefits: ["MÃƒÂ¡scara", "Cor", "Porosidade", "Cabelo sensibilizado"],
    tip: "Gosto dela quando o cabelo colorido precisa de mais corpo e preenchimento. Use uma vez por semana ou conforme orientaÃƒÂ§ÃƒÂ£o, sempre retirando o excesso de ÃƒÂ¡gua antes da aplicaÃƒÂ§ÃƒÂ£o."
  },
  {
    id: "wella-ultimate-luxe-oil",
    name: "Wella Ultimate Luxe Oil",
    category: "Ãƒâ€œleo finalizador",
    price: null,
    priceLabel: "Consultar valor",
    oldPrice: 0,
    rating: 4.8,
    reviews: 26,
    image: "assets/products/catalog/wella-ultimate-luxe-oil.webp",
    description: "Ãƒâ€œleo reconstrutor para todos os tipos de cabelo, com acabamento luminoso.",
    benefits: ["Brilho", "FinalizaÃƒÂ§ÃƒÂ£o", "Ãƒâ€mega-9", "Todos os fios"],
    tip: "Indico uma ou duas gotas no comprimento e pontas apÃƒÂ³s a finalizaÃƒÂ§ÃƒÂ£o. Ele ajuda muito no brilho e na sensaÃƒÂ§ÃƒÂ£o de cabelo bem cuidado, sem exagerar na quantidade."
  },
  {
    id: "anazoe-oleo-argan",
    name: "Ãƒâ€œleo de Argan Anazoe",
    category: "Ãƒâ€œleos Anazoe",
    price: 79.9,
    oldPrice: 0,
    rating: 4.7,
    reviews: 28,
    image: "assets/products/catalog/anazoe-oleo-argan.webp",
    description: "Ãƒâ€œleo vegetal para brilho, maciez, pontas ressecadas e umectaÃƒÂ§ÃƒÂ£o.",
    benefits: ["Brilho", "Maciez", "Pontas", "UmectaÃƒÂ§ÃƒÂ£o"],
    tip: "Gosto dele para pontas opacas e ressecadas. Use em pequena quantidade como finalizador ou em umectaÃƒÂ§ÃƒÂ£o antes da lavagem, sempre evitando excesso na raiz."
  },
  {
    id: "anazoe-oleo-ricino",
    name: "Ãƒâ€œleo de RÃƒÂ­cino Anazoe",
    category: "Ãƒâ€œleos Anazoe",
    price: 69.9,
    oldPrice: 0,
    rating: 4.8,
    reviews: 33,
    image: "assets/products/catalog/anazoe-oleo-ricino.webp",
    description: "Ãƒâ€œleo vegetal de alto poder nutritivo para fios, cÃƒÂ­lios, sobrancelhas e ÃƒÂ¡reas ressecadas.",
    benefits: ["NutriÃƒÂ§ÃƒÂ£o", "CÃƒÂ­lios", "Sobrancelhas", "UmectaÃƒÂ§ÃƒÂ£o"],
    tip: "Ele ÃƒÂ© mais denso, entÃƒÂ£o a quantidade precisa ser pequena. Indico para nutriÃƒÂ§ÃƒÂ£o pontual e rituais de umectaÃƒÂ§ÃƒÂ£o, principalmente quando o fio estÃƒÂ¡ muito ressecado."
  },
  {
    id: "anazoe-oleo-abacate",
    name: "Ãƒâ€œleo de Abacate Anazoe",
    category: "Ãƒâ€œleos Anazoe",
    price: 79.9,
    oldPrice: 0,
    rating: 4.8,
    reviews: 30,
    image: "assets/products/catalog/anazoe-oleo-abacate.webp",
    description: "Ãƒâ€œleo vegetal para maciez, reduÃƒÂ§ÃƒÂ£o de ressecamento e cuidado de cabelos cacheados, crespos e barbas.",
    benefits: ["Maciez", "Cachos", "Barba", "Ressecamento"],
    tip: "Gosto para fios mais secos, cacheados ou crespos. Use em umectaÃƒÂ§ÃƒÂ£o ou misture algumas gotas no tratamento quando o cabelo estiver pedindo mais nutriÃƒÂ§ÃƒÂ£o."
  },
  {
    id: "anazoe-oleo-rosa-mosqueta",
    name: "Ãƒâ€œleo de Rosa Mosqueta Anazoe",
    category: "Ãƒâ€œleos Anazoe",
    price: 89.9,
    oldPrice: 0,
    rating: 4.9,
    reviews: 46,
    image: "assets/products/catalog/anazoe-oleo-rosa-mosqueta.webp",
    description: "Ãƒâ€œleo vegetal para pele e cabelo, com foco em hidrataÃƒÂ§ÃƒÂ£o, maciez e cuidado antioxidante.",
    benefits: ["HidrataÃƒÂ§ÃƒÂ£o", "Pele", "Cabelo", "Antioxidante"],
    tip: "Ãƒâ€° uma opÃƒÂ§ÃƒÂ£o delicada para quem quer cuidado multifuncional. No cabelo, use pouco nas pontas; na pele, aplique conforme orientaÃƒÂ§ÃƒÂ£o e sempre observe a resposta da sua pele."
  }
];

const repairText = (value) => {
  if (typeof value !== "string") return value;
  try {
    return /[ÃƒÃ¢]/.test(value) ? decodeURIComponent(escape(value)) : value;
  } catch {
    return value;
  }
};

const fixText = (value) => {
  if (typeof value !== "string") return value;
  let output = value;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    if (!/[ÃƒÃ‚Ã¢ï¿½]/.test(output)) break;
    try {
      const decoded = decodeURIComponent(escape(output));
      if (!decoded || decoded === output) break;
      output = decoded;
    } catch {
      break;
    }
  }
  return output.replace(/\uFFFD/g, "");
};

const cp1252MapRobust = new Map([
  [0x20ac, 0x80], [0x201a, 0x82], [0x0192, 0x83], [0x201e, 0x84], [0x2026, 0x85],
  [0x2020, 0x86], [0x2021, 0x87], [0x02c6, 0x88], [0x2030, 0x89], [0x0160, 0x8a],
  [0x2039, 0x8b], [0x0152, 0x8c], [0x017d, 0x8e], [0x2018, 0x91], [0x2019, 0x92],
  [0x201c, 0x93], [0x201d, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97],
  [0x02dc, 0x98], [0x2122, 0x99], [0x0161, 0x9a], [0x203a, 0x9b], [0x0153, 0x9c],
  [0x017e, 0x9e], [0x0178, 0x9f]
]);

const fixTextRobust = (value) => {
  if (typeof value !== "string") return value;
  let output = value;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    if (!/[\u00c2\u00c3\u00e2\u0192\u02c6\u02dc\u2013\u2014\u2018\u2019\u201a\u201c\u201d\u201e\u2020\u2021\u2022\u2026\u2030\u2039\u203a\u0152\u0153\u0160\u0161\u0178\u017d\u017e\ufffd]/.test(output)) break;
    const bytes = Uint8Array.from(
      Array.from(output, (char) => {
        const code = char.codePointAt(0);
        if (code <= 0xff) return code;
        return cp1252MapRobust.get(code) ?? 0x3f;
      })
    );
    const decoded = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
    if (!decoded || decoded === output) break;
    output = decoded;
  }
  return output.replace(/\uFFFD/g, "");
};

const normalizeText = (value = "") =>
  fixTextRobust(String(value)).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const products = productsRaw.map((product) => ({
  ...product,
  name: fixTextRobust(product.name),
  category: fixTextRobust(product.category),
  priceLabel: fixTextRobust(product.priceLabel || ""),
  description: fixTextRobust(product.description),
  benefits: (product.benefits || []).map(fixTextRobust),
  tip: fixTextRobust(product.tip || "")
}));

let isRepairingRenderedText = false;

function repairRenderedText(root = document.body) {
  if (!root) return;
  if (isRepairingRenderedText) return;
  isRepairingRenderedText = true;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const original = node.nodeValue || "";
    const repaired = fixTextRobust(original);
    if (repaired !== original) node.nodeValue = repaired;
  });

  root.querySelectorAll?.("*").forEach((element) => {
    ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      const repaired = fixTextRobust(value);
      if (repaired !== value) element.setAttribute(attribute, repaired);
    });

    if (element.tagName === "A") {
      const href = element.getAttribute("href");
      if (!href || !href.includes("wa.me/") || !href.includes("text=")) return;
      try {
        const url = new URL(href, window.location.href);
        const text = url.searchParams.get("text");
        if (!text) return;
        url.searchParams.set("text", fixTextRobust(text));
        element.setAttribute("href", url.toString());
      } catch {
        // Ignore malformed URLs and keep the original href.
      }
    }
  });

  isRepairingRenderedText = false;
}

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const SHOP_PHONE = "5517997711729";
const state = {
  cart: JSON.parse(localStorage.getItem("becker:cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("becker:wishlist") || "[]"),
  filter: "Todos"
};

const byId = (id) => products.find((product) => product.id === id);
const save = () => {
  localStorage.setItem("becker:cart", JSON.stringify(state.cart));
  localStorage.setItem("becker:wishlist", JSON.stringify(state.wishlist));
};

const hasPrice = (product) => Number(product.price || 0) > 0;
const productPrice = (product) => product.priceLabel || (hasPrice(product) ? money.format(product.price) : "Consultar valor");
const formatRating = (value) => Number(value || 0).toFixed(1).replace(".", ",");
const productInstallments = (product) =>
  hasPrice(product) ? `3x de ${money.format(Number(product.price || 0) / 3)} sem juros` : "Consulte as condiÃ§Ãµes com a equipe";
const productFulfillment = (product) =>
  hasPrice(product) ? "Retirada no salÃ£o ou envio local combinado" : "Atendimento e reserva pelo WhatsApp";

const isPagesPath = location.pathname.replace(/\\/g, "/").includes("/pages/");
const rootPrefix = isPagesPath ? "../" : "";
const assetUrl = (path) => `${rootPrefix}${path}`;
const pageUrl = (path) => (isPagesPath ? path : `pages/${path}`);
const productHref = (product) => `${rootPrefix}produto/${product.id}/`;
const productWhatsapp = (product, prompt) =>
  `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(`OlÃ¡! ${prompt}: ${product.name}. Pode me orientar?`)}`;
const productAction = (product, size = "small") =>
  hasPrice(product)
    ? `<button class="btn ${size}" type="button" data-add-cart="${product.id}">Comprar</button>`
    : `<a class="btn ${size} ghost dark" href="${productWhatsapp(product, "Gostaria de consultar o valor do produto")}" target="_blank" rel="noopener">Consultar preÃ§o</a>`;

const anaileTip = (product) => `
  <aside class="anaile-tip">
    <div class="anaile-head">
      <img src="${assetUrl("assets/img/anaile-avatar.webp")}" alt="Anaile, fundadora do SalÃ£o Becker">
      <div>
        <span>Dica da Anaile</span>
        <strong>RecomendaÃ§Ã£o profissional</strong>
      </div>
    </div>
    <p>"${product.tip || "A equipe Becker orienta o melhor uso conforme o histÃ³rico, a rotina e a necessidade do seu cabelo."}"</p>
  </aside>`;

const productShelfCard = (product) => `
  <article class="product-card reveal visible" data-product-card data-card-link="${productHref(product)}" data-id="${product.id}" data-category="${normalizeText(product.category)}" data-name="${normalizeText(product.name)}">
    <button class="wishlist ${state.wishlist.includes(product.id) ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="Favoritar ${product.name}">&#9825;</button>
    <a class="product-media" href="${productHref(product)}" aria-label="Ver ${product.name}">
      <img src="${assetUrl(product.image)}" alt="Produto profissional ${product.name} na Loja Becker">
    </a>
    <div class="product-info">
      <span class="product-category">${product.category}</span>
      <h3><a href="${productHref(product)}">${product.name}</a></h3>
      <p class="product-description">${product.description}</p>
      <div class="benefit-list">${product.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div>
      <div class="rating product-rating"><strong>&#9733; ${formatRating(product.rating)}</strong><small>${product.reviews} avaliaÃ§Ãµes</small></div>
      <div class="price"><strong>${productPrice(product)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div>
      <div class="product-card-actions">
        ${productAction(product)}
        <a class="btn small ghost dark" href="${productHref(product)}">Ver produto</a>
      </div>
    </div>
  </article>`;

const productListCard = (product) => `
  <article class="product-card shop-product-card reveal visible" data-product-card data-card-link="${productHref(product)}" data-id="${product.id}" data-category="${normalizeText(product.category)}" data-name="${normalizeText(product.name)}">
    <button class="wishlist ${state.wishlist.includes(product.id) ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="Favoritar ${product.name}">&#9825;</button>
    <a class="product-media" href="${productHref(product)}" aria-label="Ver ${product.name}">
      <img src="${assetUrl(product.image)}" alt="Produto profissional ${product.name} na Loja Becker">
    </a>
    <div class="product-info">
      <span class="product-category">${product.category}</span>
      <h3><a href="${productHref(product)}">${product.name}</a></h3>
      <div class="rating product-rating"><strong>&#9733; ${formatRating(product.rating)}</strong><small>${product.reviews} avaliaÃ§Ãµes</small></div>
      <p class="product-description">${product.description}</p>
      <div class="benefit-list">${product.benefits.slice(0, 3).map((benefit) => `<span>${benefit}</span>`).join("")}</div>
      <div class="product-purchase">
        <div class="price"><strong>${productPrice(product)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div>
        <p class="product-installment">${productInstallments(product)}</p>
        <p class="product-shipping">${productFulfillment(product)}</p>
      </div>
      <div class="product-card-actions">
        ${productAction(product)}
        <a class="btn small ghost dark" href="${productHref(product)}">Ver produto</a>
      </div>
    </div>
  </article>`;

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

document.querySelectorAll(".reveal").forEach((el) => (observer ? observer.observe(el) : el.classList.add("visible")));

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

document.addEventListener("click", (event) => {
  const lightboxTarget = event.target.closest("[data-product-lightbox]");
  if (lightboxTarget) {
    event.preventDefault();
    openLightbox(lightboxTarget.dataset.productLightbox, lightboxTarget.querySelector("img")?.alt || "Produto Becker");
    return;
  }

  const cardLink = event.target.closest("[data-card-link]");
  if (cardLink && !event.target.closest("a, button, input, select, textarea, label")) {
    const href = cardLink.dataset.cardLink;
    if (cardLink.dataset.cardTarget === "_blank") window.open(href, "_blank", "noopener");
    else window.location.href = href;
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
  document.querySelectorAll(`[data-wishlist="${id}"]`).forEach((button) => {
    button.classList.toggle("active", state.wishlist.includes(id));
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

  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = String(count.qty);
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

  repairRenderedText(document.body);
}

function renderShop() {
  const grids = document.querySelectorAll("[data-product-grid]");
  if (!grids.length) return;

  const categories = document.querySelector("[data-shop-categories]");
  if (categories) {
    const cats = ["Todos", ...new Set(products.map((product) => product.category))];
    categories.innerHTML = cats
      .map((cat) => {
        const count = cat === "Todos" ? products.length : products.filter((product) => product.category === cat).length;
        return `<button type="button" class="shop-filter-option ${state.filter === cat ? "active" : ""}" data-shop-filter="${cat}"><span>${cat}</span><small>${count}</small></button>`;
      })
      .join("");
  }

  const searchInput = document.querySelector("[data-shop-search]");
  const searchRaw = searchInput?.value.trim() || "";
  const search = normalizeText(searchRaw);
  const sort = document.querySelector("[data-shop-sort]")?.value || "featured";

  let list = products
    .filter((product) => state.filter === "Todos" || product.category === state.filter)
    .filter((product) => normalizeText([product.name, product.category, product.description, ...(product.benefits || [])].join(" ")).includes(search));

  if (sort === "price-asc") list.sort((a, b) => Number(a.price || 999999) - Number(b.price || 999999));
  if (sort === "price-desc") list.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);

  grids.forEach((grid) => {
    const limit = Number(grid.dataset.limit || 0);
    const rows = limit ? products.slice(0, limit) : list;
    grid.innerHTML = rows.map(limit ? productShelfCard : productListCard).join("");
  });

  const summary = document.querySelector("[data-shop-summary]");
  if (summary) {
    if (searchRaw) summary.textContent = `${list.length} ${list.length === 1 ? "produto encontrado" : "produtos encontrados"} para "${searchRaw}".`;
    else if (state.filter !== "Todos") summary.textContent = `${list.length} ${list.length === 1 ? "produto disponÃ­vel" : "produtos disponÃ­veis"} em ${state.filter}.`;
    else summary.textContent = `${list.length} produtos na curadoria profissional do salÃ£o.`;
  }

  document.querySelector("[data-shop-empty]")?.classList.toggle("show", document.body.dataset.page === "loja" && list.length === 0);
  repairRenderedText(document.body);
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-shop-filter]");
  if (!button) return;
  state.filter = button.dataset.shopFilter;
  renderShop();
});

document.querySelector("[data-shop-search]")?.addEventListener("input", renderShop);
document.querySelector("[data-shop-sort]")?.addEventListener("change", renderShop);
document.querySelector("[data-shop-clear]")?.addEventListener("click", () => {
  state.filter = "Todos";
  const search = document.querySelector("[data-shop-search]");
  const sort = document.querySelector("[data-shop-sort]");
  if (search) search.value = "";
  if (sort) sort.value = "featured";
  renderShop();
});

function renderProductPage() {
  const detail = document.querySelector("[data-product-detail]");
  if (!detail) return;

  const params = new URLSearchParams(location.search);
  const product = byId(params.get("produto")) || products[0];

  detail.innerHTML = `<button class="product-gallery reveal visible" type="button" data-product-lightbox="${assetUrl(product.image)}" aria-label="Ampliar imagem de ${product.name}"><img src="${assetUrl(product.image)}" alt="${product.name}"></button><div class="product-copy reveal visible"><span class="eyebrow">${product.category}</span><h1 class="display">${product.name}</h1><div class="rating product-rating"><strong>&#9733; ${formatRating(product.rating)}</strong><small>${product.reviews} avaliaÃ§Ãµes</small></div><div class="price"><strong>${productPrice(product)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div><p class="lead">${product.description}</p><div class="benefit-list">${product.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div><div class="product-actions">${hasPrice(product) ? `<div class="qty-control"><button type="button" data-detail-minus>-</button><span data-detail-qty>1</span><button type="button" data-detail-plus>+</button></div><button class="btn" type="button" data-add-cart="${product.id}" data-qty="1">Comprar</button>` : `<a class="btn ghost dark" href="${productWhatsapp(product, "Gostaria de consultar o valor do produto")}" target="_blank" rel="noopener">Consultar preÃ§o</a>`}<button class="btn ghost dark" type="button" data-wishlist="${product.id}">Favoritar</button></div><div class="payment-panel">Clique na imagem para visualizar o produto em tamanho ampliado.</div>${anaileTip(product)}</div>`;

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .concat(products.filter((item) => item.category !== product.category))
    .slice(0, 4);
  const relatedEl = document.querySelector("[data-related-products]");
  if (relatedEl) relatedEl.innerHTML = related.map(productShelfCard).join("");

  let qty = 1;
  document.querySelector("[data-detail-plus]")?.addEventListener("click", () => {
    qty += 1;
    document.querySelector("[data-detail-qty]").textContent = String(qty);
    document.querySelector("[data-add-cart]").dataset.qty = String(qty);
  });
  document.querySelector("[data-detail-minus]")?.addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    document.querySelector("[data-detail-qty]").textContent = String(qty);
    document.querySelector("[data-add-cart]").dataset.qty = String(qty);
  });

  repairRenderedText(document.body);
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
    : '<p class="lead">Seu carrinho estÃ¡ vazio. Adicione produtos para visualizar o resumo.</p>';

  const subtotal = cartTotals().total;
  const shipping = state.cart.length ? 24.9 : 0;
  total.innerHTML = `<div><span>Subtotal</span><strong>${money.format(subtotal)}</strong></div><div><span>Frete estimado</span><strong>${money.format(shipping)}</strong></div><div><span>Total</span><strong>${money.format(subtotal + shipping)}</strong></div>`;

  repairRenderedText(document.body);
}

document.querySelector("[data-checkout-confirm]")?.addEventListener("click", () => {
  const note = document.querySelector("[data-checkout-note]");
  if (note) {
    note.textContent = state.cart.length
      ? "Pedido registrado para revisÃ£o. A integraÃ§Ã£o de pagamento pode ser conectada nesta etapa."
      : "Adicione produtos ao carrinho antes de confirmar.";
  }
});

document.querySelector("[data-shipping-calc]")?.addEventListener("click", () => {
  const zip = document.querySelector("[data-shipping-zip]")?.value || "";
  document.querySelector("[data-shipping-result]").textContent =
    zip.replace(/\D/g, "").length >= 8
      ? "Entrega estimada em 3 a 6 dias Ãºteis: R$ 24,90."
      : "Digite um CEP vÃ¡lido para simular.";
});

document.querySelector("[data-apply-coupon]")?.addEventListener("click", () => {
  const coupon = document.querySelector("[data-coupon]")?.value.trim().toUpperCase();
  document.querySelector("[data-coupon-result]").textContent =
    coupon === "BECKER10" ? "Cupom aplicado: 10% de desconto." : "Cupom nÃ£o encontrado.";
});

document.querySelector("[data-payment-tabs]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-payment]");
  if (!button) return;
  document.querySelectorAll("[data-payment]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelector("[data-payment-panel]").innerHTML = `Pagamento selecionado: <strong>${button.dataset.payment}</strong>. Nossa equipe confirmarÃ¡ os dados do pedido.`;
});

const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImg = lightbox?.querySelector("img");

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("open");
}

document.querySelectorAll("[data-lightbox]").forEach((item) =>
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (!img) return;
    openLightbox(img.src, img.alt);
  })
);

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

const renderedTextObserver = new MutationObserver(() => {
  repairRenderedText(document.body);
});

if (document.body) {
  renderedTextObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

renderCart();
renderShop();
renderProductPage();
renderCheckout();
repairRenderedText(document.body);

