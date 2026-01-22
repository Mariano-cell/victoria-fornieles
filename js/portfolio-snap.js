/**
 * Portfolio Snap System
 * Transforma un grid único en "steps" con scroll snap
 * Cada step muestra una fila pegada al borde inferior del viewport
 */

(() => {
    const gridContainer = document.querySelector('#work-grid');
    const portfolioSection = document.querySelector('.work-portfolio');

    if (!gridContainer || !portfolioSection) return;

    let lastCols = null;
    let firstStepElement = null;

    // Obtener número de columnas desde CSS
    const getCols = () => {
        const raw = getComputedStyle(document.documentElement)
            .getPropertyValue('--work-cols')
            .trim();
        const n = parseInt(raw, 10);
        return Number.isFinite(n) && n > 0 ? n : 3;
    };

    // Calcular padding-top dinámico SOLO para el primer step
    const adjustFirstStepSpacing = () => {
        if (!firstStepElement) return;

        const row = firstStepElement.querySelector('.work-step__row');
        if (!row) return;

        const headerHeight = parseInt(
            getComputedStyle(document.documentElement)
                .getPropertyValue('--header-h')
                .trim()
        ) || 84;

        const paddingBottom = parseInt(
            getComputedStyle(document.documentElement)
                .getPropertyValue('--step-pad-bottom')
                .trim()
        ) || 12;

        const availableHeight = window.innerHeight - headerHeight;
        const rowHeight = row.offsetHeight;
        const remainingSpace = availableHeight - rowHeight - paddingBottom;
        const newPaddingTop = Math.max(0, remainingSpace);

        firstStepElement.style.paddingTop = `${newPaddingTop}px`;
    };

    // Construir los steps a partir del grid
    const buildSteps = () => {
        const cols = getCols();

        // Solo reconstruir si cambió el número de columnas
        if (cols === lastCols && portfolioSection.dataset.built === 'true') {
            return;
        }

        lastCols = cols;

        // Tomar todas las cards del grid original
        const cards = Array.from(gridContainer.querySelectorAll('.work-card'));

        // Limpiar steps previos
        portfolioSection.querySelectorAll('.work-step').forEach(el => el.remove());

        // Crear steps: cada uno con una fila
        for (let i = 0; i < cards.length; i += cols) {
            const step = document.createElement('div');
            step.className = 'work-step';

            const row = document.createElement('div');
            row.className = 'work-step__row';

            // Añadir las cards de esta fila
            cards.slice(i, i + cols).forEach(card => row.appendChild(card));

            step.appendChild(row);
            portfolioSection.appendChild(step);

            // Guardar referencia al primer step
            if (i === 0) {
                firstStepElement = step;
            }
        }

        portfolioSection.dataset.built = 'true';

        // Ajustar spacing del primer step después de construir
        requestAnimationFrame(() => {
            adjustFirstStepSpacing();
        });
    };

    // Ejecutar al cargar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildSteps);
    } else {
        buildSteps();
    }

    // Reajustar spacing cuando las imágenes terminen de cargar
    window.addEventListener('load', () => {
        adjustFirstStepSpacing();
    });

    // Rebuild en resize (con debounce)
    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            buildSteps();
            adjustFirstStepSpacing();
        }, 150);
    });
})();