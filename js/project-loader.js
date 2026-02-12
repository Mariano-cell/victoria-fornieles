// ==============================
// PROJECT PAGE — FADE-IN
// ==============================

(() => {
    if (!document.body.classList.contains("page--project")) return;

    window.addEventListener("load", () => {
        document.body.classList.add("is-loaded");
    });
})();