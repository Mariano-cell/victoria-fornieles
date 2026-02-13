// ==============================
// PROJECT PAGE — FADE-IN
// ==============================

(() => {
    if (!document.body.classList.contains("page--project")) return;

    window.addEventListener("load", () => {
        document.body.classList.add("is-loaded");

        // Safari fix: fuerza recálculo del ancho de project-stage
        // tras la carga de imágenes
        document.querySelectorAll('.project-img').forEach(img => {
            const stage = img.closest('.project-stage');
            if (!stage) return;
            stage.style.display = 'none';
            stage.offsetHeight;
            stage.style.display = '';
        });
    });
})();