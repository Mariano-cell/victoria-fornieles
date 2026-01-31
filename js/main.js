window.addEventListener("load", () => {
  document.body.classList.add("is-ready");
});

// ==============================
// HEADER EMAIL TOGGLE
// ==============================
(() => {
  const wrap = document.querySelector(".site-header__contact");
  if (!wrap) return;

  const btn = wrap.querySelector(".contact-toggle");
  const panel = wrap.querySelector("#header-email");
  if (!btn || !panel) return;

  const open = () => {
    wrap.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  };

  const close = () => {
    wrap.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  };

  const toggle = () => {
    const isOpen = wrap.classList.contains("is-open");
    isOpen ? close() : open();
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  // Click afuera => cerrar
  document.addEventListener("click", (e) => {
    if (!wrap.classList.contains("is-open")) return;
    if (!wrap.contains(e.target)) close();
  });

  // Escape => cerrar
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
