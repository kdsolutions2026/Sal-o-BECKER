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
    "description": "Leave-in condicionante para cabelos sensibilizados por coloração, mechas ou processos químicos.",
    "benefits": [
      "Reparação",
      "Maciez",
      "Elasticidade",
      "Proteção UV"
    ],
    "tip": "Eu gosto dele para cabelos que perderam toque e resistência depois da cor. Use uma pequena quantidade no comprimento e pontas antes da escova ou deixe secar naturalmente para manter o fio mais alinhado e protegido."
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
    "description": "Condicionador para definição, emoliência e cuidado de cabelos cacheados ou ondulados.",
    "benefits": [
      "Definição",
      "Emoliência",
      "Maciez",
      "Cachos"
    ],
    "tip": "Indico para quem quer cachos mais definidos sem perder movimento. Aplique no comprimento após o shampoo, desembarace com delicadeza e enxágue bem para manter leveza."
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
    "tip": "É uma boa escolha para quem faz coloração ou tonalização e quer prolongar o brilho. Use nas lavagens de rotina e evite água muito quente para preservar ainda mais a cor."
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
    "description": "Leave-in de tratamento para reparação, restauração e revitalização dos fios.",
    "benefits": [
      "Reparação",
      "Nutrição",
      "Controle de frizz",
      "Brilho"
    ],
    "tip": "Uso quando o cabelo precisa de acabamento mais polido. Uma pequena quantidade já ajuda a reduzir frizz e entregar brilho, principalmente em fios ressecados ou com química."
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
    "description": "Shampoo hidratante para cabelos secos, frágeis ou com toque áspero.",
    "benefits": [
      "Hidratação",
      "Maciez",
      "Toque sedoso",
      "Cabelo seco"
    ],
    "tip": "Recomendo para quem sente o fio sem maleabilidade. Ele entra muito bem na rotina de cabelos secos, alternando com tratamentos profissionais quando o fio precisa de mais disciplina."
  },
  {
    "id": "kerastase-nutritive-bain-satin",
    "name": "Kérastase Nutritive Bain Satin",
    "category": "Shampoo",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 35,
    "image": "assets/products/catalog/kerastase-nutritive-bain-satin.webp",
    "description": "Shampoo hidratante da linha Nutritive para cabelos secos.",
    "benefits": [
      "Nutrição",
      "Hidratação",
      "Cabelo seco",
      "Brilho"
    ],
    "tip": "Gosto para quem precisa de uma limpeza confortável, sem deixar o cabelo rígido. Massageie o couro cabeludo e deixe a espuma escorrer para o comprimento."
  },
  {
    "id": "kerastase-chroma-bain-respect",
    "name": "Kérastase Chroma Absolu Bain Chroma Respect",
    "category": "Shampoo",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 27,
    "image": "assets/products/catalog/kerastase-chroma-bain-respect.webp",
    "description": "Shampoo hidratante protetor para cabelos coloridos, sensibilizados ou danificados.",
    "benefits": [
      "Proteção da cor",
      "Hidratação",
      "Cabelos coloridos",
      "Sensibilidade"
    ],
    "tip": "É uma das escolhas que eu indicaria para manter a cor bonita entre as visitas ao salão. Use com água morna e finalize com máscara ou condicionador da rotina."
  },
  {
    "id": "kerastase-chroma-masque",
    "name": "Kérastase Chroma Absolu Masque Chroma Filler",
    "category": "Máscara",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 31,
    "image": "assets/products/catalog/kerastase-chroma-masque.webp",
    "description": "Máscara para cabelos coloridos sensibilizados ou danificados, médios a grossos.",
    "benefits": [
      "Máscara",
      "Cor",
      "Porosidade",
      "Cabelo sensibilizado"
    ],
    "tip": "Gosto dela quando o cabelo colorido precisa de mais corpo e preenchimento. Use uma vez por semana ou conforme orientação, sempre retirando o excesso de água antes da aplicação."
  },
  {
    "id": "wella-ultimate-luxe-oil",
    "name": "Wella Ultimate Luxe Oil",
    "category": "Óleo finalizador",
    "price": null,
    "priceLabel": "Consultar valor",
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 26,
    "image": "assets/products/catalog/wella-ultimate-luxe-oil.webp",
    "description": "Óleo reconstrutor para todos os tipos de cabelo, com acabamento luminoso.",
    "benefits": [
      "Brilho",
      "Finalização",
      "Ômega-9",
      "Todos os fios"
    ],
    "tip": "Indico uma ou duas gotas no comprimento e pontas após a finalização. Ele ajuda muito no brilho e na sensação de cabelo bem cuidado, sem exagerar na quantidade."
  },
  {
    "id": "anazoe-oleo-argan",
    "name": "Óleo de Argan Anazoe",
    "category": "Óleos Anazoe",
    "price": 79.9,
    "oldPrice": 0,
    "rating": 4.7,
    "reviews": 28,
    "image": "assets/products/catalog/anazoe-oleo-argan.webp",
    "description": "Óleo vegetal para brilho, maciez, pontas ressecadas e umectação.",
    "benefits": [
      "Brilho",
      "Maciez",
      "Pontas",
      "Umectação"
    ],
    "tip": "Gosto dele para pontas opacas e ressecadas. Use em pequena quantidade como finalizador ou em umectação antes da lavagem, sempre evitando excesso na raiz."
  },
  {
    "id": "anazoe-oleo-ricino",
    "name": "Óleo de Rícino Anazoe",
    "category": "Óleos Anazoe",
    "price": 69.9,
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 33,
    "image": "assets/products/catalog/anazoe-oleo-ricino.webp",
    "description": "Óleo vegetal de alto poder nutritivo para fios, cílios, sobrancelhas e áreas ressecadas.",
    "benefits": [
      "Nutrição",
      "Cílios",
      "Sobrancelhas",
      "Umectação"
    ],
    "tip": "Ele é mais denso, então a quantidade precisa ser pequena. Indico para nutrição pontual e rituais de umectação, principalmente quando o fio está muito ressecado."
  },
  {
    "id": "anazoe-oleo-abacate",
    "name": "Óleo de Abacate Anazoe",
    "category": "Óleos Anazoe",
    "price": 79.9,
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 30,
    "image": "assets/products/catalog/anazoe-oleo-abacate.webp",
    "description": "Óleo vegetal para maciez, redução de ressecamento e cuidado de cabelos cacheados, crespos e barbas.",
    "benefits": [
      "Maciez",
      "Cachos",
      "Barba",
      "Ressecamento"
    ],
    "tip": "Gosto para fios mais secos, cacheados ou crespos. Use em umectação ou misture algumas gotas no tratamento quando o cabelo estiver pedindo mais nutrição."
  },
  {
    "id": "anazoe-oleo-rosa-mosqueta",
    "name": "Óleo de Rosa Mosqueta Anazoe",
    "category": "Óleos Anazoe",
    "price": 89.9,
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 46,
    "image": "assets/products/catalog/anazoe-oleo-rosa-mosqueta.webp",
    "description": "Óleo vegetal para pele e cabelo, com foco em hidratação, maciez e cuidado antioxidante.",
    "benefits": [
      "Hidratação",
      "Pele",
      "Cabelo",
      "Antioxidante"
    ],
    "tip": "É uma opção delicada para quem quer cuidado multifuncional. No cabelo, use pouco nas pontas; na pele, aplique conforme orientação e sempre observe a resposta da sua pele."
  }
];
const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const isInsidePagesDir = location.pathname.replace(/\\/g, "/").includes("/pages/");
const pagePath = (file) => `${isInsidePagesDir ? "" : "pages/"}${file}`;
const assetPath = (file) => `${isInsidePagesDir ? "../" : ""}${file}`;
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
const productConsultUrl = (product) => `https://wa.me/5517991431729?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto: ${product.name}.`)}`;
const productAction = (product, size = "small") => hasPrice(product)
  ? `<button class="btn ${size}" type="button" data-add-cart="${product.id}">Comprar</button>`
  : `<a class="btn ${size}" href="${productConsultUrl(product)}" target="_blank" rel="noopener">Consultar</a>`;
const anaileTip = (product) => `
  <aside class="anaile-tip">
    <div class="anaile-head"><img src="${assetPath("assets/img/anaile-avatar.webp")}" alt="Anaile, fundadora do Salão Becker"><div><span>Dica da Anaile</span><strong>Recomendação profissional</strong></div></div>
    <p>"${product.tip || "A equipe Becker orienta o melhor uso conforme o histórico, a rotina e a necessidade do seu cabelo."}"</p>
  </aside>`;
const productCard = (product) => `
  <article class="product-card reveal visible" data-product-card data-card-link="${pagePath("produto.html")}?produto=${product.id}" data-id="${product.id}" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
    <button class="wishlist ${state.wishlist.includes(product.id) ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="Favoritar ${product.name}">&hearts;</button>
    <a class="product-media" href="${pagePath("produto.html")}?produto=${product.id}" aria-label="Ver ${product.name}"><img src="${assetPath(product.image)}" alt="${product.name}"></a>
    <div class="product-info"><span>${product.category}</span><h3><a href="${pagePath("produto.html")}?produto=${product.id}">${product.name}</a></h3><p>${product.description}</p><div class="benefit-list">${product.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div><div class="rating">&#9733; ${product.rating} <small>(${product.reviews})</small></div><div class="price"><strong>${productPrice(product)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div><div class="product-card-actions">${productAction(product)}<a class="btn small ghost dark" href="${pagePath("produto.html")}?produto=${product.id}">Ver produto</a></div></div>
    ${anaileTip(product)}
  </article>`;
function syncNav() { document.querySelector("[data-nav]")?.classList.toggle("scrolled", window.scrollY > 18); }
window.addEventListener("scroll", syncNav, { passive: true }); syncNav();
const menuToggles = Array.from(document.querySelectorAll(".menu-toggle"));
const navPanel = document.querySelector(".nav-panel");
menuToggles.forEach((menuToggle) => menuToggle.addEventListener("click", () => {
  const open = navPanel.classList.toggle("open");
  menuToggles.forEach((toggle) => {
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelector("[data-nav]")?.classList.toggle("menu-open", open);
}));
document.querySelectorAll(".submenu-toggle").forEach((button) => button.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 1120px)").matches) button.closest(".nav-group")?.classList.toggle("open");
}));
const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
}, { threshold: 0.14 }) : null;
document.querySelectorAll(".reveal").forEach((el) => observer ? observer.observe(el) : el.classList.add("visible"));
function openCart() { document.body.classList.add("cart-open"); document.querySelector("#cartDrawer")?.setAttribute("aria-hidden", "false"); }
function closeCart() { document.body.classList.remove("cart-open"); document.querySelector("#cartDrawer")?.setAttribute("aria-hidden", "true"); }
document.addEventListener("click", (event) => {
  const lightboxTarget = event.target.closest("[data-product-lightbox]");
  if (lightboxTarget) {
    event.preventDefault();
    openLightbox(lightboxTarget.dataset.productLightbox, lightboxTarget.querySelector("img")?.alt || "Produto Becker");
    return;
  }
  const videoTarget = event.target.closest("[data-video-lightbox]");
  if (videoTarget) {
    event.preventDefault();
    openVideoLightbox(videoTarget.dataset.videoLightbox, videoTarget.dataset.videoLabel || "Video Becker");
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
    if (product) window.open(productConsultUrl(product), "_blank", "noopener");
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
    return `<article class="cart-item"><img src="${assetPath(product.image)}" alt="${product.name}"><div><h4>${product.name}</h4><span>${productPrice(product)}</span><div class="cart-item-controls"><button type="button" data-cart-minus="${product.id}">-</button><b>${entry.qty}</b><button type="button" data-cart-plus="${product.id}">+</button><button type="button" data-cart-remove="${product.id}">Remover</button></div></div><strong>${money.format(Number(product.price || 0) * entry.qty)}</strong></article>`;
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
  detail.innerHTML = `<button class="product-gallery reveal visible" type="button" data-product-lightbox="${assetPath(product.image)}" aria-label="Ampliar imagem de ${product.name}"><img src="${assetPath(product.image)}" alt="${product.name}"></button><div class="product-copy reveal visible"><span class="eyebrow">${product.category}</span><h1 class="display">${product.name}</h1><div class="rating">&#9733; ${product.rating} <small>${product.reviews} avaliações</small></div><div class="price"><strong>${productPrice(product)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div><p class="lead">${product.description}</p><div class="benefit-list">${product.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div><div class="product-actions">${hasPrice(product) ? `<div class="qty-control"><button type="button" data-detail-minus>-</button><span data-detail-qty>1</span><button type="button" data-detail-plus>+</button></div><button class="btn" type="button" data-add-cart="${product.id}" data-qty="1">Comprar</button>` : `<a class="btn" href="${productConsultUrl(product)}" target="_blank" rel="noopener">Consultar pelo WhatsApp</a>`}<button class="btn ghost dark" type="button" data-wishlist="${product.id}">Favoritar</button></div><div class="payment-panel">Clique na imagem para visualizar o produto em tamanho ampliado.</div>${anaileTip(product)}</div>`;
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
    return `<article class="summary-item"><img src="${assetPath(product.image)}" alt="${product.name}"><div><h4>${product.name}</h4><span>${entry.qty} item(ns)</span></div><strong>${money.format(Number(product.price || 0) * entry.qty)}</strong></article>`;
  }).join("") : '<p class="lead">Seu carrinho está vazio. Adicione produtos para visualizar o resumo.</p>';
  const subtotal = cartTotals().total; const shipping = state.cart.length ? 24.9 : 0;
  total.innerHTML = `<div><span>Subtotal</span><strong>${money.format(subtotal)}</strong></div><div><span>Frete estimado</span><strong>${money.format(shipping)}</strong></div><div><span>Total</span><strong>${money.format(subtotal + shipping)}</strong></div>`;
}
document.querySelector("[data-shipping-calc]")?.addEventListener("click", () => {
  const zip = document.querySelector("[data-shipping-zip]")?.value || "";
  document.querySelector("[data-shipping-result]").textContent = zip.replace(/\D/g, "").length >= 8 ? "Entrega estimada em 3 a 6 dias úteis: R$ 24,90." : "Digite um CEP válido para simular.";
});
document.querySelector("[data-apply-coupon]")?.addEventListener("click", () => {
  const coupon = document.querySelector("[data-coupon]")?.value.trim().toUpperCase();
  document.querySelector("[data-coupon-result]").textContent = coupon === "BECKER10" ? "Cupom aplicado: 10% de desconto." : "Cupom não encontrado.";
});
document.querySelector("[data-payment-tabs]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-payment]"); if (!button) return;
  document.querySelectorAll("[data-payment]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelector("[data-payment-panel]").innerHTML = `Pagamento selecionado: <strong>${button.dataset.payment}</strong>. Nossa equipe confirmará os dados do pedido.`;
});
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImg = lightbox?.querySelector("img");
const lightboxVideo = lightbox ? document.createElement("video") : null;
if (lightboxVideo) {
  lightboxVideo.className = "lightbox-video";
  lightboxVideo.controls = true;
  lightboxVideo.playsInline = true;
  lightboxVideo.preload = "metadata";
  lightbox.appendChild(lightboxVideo);
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open", "video-open");
  if (lightboxVideo) {
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
  }
}
function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  if (lightboxVideo) {
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
  }
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.remove("video-open");
  lightbox.classList.add("open");
}
function openVideoLightbox(src, alt) {
  if (!lightbox || !lightboxVideo || !lightboxImg) return;
  lightboxImg.removeAttribute("src");
  lightboxImg.alt = alt;
  lightboxVideo.src = src;
  lightboxVideo.setAttribute("aria-label", alt);
  lightbox.classList.add("open", "video-open");
  lightboxVideo.play().catch(() => {});
}
document.querySelectorAll("[data-lightbox]").forEach((item) => item.addEventListener("click", () => {
  const img = item.querySelector("img"); if (!img) return; openLightbox(img.src, img.alt);
}));
lightbox?.querySelector("button")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeCart(); closeLightbox(); } });

