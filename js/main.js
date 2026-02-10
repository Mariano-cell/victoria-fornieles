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
// AJUSTAR PADDING-TOP DEL GRID + SCROLL SNAP SELECTIVO (solo home)
// ==============================
(() => {
  // Solo correr en la home
  if (!document.body.classList.contains("page--home")) return;

  const grid = document.querySelector(".work-grid");
  if (!grid) return;

  const adjustGridPadding = () => {
    const card = document.querySelector(".work-card");
    if (!card || !grid) return;

    const cardHeight = card.offsetHeight;
    const headerHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--header-h")
    );
    const gridGapY = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--grid-gap-y")
    );

    // Detectar si estamos en mobile (2 filas) o desktop (1 fila)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const rowsToShow = isMobile ? 2 : 1;
    
    // Altura total: (card × filas) + (gap × espacios entre filas)
    const totalContentHeight = (cardHeight * rowsToShow) + (gridGapY * (rowsToShow - 1));

    const paddingTop = Math.max(
      0,
      window.innerHeight - headerHeight - totalContentHeight
    );

    grid.style.paddingTop = `${paddingTop}px`;
  };

  const assignScrollSnapPoints = () => {
    const cards = Array.from(grid.querySelectorAll(".work-card"));
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Remover clases anteriores
    cards.forEach(card => card.classList.remove("snap-point"));

    if (isMobile) {
      // Mobile: snap en cards 4, 6, 8, 10... (índices 3, 5, 7, 9...)
      // Primera fila inferior = card 4 (índice 3)
      // Luego cada 2 cards (una fila completa en grid de 2 cols)
      cards.forEach((card, index) => {
        if (index === 3 || (index > 3 && (index - 3) % 2 === 0)) {
          card.classList.add("snap-point");
        }
      });
    } else {
      // Desktop: snap en cards 1, 4, 7, 10... (índices 0, 3, 6, 9...)
      // Cada 3 cards (una fila completa en grid de 3 cols)
      cards.forEach((card, index) => {
        if (index % 3 === 0) {
          card.classList.add("snap-point");
        }
      });
    }
  };

  const rebuild = () => {
    adjustGridPadding();
    assignScrollSnapPoints();
  };

  // Guardar el breakpoint anterior para detectar cambios
  let wasMobile = window.matchMedia("(max-width: 768px)").matches;

  // Ejecutar inmediatamente al cargar (antes de animaciones)
  // DOMContentLoaded se dispara antes que 'load' y antes de is-ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", rebuild);
  } else {
    rebuild(); // Ya está listo
  }

  // También ejecutar en 'load' por si las imágenes cambian dimensiones
  window.addEventListener("load", rebuild);

  // Ejecutar al hacer resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      
      // Detectar si hubo cambio de breakpoint
      if (isMobile !== wasMobile) {
        // Desactivar scroll snap temporalmente
        document.documentElement.style.scrollSnapType = "none";
        
        rebuild();
        
        // Esperar a que las imágenes se ajusten al nuevo ancho
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Recalcular después de que el grid se haya redimensionado
            rebuild();
            
            // Si estamos arriba de todo (viewport inicial), quedarse arriba
            if (window.scrollY < window.innerHeight) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            
            // Reactivar scroll snap después de la transición
            setTimeout(() => {
              document.documentElement.style.scrollSnapType = "y mandatory";
            }, 800);
          });
        });
        
        wasMobile = isMobile;
      } else {
        // Si no cambió el breakpoint, rebuild normal
        rebuild();
      }
    }, 150);
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