// ==============================
// PAGE LOADER
// ==============================

(() => {
  const loader = document.querySelector(".page-loader");
  if (!loader) return;

  const hideLoader = () => {
    loader.classList.add("is-hidden");
    
    // Remover del DOM después de la transición (800ms)
    setTimeout(() => {
      loader.remove();
    }, 800);
  };

  // Ocultar cuando todo cargó
  // Safari necesita un pequeño delay extra para asegurar que todo está renderizado
  window.addEventListener("load", () => {
    setTimeout(hideLoader, 1500);
  });

  // Timeout de seguridad: si tarda más de 10 segundos, ocultar igual
  setTimeout(hideLoader, 10000);
})();