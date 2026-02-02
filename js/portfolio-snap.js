/**
 * Portfolio Snap System
 * Transforma un grid único en "steps" con scroll snap
 * Desktop: 1 fila por step
 * Mobile: 2 filas por step
 *
 * Fix iOS Safari:
 * - Fallback estable para cols si --work-cols todavía no está resuelto
 * - Rebuild extra post-load (Safari ajusta viewport / barras luego del primer render)
 * - Resize + orientationchange con debounce
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

    // ✅ Fallback estable: si --work-cols no está listo, inferimos por breakpoint real
    const getCols = () => {
        const raw = getComputedStyle(document.documentElement)
            .getPropertyValue("--work-cols")
            .trim();
        const n = parseInt(raw, 10);
        if (Number.isFinite(n) && n > 0) return n;

        return window.matchMedia("(max-width: 768px)").matches ? 2 : 3;
    };

    // Filas por step desde CSS (desktop=1, mobile=2)
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

        // Agarrar las cards desde TODO el portfolio (funciona en primera carga + resize)
        const cards = Array.from(portfolioSection.querySelectorAll(".work-card"));
        if (cards.length === 0) return;

        // Borrar steps viejos (las cards se reinsertan)
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

    // Helpers
    const rebuild = () => {
        buildSteps();
        adjustFirstStepSpacing();
    };

    const debounce = (fn, ms = 150) => {
        let t = null;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn(...args), ms);
        };
    };

    // Ejecutar al cargar
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", rebuild);
    } else {
        rebuild();
    }

    // ✅ iOS Safari: segundo/tercer pase cuando termina de estabilizar viewport
    window.addEventListener("load", () => {
        // 1) inmediatamente
        rebuild();
        // 2) después de un tick
        setTimeout(rebuild, 50);
        // 3) después de que Safari ajuste barras/viewport
        setTimeout(rebuild, 250);
    });

    // ✅ Resize/orientationchange con debounce (Safari dispara eventos extra)
    const onResize = debounce(() => rebuild(), 150);
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", () => setTimeout(rebuild, 250));
})();
