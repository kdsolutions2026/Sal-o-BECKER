const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const submenuToggles = document.querySelectorAll(".submenu-toggle");

function syncNav() {
  nav?.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", syncNav, { passive: true });
syncNav();

menuToggle?.addEventListener("click", () => {
  const open = navPanel.classList.toggle("open");
  menuToggle.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
});

submenuToggles.forEach((button) => {
  button.addEventListener("click", () => {
    if (!window.matchMedia("(max-width: 1060px)").matches) return;
    button.closest(".nav-group")?.classList.toggle("open");
  });
});

document.querySelectorAll(".reveal").forEach((el) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("visible");
        observer.disconnect();
      }
    },
    { threshold: 0.16 }
  );
  observer.observe(el);
});

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const lightboxClose = document.querySelector(".lightbox button");

document.querySelectorAll("[data-lightbox]").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (!img || !lightbox || !lightboxImg) return;
    lightboxImg.src = img.src.replace(/w=\d+/, "w=1800");
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("open");
  lightboxImg.removeAttribute("src");
  document.body.style.overflow = "";
}

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("loadeddata", () => video.classList.add("ready"), { once: true });
});
