const products = [
  {
    "id": "lanza-trauma-treatment",
    "name": "L'Anza Trauma Treatment",
    "category": "Leave-in",
    "price": 219.9,
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 51,
    "image": "assets/products/catalog/lanza-trauma-treatment.webp",
    "description": "Leave-in condicionante para cabelos sensibilizados por coloraÃ§Ã£o, mechas ou processos quÃ­micos.",
    "benefits": [
      "ReparaÃ§Ã£o",
      "Maciez",
      "Elasticidade",
      "ProteÃ§Ã£o UV"
    ],
    "tip": "Eu gosto dele para cabelos que perderam toque e resistÃªncia depois da cor. Use uma pequena quantidade no comprimento e pontas antes da escova ou deixe secar naturalmente para manter o fio mais alinhado e protegido."
  },
  {
    "id": "lanza-healing-curls-conditioner",
    "name": "L'Anza Healing Curls Conditioner",
    "category": "Condicionador",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 24,
    "image": "assets/products/catalog/lanza-healing-curls-conditioner.webp",
    "description": "Condicionador para definiÃ§Ã£o, emoliÃªncia e cuidado de cabelos cacheados ou ondulados.",
    "benefits": [
      "DefiniÃ§Ã£o",
      "EmoliÃªncia",
      "Maciez",
      "Cachos"
    ],
    "tip": "Indico para quem quer cachos mais definidos sem perder movimento. Aplique no comprimento apÃ³s o shampoo, desembarace com delicadeza e enxÃ¡gue bem para manter leveza."
  },
  {
    "id": "lanza-colorcare-shampoo",
    "name": "L'Anza Healing ColorCare Shampoo",
    "category": "Shampoo",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 29,
    "image": "assets/products/catalog/lanza-colorcare-shampoo.webp",
    "description": "Shampoo para cabelos coloridos, indicado para preservar a cor e manter o fio com toque limpo e suave.",
    "benefits": [
      "Cor preservada",
      "Limpeza suave",
      "Brilho",
      "Cabelos coloridos"
    ],
    "tip": "Ã‰ uma boa escolha para quem faz coloraÃ§Ã£o ou tonalizaÃ§Ã£o e quer prolongar o brilho. Use nas lavagens de rotina e evite Ã¡gua muito quente para preservar ainda mais a cor."
  },
  {
    "id": "sh-rd-protein-cream",
    "name": "SH-RD Protein Cream",
    "category": "Tratamento",
    "price": 249.9,
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 37,
    "image": "assets/products/catalog/sh-rd-protein-cream.webp",
    "description": "Leave-in de tratamento para reparaÃ§Ã£o, restauraÃ§Ã£o e revitalizaÃ§Ã£o dos fios.",
    "benefits": [
      "ReparaÃ§Ã£o",
      "NutriÃ§Ã£o",
      "Controle de frizz",
      "Brilho"
    ],
    "tip": "Uso quando o cabelo precisa de acabamento mais polido. Uma pequena quantidade jÃ¡ ajuda a reduzir frizz e entregar brilho, principalmente em fios ressecados ou com quÃ­mica."
  },
  {
    "id": "redken-all-soft-shampoo",
    "name": "Redken All Soft Shampoo",
    "category": "Shampoo",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 22,
    "image": "assets/products/catalog/redken-all-soft-shampoo.webp",
    "description": "Shampoo hidratante para cabelos secos, frÃ¡geis ou com toque Ã¡spero.",
    "benefits": [
      "HidrataÃ§Ã£o",
      "Maciez",
      "Toque sedoso",
      "Cabelo seco"
    ],
    "tip": "Recomendo para quem sente o fio sem maleabilidade. Ele entra muito bem na rotina de cabelos secos, alternando com tratamentos profissionais quando o fio precisa de mais disciplina."
  },
  {
    "id": "kerastase-nutritive-bain-satin",
    "name": "KÃ©rastase Nutritive Bain Satin",
    "category": "Shampoo",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 35,
    "image": "assets/products/catalog/kerastase-nutritive-bain-satin.webp",
    "description": "Shampoo hidratante da linha Nutritive para cabelos secos.",
    "benefits": [
      "NutriÃ§Ã£o",
      "HidrataÃ§Ã£o",
      "Cabelo seco",
      "Brilho"
    ],
    "tip": "Gosto para quem precisa de uma limpeza confortÃ¡vel, sem deixar o cabelo rÃ­gido. Massageie o couro cabeludo e deixe a espuma escorrer para o comprimento."
  },
  {
    "id": "kerastase-chroma-bain-respect",
    "name": "KÃ©rastase Chroma Absolu Bain Chroma Respect",
    "category": "Shampoo",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 27,
    "image": "assets/products/catalog/kerastase-chroma-bain-respect.webp",
    "description": "Shampoo hidratante protetor para cabelos coloridos, sensibilizados ou danificados.",
    "benefits": [
      "ProteÃ§Ã£o da cor",
      "HidrataÃ§Ã£o",
      "Cabelos coloridos",
      "Sensibilidade"
    ],
    "tip": "Ã‰ uma das escolhas que eu indicaria para manter a cor bonita entre as visitas ao salÃ£o. Use com Ã¡gua morna e finalize com mÃ¡scara ou condicionador da rotina."
  },
  {
    "id": "kerastase-chroma-masque",
    "name": "KÃ©rastase Chroma Absolu Masque Chroma Filler",
    "category": "MÃ¡scara",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 31,
    "image": "assets/products/catalog/kerastase-chroma-masque.webp",
    "description": "MÃ¡scara para cabelos coloridos sensibilizados ou danificados, mÃ©dios a grossos.",
    "benefits": [
      "MÃ¡scara",
      "Cor",
      "Porosidade",
      "Cabelo sensibilizado"
    ],
    "tip": "Gosto dela quando o cabelo colorido precisa de mais corpo e preenchimento. Use uma vez por semana ou conforme orientaÃ§Ã£o, sempre retirando o excesso de Ã¡gua antes da aplicaÃ§Ã£o."
  },
  {
    "id": "wella-ultimate-luxe-oil",
    "name": "Wella Ultimate Luxe Oil",
    "category": "Ã“leo finalizador",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 26,
    "image": "assets/products/catalog/wella-ultimate-luxe-oil.webp",
    "description": "Ã“leo reconstrutor para todos os tipos de cabelo, com acabamento luminoso.",
    "benefits": [
      "Brilho",
      "FinalizaÃ§Ã£o",
      "Ã”mega-9",
      "Todos os fios"
    ],
    "tip": "Indico uma ou duas gotas no comprimento e pontas apÃ³s a finalizaÃ§Ã£o. Ele ajuda muito no brilho e na sensaÃ§Ã£o de cabelo bem cuidado, sem exagerar na quantidade."
  },
  {
    "id": "anazoe-oleo-argan",
    "name": "Ã“leo de Argan Anazoe",
    "category": "Ã“leos Anazoe",
    "price": 79.9,
    "oldPrice": 0,
    "rating": 4.7,
    "reviews": 28,
    "image": "assets/products/catalog/anazoe-oleo-argan.webp",
    "description": "Ã“leo vegetal para brilho, maciez, pontas ressecadas e umectaÃ§Ã£o.",
    "benefits": [
      "Brilho",
      "Maciez",
      "Pontas",
      "UmectaÃ§Ã£o"
    ],
    "tip": "Gosto dele para pontas opacas e ressecadas. Use em pequena quantidade como finalizador ou em umectaÃ§Ã£o antes da lavagem, sempre evitando excesso na raiz."
  },
  {
    "id": "anazoe-oleo-ricino",
    "name": "Ã“leo de RÃ­cino Anazoe",
    "category": "Ã“leos Anazoe",
    "price": 69.9,
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 33,
    "image": "assets/products/catalog/anazoe-oleo-ricino.webp",
    "description": "Ã“leo vegetal de alto poder nutritivo para fios, cÃ­lios, sobrancelhas e Ã¡reas ressecadas.",
    "benefits": [
      "NutriÃ§Ã£o",
      "CÃ­lios",
      "Sobrancelhas",
      "UmectaÃ§Ã£o"
    ],
    "tip": "Ele Ã© mais denso, entÃ£o a quantidade precisa ser pequena. Indico para nutriÃ§Ã£o pontual e rituais de umectaÃ§Ã£o, principalmente quando o fio estÃ¡ muito ressecado."
  },
  {
    "id": "anazoe-oleo-abacate",
    "name": "Ã“leo de Abacate Anazoe",
    "category": "Ã“leos Anazoe",
    "price": 79.9,
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 30,
    "image": "assets/products/catalog/anazoe-oleo-abacate.webp",
    "description": "Ã“leo vegetal para maciez, reduÃ§Ã£o de ressecamento e cuidado de cabelos cacheados, crespos e barbas.",
    "benefits": [
      "Maciez",
      "Cachos",
      "Barba",
      "Ressecamento"
    ],
    "tip": "Gosto para fios mais secos, cacheados ou crespos. Use em umectaÃ§Ã£o ou misture algumas gotas no tratamento quando o cabelo estiver pedindo mais nutriÃ§Ã£o."
  },
  {
    "id": "anazoe-oleo-rosa-mosqueta",
    "name": "Ã“leo de Rosa Mosqueta Anazoe",
    "category": "Ã“leos Anazoe",
    "price": 89.9,
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 46,
    "image": "assets/products/catalog/anazoe-oleo-rosa-mosqueta.webp",
    "description": "Ã“leo vegetal para pele e cabelo, com foco em hidrataÃ§Ã£o, maciez e cuidado antioxidante.",
    "benefits": [
      "HidrataÃ§Ã£o",
      "Pele",
      "Cabelo",
      "Antioxidante"
    ],
    "tip": "Ã‰ uma opÃ§Ã£o delicada para quem quer cuidado multifuncional. No cabelo, use pouco nas pontas; na pele, aplique conforme orientaÃ§Ã£o e sempre observe a resposta da sua pele."
  }
];
const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const state = {
  cart: JSON.parse(localStorage.getItem("becker:cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("becker:wishlist") || "[]"),
  filter: "Todos",
};
const byId = (id) => products.find((product) => product.id === id);
const save = () => {
  localStorage.setItem("becker:cart", JSON.stringify(state.cart));
  localStorage.setItem("becker:wishlist", JSON.stringify(state.wishlist));
};
const hasPrice = (product) => Number(product.price || 0) > 0;
const productPrice = (product) => product.priceLabel || (hasPrice(product) ? money.format(product.price) : "Consultar valor");
const isPagesPath = location.pathname.replace(/\\/g, "/").includes("/pages/");
const rootPrefix = isPagesPath ? "../" : "";
const assetUrl = (path) => `${rootPrefix}${path}`;
const pageUrl = (path) => isPagesPath ? path : `pages/${path}`;
const productAction = (product, size = "small") => hasPrice(product)
  ? `<button class="btn ${size}" type="button" data-add-cart="${product.id}">Comprar</button>`
  : `<span class="btn ${size} ghost dark no-action">Consultar valor</span>`;
const anaileTip = (product) => `
  <aside class="anaile-tip">
    <div class="anaile-head"><img src="${assetUrl("assets/img/anaile-avatar.webp")}" alt="Anaile, fundadora do SalÃ£o Becker"><div><span>âœ¨ Dica da Anaile</span><strong>RecomendaÃ§Ã£o profissional</strong></div></div>
    <p>"${product.tip || "A equipe Becker orienta o melhor uso conforme o histÃ³rico, a rotina e a necessidade do seu cabelo."}"</p>
  </aside>`;
const productCard = (product) => `
  <article class="product-card reveal visible" data-product-card data-card-link="${pageUrl(`produto.html?produto=${product.id}`)}" data-id="${product.id}" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
    <button class="wishlist ${state.wishlist.includes(product.id) ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="Favoritar ${product.name}">â™¡</button>
    <a class="product-media" href="${pageUrl(`produto.html?produto=${product.id}`)}" aria-label="Ver ${product.name}"><img src="${assetUrl(product.image)}" alt="${product.name}"></a>
    <div class="product-info"><span>${product.category}</span><h3><a href="${pageUrl(`produto.html?produto=${product.id}`)}">${product.name}</a></h3><p>${product.description}</p><div class="benefit-list">${product.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div><div class="rating">â˜… ${product.rating} <small>(${product.reviews})</small></div><div class="price"><strong>${productPrice(product)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div><div class="product-card-actions">${productAction(product)}<a class="btn small ghost dark" href="${pageUrl(`produto.html?produto=${product.id}`)}">Ver produto</a></div></div>
    ${anaileTip(product)}
  </article>`;
function syncNav() { document.querySelector("[data-nav]")?.classList.toggle("scrolled", window.scrollY > 18); }
window.addEventListener("scroll", syncNav, { passive: true }); syncNav();
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
menuToggle?.addEventListener("click", () => {
  const open = navPanel.classList.toggle("open");
  menuToggle.classList.toggle("open", open);
  document.querySelector("[data-nav]")?.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".submenu-toggle").forEach((button) => button.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 1120px)").matches) button.closest(".nav-group")?.classList.toggle("open");
}));
document.querySelectorAll(".nav-panel a").forEach((link) => link.addEventListener("click", () => {
  if (!window.matchMedia("(max-width: 1120px)").matches) return;
  navPanel?.classList.remove("open");
  menuToggle?.classList.remove("open");
  document.querySelector("[data-nav]")?.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
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
const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
}, { threshold: 0.14 }) : null;
document.querySelectorAll(".reveal").forEach((el) => observer ? observer.observe(el) : el.classList.add("visible"));
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
function openCart() { document.body.classList.add("cart-open"); document.querySelector("#cartDrawer")?.setAttribute("aria-hidden", "false"); }
function closeCart() { document.body.classList.remove("cart-open"); document.querySelector("#cartDrawer")?.setAttribute("aria-hidden", "true"); }
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
  if (!product || !hasPrice(product)) {
    return;
  }
  const existing = state.cart.find((item) => item.id === id);
  if (existing) existing.qty += qty; else state.cart.push({ id, qty });
  save(); renderCart(); renderCheckout(); openCart();
}
function updateCart(id, delta) {
  const item = state.cart.find((entry) => entry.id === id); if (!item) return;
  item.qty += delta; if (item.qty <= 0) removeCart(id); else { save(); renderCart(); renderCheckout(); }
}
function removeCart(id) { state.cart = state.cart.filter((entry) => entry.id !== id); save(); renderCart(); renderCheckout(); }
function toggleWishlist(id) {
  state.wishlist = state.wishlist.includes(id) ? state.wishlist.filter((item) => item !== id) : [...state.wishlist, id];
  save(); document.querySelectorAll(`[data-wishlist="${id}"]`).forEach((button) => button.classList.toggle("active", state.wishlist.includes(id)));
}
function cartTotals() {
  return state.cart.reduce((acc, entry) => {
    const product = byId(entry.id); if (!product) return acc;
    acc.qty += entry.qty; acc.total += Number(product.price || 0) * entry.qty; return acc;
  }, { qty: 0, total: 0 });
}
function renderCart() {
  const itemsEl = document.querySelector("[data-cart-items]");
  const emptyEl = document.querySelector("[data-cart-empty]");
  const totalEl = document.querySelector("[data-cart-total]");
  const count = cartTotals();
  document.querySelectorAll("[data-cart-count]").forEach((el) => el.textContent = String(count.qty));
  if (totalEl) totalEl.textContent = money.format(count.total);
  if (!itemsEl || !emptyEl) return;
  emptyEl.classList.toggle("show", state.cart.length === 0);
  itemsEl.innerHTML = state.cart.map((entry) => {
    const product = byId(entry.id); if (!product) return "";
    return `<article class="cart-item"><img src="${assetUrl(product.image)}" alt="${product.name}"><div><h4>${product.name}</h4><span>${productPrice(product)}</span><div class="cart-item-controls"><button type="button" data-cart-minus="${product.id}">âˆ’</button><b>${entry.qty}</b><button type="button" data-cart-plus="${product.id}">+</button><button type="button" data-cart-remove="${product.id}">Remover</button></div></div><strong>${money.format(Number(product.price || 0) * entry.qty)}</strong></article>`;
  }).join("");
}
function renderShop() {
  const grids = document.querySelectorAll("[data-product-grid]");
  if (!grids.length) return;
  const categories = document.querySelector("[data-shop-categories]");
  if (categories) {
    const cats = ["Todos", ...new Set(products.map((product) => product.category))];
    categories.innerHTML = cats.map((cat) => `<button type="button" class="${state.filter === cat ? "active" : ""}" data-shop-filter="${cat}">${cat}</button>`).join("");
  }
  const search = document.querySelector("[data-shop-search]")?.value.trim().toLowerCase() || "";
  const sort = document.querySelector("[data-shop-sort]")?.value || "featured";
  let list = products.filter((product) => state.filter === "Todos" || product.category === state.filter)
    .filter((product) => [product.name, product.category, product.description, ...(product.benefits || [])].join(" ").toLowerCase().includes(search));
  if (sort === "price-asc") list.sort((a, b) => Number(a.price || 999999) - Number(b.price || 999999));
  if (sort === "price-desc") list.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  grids.forEach((grid) => {
    const limit = Number(grid.dataset.limit || 0);
    const rows = limit ? products.slice(0, limit) : list;
    grid.innerHTML = rows.map(productCard).join("");
  });
  document.querySelector("[data-shop-empty]")?.classList.toggle("show", list.length === 0);
}
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-shop-filter]"); if (!button) return;
  state.filter = button.dataset.shopFilter; renderShop();
});
document.querySelector("[data-shop-search]")?.addEventListener("input", renderShop);
document.querySelector("[data-shop-sort]")?.addEventListener("change", renderShop);
function renderProductPage() {
  const detail = document.querySelector("[data-product-detail]"); if (!detail) return;
  const params = new URLSearchParams(location.search); const product = byId(params.get("produto")) || products[0];
  detail.innerHTML = `<button class="product-gallery reveal visible" type="button" data-product-lightbox="${assetUrl(product.image)}" aria-label="Ampliar imagem de ${product.name}"><img src="${assetUrl(product.image)}" alt="${product.name}"></button><div class="product-copy reveal visible"><span class="eyebrow">${product.category}</span><h1 class="display">${product.name}</h1><div class="rating">â˜… ${product.rating} <small>${product.reviews} avaliaÃ§Ãµes</small></div><div class="price"><strong>${productPrice(product)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div><p class="lead">${product.description}</p><div class="benefit-list">${product.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div><div class="product-actions">${hasPrice(product) ? `<div class="qty-control"><button type="button" data-detail-minus>âˆ’</button><span data-detail-qty>1</span><button type="button" data-detail-plus>+</button></div><button class="btn" type="button" data-add-cart="${product.id}" data-qty="1">Comprar</button>` : `<span class="btn ghost dark no-action">Consultar valor</span>`}<button class="btn ghost dark" type="button" data-wishlist="${product.id}">Favoritar</button></div><div class="payment-panel">Clique na imagem para visualizar o produto em tamanho ampliado.</div>${anaileTip(product)}</div>`;
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).concat(products.filter((item) => item.category !== product.category)).slice(0, 4);
  const relatedEl = document.querySelector("[data-related-products]"); if (relatedEl) relatedEl.innerHTML = related.map(productCard).join("");
  let qty = 1;
  document.querySelector("[data-detail-plus]")?.addEventListener("click", () => { qty += 1; document.querySelector("[data-detail-qty]").textContent = String(qty); document.querySelector("[data-add-cart]").dataset.qty = String(qty); });
  document.querySelector("[data-detail-minus]")?.addEventListener("click", () => { qty = Math.max(1, qty - 1); document.querySelector("[data-detail-qty]").textContent = String(qty); document.querySelector("[data-add-cart]").dataset.qty = String(qty); });
}
function renderCheckout() {
  const items = document.querySelector("[data-checkout-items]"); const total = document.querySelector("[data-checkout-total]"); if (!items || !total) return;
  items.innerHTML = state.cart.length ? state.cart.map((entry) => {
    const product = byId(entry.id); if (!product) return "";
    return `<article class="summary-item"><img src="${assetUrl(product.image)}" alt="${product.name}"><div><h4>${product.name}</h4><span>${entry.qty} item(ns)</span></div><strong>${hasPrice(product) ? money.format(Number(product.price || 0) * entry.qty) : "Consultar valor"}</strong></article>`;
  }).join("") : '<p class="lead">Seu carrinho estÃ¡ vazio. Adicione produtos para visualizar o resumo.</p>';
  const subtotal = cartTotals().total; const shipping = state.cart.length ? 24.9 : 0;
  total.innerHTML = `<div><span>Subtotal</span><strong>${money.format(subtotal)}</strong></div><div><span>Frete estimado</span><strong>${money.format(shipping)}</strong></div><div><span>Total</span><strong>${money.format(subtotal + shipping)}</strong></div>`;
}
document.querySelector("[data-checkout-confirm]")?.addEventListener("click", () => {
  const note = document.querySelector("[data-checkout-note]");
  if (note) note.textContent = state.cart.length ? "Pedido registrado para revisÃ£o. IntegraÃ§Ã£o de pagamento pode ser conectada nesta etapa." : "Adicione produtos ao carrinho antes de confirmar.";
});
document.querySelector("[data-shipping-calc]")?.addEventListener("click", () => {
  const zip = document.querySelector("[data-shipping-zip]")?.value || "";
  document.querySelector("[data-shipping-result]").textContent = zip.replace(/\D/g, "").length >= 8 ? "Entrega estimada em 3 a 6 dias Ãºteis: R$ 24,90." : "Digite um CEP vÃ¡lido para simular.";
});
document.querySelector("[data-apply-coupon]")?.addEventListener("click", () => {
  const coupon = document.querySelector("[data-coupon]")?.value.trim().toUpperCase();
  document.querySelector("[data-coupon-result]").textContent = coupon === "BECKER10" ? "Cupom aplicado: 10% de desconto." : "Cupom nÃ£o encontrado.";
});
document.querySelector("[data-payment-tabs]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-payment]"); if (!button) return;
  document.querySelectorAll("[data-payment]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelector("[data-payment-panel]").innerHTML = `Pagamento selecionado: <strong>${button.dataset.payment}</strong>. Nossa equipe confirmarÃ¡ os dados do pedido.`;
});
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImg = lightbox?.querySelector("img");
function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src; lightboxImg.alt = alt; lightbox.classList.add("open");
}
document.querySelectorAll("[data-lightbox]").forEach((item) => item.addEventListener("click", () => {
  const img = item.querySelector("img"); if (!img) return; openLightbox(img.src, img.alt);
}));
lightbox?.querySelector("button")?.addEventListener("click", () => lightbox.classList.remove("open"));
lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.classList.remove("open"); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeCart(); lightbox?.classList.remove("open"); } });
renderCart(); renderShop(); renderProductPage(); renderCheckout();

