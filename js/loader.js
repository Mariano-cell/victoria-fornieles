// ==============================
// PAGE LOADER
// ==============================

(() => {
    const loader = document.querySelector(".page-loader");
    if (!loader) return;

    const hideLoader = () => {
        // 1. Iniciar fade-out del loader
        loader.classList.add("is-hidden");

        // 2. Después del fade-out (800ms), esperar 500ms adicionales
        setTimeout(() => {
            loader.remove();

            // 3. Recién ahora disparar is-ready para mostrar contenido
            setTimeout(() => {
                document.body.classList.add("is-ready");
            }, 500);
        }, 800);
    };

    // Esperar a que todo cargue
    window.addEventListener("load", () => {
        // Delay mínimo después de load para asegurar que terminó el ciclo de animación
        setTimeout(hideLoader, 100);
    });

    // Timeout de seguridad: si tarda más de 10 segundos, ocultar igual
    setTimeout(hideLoader, 10000);
})();