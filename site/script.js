const products = [
  {
    "id": "lanza-detangling-primer",
    "name": "L'Anza Detangling Primer",
    "category": "Leave-in",
    "price": 189.9,
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 42,
    "image": "assets/products/produto-lanza-primer.jpg",
    "description": "Leave-in leve indicado para reduzir a quebra, melhorar a maleabilidade e preparar o cabelo para modelagem. Desembaraça, suaviza, fortalece fios fragilizados e oferece proteção térmica até 260 °C com tripla proteção UV.",
    "benefits": [
      "Reduz quebra",
      "Desembaraça",
      "Suaviza",
      "Proteção térmica"
    ]
  },
  {
    "id": "lanza-trauma-treatment",
    "name": "L'Anza Trauma Treatment",
    "category": "Tratamento",
    "price": 219.9,
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 51,
    "image": "assets/products/produto-lanza-trauma.jpg",
    "description": "Leave-in altamente condicionante para cabelos sensibilizados pela coloração. Ajuda na reparação, fortalece, melhora elasticidade, maciez e vivacidade da cor, com proteção térmica até 260 °C e tripla proteção UV.",
    "benefits": [
      "Reparação",
      "Elasticidade",
      "Cor viva",
      "Proteção UV"
    ]
  },
  {
    "id": "sh-rd-hair-treatment",
    "name": "SH-RD Hair Treatment",
    "category": "Máscara",
    "price": 249.9,
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 37,
    "image": "assets/products/produto-hair-treatment.jpg",
    "description": "Tratamento capilar com foco em nutrição instantânea, hidratação profunda, emoliência, aumento da resistência capilar e regeneração de fios danificados.",
    "benefits": [
      "Nutrição",
      "Hidratação",
      "Resistência",
      "Regeneração"
    ]
  },
  {
    "id": "oleo-argan-anazoe",
    "name": "Óleo de Argan Anazoe",
    "category": "Óleos",
    "price": 79.9,
    "oldPrice": 0,
    "rating": 4.7,
    "reviews": 28,
    "image": "assets/img/oleos-vegetais-anazoe.jpg",
    "description": "Óleo vegetal destacado no material Anazoe para cabelos finos e médios, podendo ser usado como leave-in, umectante e pré-shampoo, além de cuidado para pontas e fios ressecados.",
    "benefits": [
      "Brilho",
      "Maciez",
      "Pontas",
      "Umectação"
    ]
  },
  {
    "id": "oleo-ricino-anazoe",
    "name": "Óleo de Rícino Anazoe",
    "category": "Óleos",
    "price": 69.9,
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 33,
    "image": "assets/img/oleos-vegetais-anazoe.jpg",
    "description": "Óleo vegetal apresentado para cuidado de cabelos, cílios e sobrancelhas, com uso em umectação e nutrição de áreas ressecadas.",
    "benefits": [
      "Nutrição",
      "Cílios",
      "Sobrancelhas",
      "Umectação"
    ]
  },
  {
    "id": "oleo-coco-anazoe",
    "name": "Óleo de Coco Anazoe",
    "category": "Óleos",
    "price": 69.9,
    "oldPrice": 0,
    "rating": 4.7,
    "reviews": 25,
    "image": "assets/img/oleos-vegetais-anazoe.jpg",
    "description": "Óleo vegetal indicado no material para cuidado capilar e corporal, com foco em hidratação, maciez e proteção em rituais de beleza.",
    "benefits": [
      "Hidratação",
      "Maciez",
      "Corpo",
      "Cabelo"
    ]
  },
  {
    "id": "oleo-rosa-mosqueta-anazoe",
    "name": "Óleo de Rosa Mosqueta Anazoe",
    "category": "Óleos",
    "price": 89.9,
    "oldPrice": 0,
    "rating": 4.9,
    "reviews": 46,
    "image": "assets/img/oleos-vegetais-anazoe.jpg",
    "description": "Óleo vegetal apresentado para uso em pele e cabelo, com destaque para hidratação, cuidado antioxidante e toque mais uniforme.",
    "benefits": [
      "Hidratação",
      "Pele",
      "Cabelo",
      "Antioxidante"
    ]
  },
  {
    "id": "oleo-amendoas-anazoe",
    "name": "Óleo de Amêndoas Doce Anazoe",
    "category": "Óleos",
    "price": 74.9,
    "oldPrice": 0,
    "rating": 4.8,
    "reviews": 31,
    "image": "assets/img/oleos-vegetais-anazoe.jpg",
    "description": "Óleo vegetal indicado para nutrição de peles e cabelos ressecados, com sensação de conforto e maciez.",
    "benefits": [
      "Nutrição",
      "Maciez",
      "Pele",
      "Cabelos ressecados"
    ]
  }
];
const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const inSitePages = location.pathname.replace(/\\/g, "/").includes("/site/pages/");
const assetPath = (path) => path.startsWith("assets/") ? (inSitePages ? "../" : "site/") + path : path;
const pagePath = (page) => (inSitePages ? "" : "site/pages/") + page;
const productUrl = (id) => pagePath("produto.html") + "?produto=" + encodeURIComponent(id);
const whatsappLink = (message = "Olá, gostaria de agendar um serviço no Salão Becker.") => "https://wa.me/5517991431729?text=" + encodeURIComponent(message);
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
const productCard = (product) => `
  <article class="product-card reveal visible" data-product-card data-id="${product.id}" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
    <button class="wishlist ${state.wishlist.includes(product.id) ? "active" : ""}" type="button" data-wishlist="${product.id}" aria-label="Favoritar ${product.name}">♡</button>
    <a class="product-media" href="${productUrl(product.id)}" data-product-lightbox="${assetPath(product.image)}" aria-label="Ampliar imagem de ${product.name}"><img loading="lazy" decoding="async" src="${assetPath(product.image)}" alt="${product.name}"></a>
    <div class="product-info"><span>${product.category}</span><h3><a href="${productUrl(product.id)}">${product.name}</a></h3><div class="rating">★ ${product.rating} <small>(${product.reviews})</small></div><div class="price"><strong>${money.format(product.price)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div><button class="btn small" type="button" data-add-cart="${product.id}">Comprar</button></div>
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
    acc.qty += entry.qty; acc.total += product.price * entry.qty; return acc;
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
    return `<article class="cart-item"><img loading="lazy" decoding="async" src="${assetPath(product.image)}" alt="${product.name}"><div><h4>${product.name}</h4><span>${money.format(product.price)}</span><div class="cart-item-controls"><button type="button" data-cart-minus="${product.id}">−</button><b>${entry.qty}</b><button type="button" data-cart-plus="${product.id}">+</button><button type="button" data-cart-remove="${product.id}">Remover</button></div></div><strong>${money.format(product.price * entry.qty)}</strong></article>`;
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
  if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
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
  detail.innerHTML = `<button class="product-gallery reveal visible" type="button" data-product-lightbox="${assetPath(product.image)}" aria-label="Ampliar imagem de ${product.name}"><img loading="lazy" decoding="async" src="${assetPath(product.image)}" alt="${product.name}"></button><div class="product-copy reveal visible"><span class="eyebrow">${product.category}</span><h1 class="display">${product.name}</h1><div class="rating">★ ${product.rating} <small>${product.reviews} avaliações</small></div><div class="price"><strong>${money.format(product.price)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div><p class="lead">${product.description}</p><div class="benefit-list">${product.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}</div><div class="product-actions"><div class="qty-control"><button type="button" data-detail-minus>−</button><span data-detail-qty>1</span><button type="button" data-detail-plus>+</button></div><button class="btn" type="button" data-add-cart="${product.id}" data-qty="1">Comprar</button><button class="btn ghost dark" type="button" data-wishlist="${product.id}">Favoritar</button></div><div class="payment-panel">Clique na imagem para visualizar o produto em tamanho ampliado.</div></div>`;
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
    return `<article class="summary-item"><img loading="lazy" decoding="async" src="${assetPath(product.image)}" alt="${product.name}"><div><h4>${product.name}</h4><span>${entry.qty} item(ns)</span></div><strong>${money.format(product.price * entry.qty)}</strong></article>`;
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
function initServiceFilters() {
  document.querySelectorAll(".service-list").forEach((list) => {
    const rows = Array.from(list.querySelectorAll(".service-row"));
    if (!rows.length) return;

    rows.forEach((row) => {
      if (!row.dataset.serviceCategory) {
        const pill = row.querySelector(".pill");
        row.dataset.serviceCategory = pill?.textContent.trim() || "Serviços";
      }
    });

    const categories = Array.from(new Set(rows.map((row) => row.dataset.serviceCategory).filter(Boolean)));
    if (categories.length < 2) return;

    let bar = list.previousElementSibling?.classList.contains("service-jump") ? list.previousElementSibling : null;
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "shell service-jump auto-service-filter";
      bar.setAttribute("aria-label", "Filtrar serviços");
      list.before(bar);
    }

    if (!bar.querySelector("[data-service-filter]")) {
      const labels = ["Todos", ...categories];
      bar.innerHTML = labels.map((label, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-service-filter="${label}">${label}</button>`).join("");
    }

    const filters = Array.from(bar.querySelectorAll("[data-service-filter]"));
    filters.forEach((button) => button.addEventListener("click", () => {
      const category = button.dataset.serviceFilter;
      filters.forEach((item) => item.classList.toggle("active", item === button));
      rows.forEach((row) => {
        row.hidden = category !== "Todos" && row.dataset.serviceCategory !== category;
      });
    }));
  });
}
function initGalleryFilters() {
  const filters = document.querySelectorAll("[data-gallery-filter]");
  const items = document.querySelectorAll("[data-gallery-category]");
  if (!filters.length || !items.length) return;
  filters.forEach((button) => button.addEventListener("click", () => {
    const category = button.dataset.galleryFilter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    items.forEach((item) => item.hidden = category !== "Todos" && item.dataset.galleryCategory !== category);
  }));
}
function enhanceMedia() {
  document.querySelectorAll("img:not([loading])").forEach((img) => { img.loading = "lazy"; img.decoding = "async"; });
  document.querySelectorAll("video").forEach((video) => { video.preload = "metadata"; });
}
function initMobileActionBar() {
  if (document.querySelector(".mobile-action-bar")) return;
  const bar = document.createElement("nav");
  bar.className = "mobile-action-bar";
  bar.setAttribute("aria-label", "Ações rápidas");
  bar.innerHTML = `<a href="${pagePath("servicos.html")}">Serviços</a><a href="${whatsappLink()}" target="_blank" rel="noopener">WhatsApp</a>`;
  document.body.appendChild(bar);
}
function closeMobileMenu() {
  navPanel?.classList.remove("open");
  menuToggle?.classList.remove("open");
  document.querySelectorAll(".nav-group.open").forEach((group) => group.classList.remove("open"));
  document.querySelector("[data-nav]")?.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}
