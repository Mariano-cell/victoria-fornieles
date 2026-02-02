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
  };

  const close = () => {
    wrap.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  };

  const toggle = () => {
    const isOpen = wrap.classList.contains("is-open");
    isOpen ? close() : open();
  };

  // Exponemos close() para que otros módulos lo puedan usar (sin acoplarse a variables)
  wrap._closeHeaderEmail = close;

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

// ==============================
// COPY EMAIL TO CLIPBOARD
// ==============================
(() => {
  const copyBtn = document.querySelector(".header-email__copy");
  if (!copyBtn) return;

  const text = copyBtn.dataset.copy;
  const wrap = document.querySelector(".site-header__contact");
  const toast = document.querySelector(".copy-toast");

  let toastTimeout = null;

  const showToast = () => {
    if (!toast) return;

    toast.classList.add("is-visible");
    toast.setAttribute("aria-hidden", "false");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("is-visible");
      toast.setAttribute("aria-hidden", "true");
    }, 1200);
  };

  copyBtn.addEventListener("click", async (e) => {
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(text);
      copyBtn.classList.add("is-copied");

      // cerrar toggle
      if (wrap && typeof wrap._closeHeaderEmail === "function") {
        wrap._closeHeaderEmail();
      }

      // mostrar cartel
      showToast();

      // feedback interno
      setTimeout(() => {
        copyBtn.classList.remove("is-copied");
      }, 1200);
    } catch (err) {
      console.error("No se pudo copiar al portapapeles", err);
    }
  });
})();

// ==============================
// ESC => VOLVER AL HOME (solo proyectos)
// ==============================
(() => {
  // Solo correr en páginas de proyecto
  if (!document.body.classList.contains("page--project")) return;

  document.addEventListener("keyup", (e) => {
    if (e.key !== "Escape") return;

    window.location.href = "../index.html";
  });

})();
