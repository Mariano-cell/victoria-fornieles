// ==============================
// PAGE LOADER — ENTRADA
// ==============================
// HOME primera visita     → loader hasta window.load
// HOME desde cache        → sin loader, is-ready inmediato
// PROYECTO primera visita → loader hasta que carga la imagen principal
// PROYECTO desde cache    → sin loader, is-ready inmediato

(() => {
    const isHome    = document.body.classList.contains("page--home");
    const isProject = document.body.classList.contains("page--project");

    // ── CACHE ────────────────────────────────────────────────────────
    const pageKey        = "visited:" + window.location.pathname;
    const alreadyVisited = sessionStorage.getItem(pageKey) === "1";
    sessionStorage.setItem(pageKey, "1");

    // ── HELPERS ──────────────────────────────────────────────────────
    const hideLoader = () => {
        const loader = document.querySelector(".page-loader");
        if (!loader) {
            document.body.classList.add("is-ready");
            return;
        }
        loader.classList.add("is-hidden");
        setTimeout(() => {
            loader.remove();
            document.body.classList.add("is-ready");
        }, 300);
    };

    const skipLoader = () => {
        const loader = document.querySelector(".page-loader");
        if (loader) loader.remove();
        document.body.classList.add("is-ready");
    };

    // ── TIMEOUT DE SEGURIDAD ─────────────────────────────────────────
    const safetyTimeout = setTimeout(hideLoader, 10000);

    const done = () => {
        clearTimeout(safetyTimeout);
        hideLoader();
    };

    // ── LÓGICA ───────────────────────────────────────────────────────

    if (alreadyVisited) {
        skipLoader();
        return;
    }

    if (isHome) {
        window.addEventListener("load", () => setTimeout(done, 100));
        return;
    }

    if (isProject) {
        // project-gallery.js corre después de este script y reemplaza img.src.
        // Esperamos DOMContentLoaded + un tick para leer el src real.
        const waitForImage = () => {
            setTimeout(() => {
                const img = document.querySelector(".project-img");
                if (!img || !img.src) { done(); return; }
                if (img.complete && img.naturalWidth > 0) { done(); return; }
                img.addEventListener("load",  done, { once: true });
                img.addEventListener("error", done, { once: true });
            }, 0);
        };

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", waitForImage);
        } else {
            waitForImage();
        }
        return;
    }

    // Fallback
    window.addEventListener("load", () => setTimeout(done, 100));

})();