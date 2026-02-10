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
    window.addEventListener("load", hideLoader);
  
    // Timeout de seguridad: si tarda más de 10 segundos, ocultar igual
    setTimeout(hideLoader, 10000);
  })();