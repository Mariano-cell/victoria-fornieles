(() => {
    const itemsContainer = document.querySelector("#work-list-items");
    if (!itemsContainer) return;

    let lastCols = null;

    const getCols = () => {
        const raw = getComputedStyle(document.documentElement).getPropertyValue("--work-cols").trim();
        const n = parseInt(raw, 10);
        return Number.isFinite(n) && n > 0 ? n : 3;
    };

    const buildSteps = () => {
        const cols = getCols();
        if (cols === lastCols && itemsContainer.dataset.built === "true") return;
        lastCols = cols;

        // Tomamos todas las cards actuales (articles) en orden
        const cards = Array.from(itemsContainer.querySelectorAll(".work-card"));

        // Limpia cualquier estructura previa (si ya se construyó)
        // y reconstruye dentro del mismo section work-list
        const workListSection = itemsContainer.closest(".work-list");
        if (!workListSection) return;

        // Remueve steps previos si existieran (rebuild en resize)
        workListSection.querySelectorAll(".work-step").forEach((n) => n.remove());

        // Marcamos el container como “fuente” y lo vaciamos (pero lo dejamos en DOM)
        itemsContainer.innerHTML = "";

        // Crea steps: cada step contiene 1 fila (N cards)
        for (let i = 0; i < cards.length; i += cols) {
            const step = document.createElement("div");
            step.className = "work-step";

            const row = document.createElement("div");
            row.className = "work-step__row";

            cards.slice(i, i + cols).forEach((card) => row.appendChild(card));

            step.appendChild(row);
            workListSection.appendChild(step);
        }

        itemsContainer.dataset.built = "true";
    };

    // Build inicial
    buildSteps();

    // Rebuild si cambia el breakpoint / columnas (resize)
    let resizeTimer = null;
    window.addEventListener("resize", () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(buildSteps, 150);
    });
})();
