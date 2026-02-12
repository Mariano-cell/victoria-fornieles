// ==============================
// PAGE LOADER — SOLO HOME
// ==============================
// HOME primera visita  → loader hasta window.load
// HOME desde cache     → sin loader, is-ready inmediato
// Cualquier otra página → is-ready inmediato, sin loader

(() => {
    const isHome = document.body.classList.contains("page--home");

    // Si no es home, marcar ready y salir
    if (!isHome) {
        document.body.classList.add("is-ready");
        return;
    }

    // ── CACHE ────────────────────────────────────────────────────────
    const pageKey = "visited:home";
    const alreadyVisited = sessionStorage.getItem(pageKey) === "1";
    sessionStorage.setItem(pageKey, "1");

    if (alreadyVisited) {
        const loader = document.querySelector(".page-loader");
        if (loader) loader.remove();
        document.body.classList.add("is-ready");
        return;
    }

    // ── PRIMERA VISITA AL HOME ───────────────────────────────────────
    const loader = document.querySelector(".page-loader");

    const hideLoader = () => {
        if (!loader) { document.body.classList.add("is-ready"); return; }
        loader.classList.add("is-hidden");
        setTimeout(() => {
            loader.remove();
            document.body.classList.add("is-ready");
        }, 300);
    };

    const safetyTimeout = setTimeout(hideLoader, 10000);
    const done = () => { clearTimeout(safetyTimeout); hideLoader(); };

    if (document.readyState === "complete") {
        done();
    } else {
        window.addEventListener("load", done, { once: true });
    }

})();