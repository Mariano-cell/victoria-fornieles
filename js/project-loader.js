// ==============================
// PROJECT PAGE — LOADER + FADE-IN
// ==============================
// Este archivo se encarga de:
// 1. Inyectar el .page-loader en páginas de proyecto
//    (para no tener que agregarlo a mano en cada .html)
// 2. Agregar is-loaded al body cuando todo esté listo
//    (loader.js se encarga de cuándo ocultarlo)

(() => {
    if (!document.body.classList.contains("page--project")) return;

    // ── INYECTAR LOADER ──────────────────────────────────────────────
    // Verificar si ya existe en el HTML (por si se agregó manualmente)
    if (!document.querySelector(".page-loader")) {
        const loader = document.createElement("div");
        loader.className = "page-loader";
        loader.setAttribute("aria-label", "Cargando página");

        // Construir la ruta al logo relativa a /projects/
        // Los proyectos están en /projects/, los assets en /assets/
        const img = document.createElement("img");
        img.className = "page-loader__image";
        img.src = "../assets/logo/favicon-v2.png";
        img.alt = "";

        loader.appendChild(img);

        // Insertar como primer hijo del body
        document.body.insertBefore(loader, document.body.firstChild);
    }

    // ── AGREGAR CSS DEL LOADER ───────────────────────────────────────
    // Verificar si ya está linkeado en el <head>
    const loaderCssAlreadyLoaded = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .some(link => link.href.includes("loader.css"));

    if (!loaderCssAlreadyLoaded) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../css/loader.css";
        document.head.insertBefore(link, document.head.firstChild);
    }

    // ── IS-LOADED ────────────────────────────────────────────────────
    // Marcar el body cuando todo cargó (respaldo para animaciones CSS)
    window.addEventListener("load", () => {
        document.body.classList.add("is-loaded");
    });

    setTimeout(() => {
        document.body.classList.add("is-loaded");
    }, 5000);
})();