function initServiceFilters() {
  document.querySelectorAll("[data-service-filters]").forEach((bar) => {
    const section = bar.closest(".section") || document;
    const rows = Array.from(section.querySelectorAll(".service-list .service-row"));
    if (!rows.length) return;
    const categories = ["Todos"];
    rows.forEach((row) => {
      const category = row.querySelector(".pill")?.textContent.trim() || "Outros";
      row.dataset.serviceCategory = category;
      if (!categories.includes(category)) categories.push(category);
    });
    bar.innerHTML = "";
    categories.forEach((category, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.serviceFilter = category;
      button.textContent = category;
      button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      if (index === 0) button.classList.add("active");
      bar.appendChild(button);
    });
    const applyFilter = (category) => {
      rows.forEach((row) => {
        const show = category === "Todos" || row.dataset.serviceCategory === category;
        row.hidden = !show;
        row.classList.toggle("service-row-hidden", !show);
      });
      bar.querySelectorAll("[data-service-filter]").forEach((button) => {
        const active = button.dataset.serviceFilter === category;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
    };
    bar.addEventListener("click", (event) => {
      const button = event.target.closest("[data-service-filter]");
      if (!button) return;
      applyFilter(button.dataset.serviceFilter);
    });
  });
}

function initHeroSlider() {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const track = slider.querySelector(".studio-hero-track");
  const slides = track ? Array.from(track.querySelectorAll(".hero-slide")) : [];
  if (!track || slides.length < 2) return;

  const transitionValue = "transform .95s cubic-bezier(.22,1,.36,1)";
  const uniqueCount = Math.max(1, Math.floor(slides.length / 2));
  let index = 0;
  let resetTimer = null;
  let resizeTimer = null;

  function visiblePanels() {
    return window.matchMedia("(max-width: 720px)").matches ? 1 : 4;
  }

  function applyLayout(animate = true) {
    const panels = visiblePanels();
    const slideWidth = slider.clientWidth / panels;
    slides.forEach((slide) => {
      slide.style.width = slideWidth + "px";
    });
    track.style.width = slideWidth * slides.length + "px";
    track.style.transition = animate ? transitionValue : "none";
    track.style.transform = "translateX(" + (-index * slideWidth) + "px)";
  }

  function scheduleReset(slideWidth) {
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      index = 0;
      track.style.transition = "none";
      track.style.transform = "translateX(0px)";
      // Force reflow so the next advance animates again.
      void track.offsetHeight;
      track.style.transition = transitionValue;
    }, 980);
  }

  function step() {
    const slideWidth = slider.clientWidth / visiblePanels();
    index += 1;
    track.style.transition = transitionValue;
    track.style.transform = "translateX(" + (-index * slideWidth) + "px)";
    if (index >= uniqueCount) scheduleReset(slideWidth);
  }

  applyLayout(false);
  setInterval(step, 4200);
  window.addEventListener("resize", function() {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function() {
      if (index >= uniqueCount) index = 0;
      applyLayout(false);
    }, 120);
  }, { passive: true });
}

renderCart(); renderShop(); renderProductPage(); renderCheckout(); initServiceFilters(); initHeroSlider();