function initNavPolish() {
  navPanel?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));
  document.addEventListener("click", (event) => {
    if (!navPanel?.classList.contains("open")) return;
    if (event.target.closest("[data-nav]")) return;
    closeMobileMenu();
  });
}
function readField(form, selector) {
  return form.querySelector(selector)?.value.trim() || "";
}
function initContactForm() {
  const form = document.querySelector('body[data-page="contato"] .form-card');
  if (!form) return;
  const send = form.querySelector(".btn");
  const submit = () => {
    const name = readField(form, 'input[type="text"]');
    const phone = readField(form, 'input[type="tel"]');
    const service = readField(form, "select");
    const message = readField(form, "textarea");
    const text = [
      "Olá, gostaria de agendar um atendimento no Salão Becker.",
      name && `Nome: ${name}`,
      phone && `Telefone: ${phone}`,
      service && `Serviço de interesse: ${service}`,
      message && `Mensagem: ${message}`,
    ].filter(Boolean).join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
  };
  form.addEventListener("submit", (event) => { event.preventDefault(); submit(); });
  send?.addEventListener("click", (event) => { event.preventDefault(); submit(); });
}
function initCheckoutConfirm() {
  const form = document.querySelector(".checkout-form");
  const button = form?.querySelector(".btn");
  if (!form || !button) return;
  button.addEventListener("click", () => {
    const totals = cartTotals();
    if (!state.cart.length) {
      openCart();
      return;
    }
    const orderLines = state.cart.map((entry) => {
      const product = byId(entry.id);
      return product ? `${entry.qty}x ${product.name} - ${money.format(product.price * entry.qty)}` : "";
    }).filter(Boolean);
    const text = [
      "Olá, gostaria de finalizar este pedido na Loja Becker:",
      ...orderLines,
      `Subtotal: ${money.format(totals.total)}`,
      "",
      `Nome: ${readField(form, 'input[type="text"]')}`,
      `Telefone: ${readField(form, 'input[type="tel"]')}`,
      `E-mail: ${readField(form, 'input[type="email"]')}`,
      `CEP: ${readField(form, "[data-zip]")}`,
      `Endereço: ${readField(form, 'input[placeholder="Rua, bairro, cidade"]')}`,
      `Número: ${readField(form, 'input[placeholder="123"]')}`,
      `Pagamento: ${form.querySelector("[data-payment].active")?.dataset.payment || "Pix"}`,
    ].filter((line) => line !== "").join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
  });
}
enhanceMedia(); initServiceFilters(); initGalleryFilters(); initMobileActionBar(); initNavPolish(); initContactForm(); initCheckoutConfirm(); renderCart(); renderShop(); renderProductPage(); renderCheckout();





