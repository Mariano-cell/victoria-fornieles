/**
 * Portfolio Snap System
 * Transforma un grid único en "steps" con scroll snap
 * Desktop: 1 fila por step
 * Mobile: 2 filas por step
 */

(() => {
    const gridContainer = document.querySelector("#work-grid");
    const portfolioSection = document.querySelector(".work-portfolio");

    if (!gridContainer || !portfolioSection) return;

    let lastSignature = null;
    let firstStepElement = null;

    const readCSSInt = (varName, fallback) => {
        const raw = getComputedStyle(document.documentElement)
            .getPropertyValue(varName)
            .trim();
        const n = parseInt(raw, 10);
        return Number.isFinite(n) && n > 0 ? n : fallback;
    };

    // Obtener número de columnas desde CSS
    const getCols = () => readCSSInt("--work-cols", 3);

    // Obtener filas por step desde CSS (desktop=1, mobile=2)
    const getRowsPerStep = () => {
        const raw = getComputedStyle(document.documentElement)
            .getPropertyValue("--work-rows-per-step")
            .trim();
        const n = parseInt(raw, 10);
        return Number.isFinite(n) && n > 0 ? n : 1;
    };

    // Calcular padding-top dinámico SOLO para el primer step
    const adjustFirstStepSpacing = () => {
        if (!firstStepElement) return;

        const row = firstStepElement.querySelector(".work-step__row");
        if (!row) return;

        const headerHeight = readCSSInt("--header-h", 84);
        const paddingBottom = readCSSInt("--step-pad-bottom", 12);

        const availableHeight = window.innerHeight - headerHeight;
        const rowHeight = row.offsetHeight;
        const remainingSpace = availableHeight - rowHeight - paddingBottom;
        const newPaddingTop = Math.max(0, remainingSpace);

        firstStepElement.style.paddingTop = `${newPaddingTop}px`;
    };

    const buildSteps = () => {
        const cols = getCols();
        const rowsPerStep = getRowsPerStep();
        const itemsPerStep = cols * rowsPerStep;

        if (!Number.isFinite(itemsPerStep) || itemsPerStep <= 0) return;

        const signature = `${cols}x${rowsPerStep}`;
        const hasSteps = !!portfolioSection.querySelector(".work-step");

        // Si no cambió la configuración, solo recalculá spacing
        if (
            signature === lastSignature &&
            portfolioSection.dataset.built === "true" &&
            hasSteps
        ) {
            adjustFirstStepSpacing();
            return;
        }

        lastSignature = signature;

        // ✅ CLAVE: agarrar las cards desde TODO el portfolio, no solo desde #work-grid
        // Así funciona tanto la primera carga como los resize (cuando las cards ya están dentro de steps).
        const cards = Array.from(portfolioSection.querySelectorAll(".work-card"));
        if (cards.length === 0) return;

        // Borramos steps viejos (aunque eso “saque” las cards del DOM, nosotros ya tenemos las referencias)
        portfolioSection.querySelectorAll(".work-step").forEach((el) => el.remove());
        firstStepElement = null;

        for (let i = 0; i < cards.length; i += itemsPerStep) {
            const step = document.createElement("div");
            step.className = "work-step";

            const row = document.createElement("div");
            row.className = "work-step__row";

            cards.slice(i, i + itemsPerStep).forEach((card) => row.appendChild(card));

            step.appendChild(row);
            portfolioSection.appendChild(step);

            if (i === 0) firstStepElement = step;
        }

        portfolioSection.dataset.built = "true";

        requestAnimationFrame(() => {
            adjustFirstStepSpacing();
        });
    };

    // Ejecutar al cargar
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", buildSteps);
    } else {
        buildSteps();
    }

    // Reajustar spacing cuando las imágenes terminen de cargar
    window.addEventListener("load", () => {
        adjustFirstStepSpacing();
    });

    // Rebuild en resize (con debounce)
    let resizeTimer = null;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            buildSteps();
            adjustFirstStepSpacing();
        }, 150);
    });
})();
