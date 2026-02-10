// ==============================
// PROJECT PAGE FADE-IN
// ==============================

(() => {
    // Solo correr en páginas de proyecto
    if (!document.body.classList.contains("page--project")) return;

    // Agregar clase cuando todo cargó
    window.addEventListener("load", () => {
        document.body.classList.add("is-loaded");
    });

    // Timeout de seguridad: si tarda más de 5 segundos, mostrar igual
    setTimeout(() => {
        document.body.classList.add("is-loaded");
    }, 5000);
})();