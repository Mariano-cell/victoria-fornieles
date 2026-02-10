// ==============================
// HOME ANIMATIONS
// ==============================

(() => {
    // Solo correr en la home
    if (!document.body.classList.contains("page--home")) return;

    // Esperar a que la página esté lista (cuando se agrega la clase is-ready)
    const startAnimations = () => {
        const cards = document.querySelectorAll(".work-card");
        if (cards.length === 0) return;

        // Agregar clase de animación a las primeras 6 cards
        // Cards 1 y 4 tienen el mismo delay (delay-3)
        cards[0]?.classList.add("animate-in", "animate-delay-3");
        cards[3]?.classList.add("animate-in", "animate-delay-3");

        // Cards 2 y 5 tienen el mismo delay (delay-2)
        cards[1]?.classList.add("animate-in", "animate-delay-2");
        cards[4]?.classList.add("animate-in", "animate-delay-2");

        // Cards 3 y 6 tienen el mismo delay (delay-1)
        cards[2]?.classList.add("animate-in", "animate-delay-1");
        cards[5]?.classList.add("animate-in", "animate-delay-1");

        // SAFARI FIX: Forzar reflow para que Safari reconozca el estado inicial
        // antes de que is-ready dispare las animaciones
        if (cards[0]) {
            void cards[0].offsetHeight;
        }
    };

    // Ejecutar cuando el body tenga la clase is-ready
    // Usamos MutationObserver para detectar cuando se agrega la clase
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === "class") {
                if (document.body.classList.contains("is-ready")) {
                    startAnimations();
                    observer.disconnect(); // Dejar de observar después de ejecutar
                }
            }
        });
    });

    // Observar cambios en el atributo class del body
    observer.observe(document.body, { attributes: true });

    // Por si acaso ya tiene la clase cuando se ejecuta este script
    if (document.body.classList.contains("is-ready")) {
        startAnimations();
    }
})();