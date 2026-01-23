(() => {
    const root = document.querySelector('[data-typewriter="logo"]');
    if (!root) return;

    const live = root.querySelector(".brand__live");
    const ghost = root.querySelector(".brand__ghost");

    // Fallback: si no está el markup esperado, salimos sin romper nada
    if (!live || !ghost) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
        // Mostrar todo sin animación
        live.innerHTML = ghost.innerHTML;
        return;
    }

    // Tomamos el HTML (incluye <br>) como fuente
    const fullHTML = ghost.innerHTML.trim();

    // Convertimos a "tokens" para escribir: texto + <br>
    // Estrategia: parsear nodos y construir una lista de piezas a imprimir.
    const temp = document.createElement("div");
    temp.innerHTML = fullHTML;

    const tokens = [];
    const walk = (node) => {
        node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                // guardamos cada caracter para el typewriter
                const chars = child.textContent.split("");
                chars.forEach((c) => tokens.push({ type: "char", value: c }));
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                const tag = child.tagName.toLowerCase();
                if (tag === "br") {
                    tokens.push({ type: "br" });
                } else {
                    // si en el futuro metés un <span> dentro del logo, lo mantenemos simple:
                    // lo tratamos como texto plano de ese elemento
                    const text = child.textContent.split("");
                    text.forEach((c) => tokens.push({ type: "char", value: c }));
                }
            }
        });
    };
    walk(temp);

    // Estado inicial
    live.innerHTML = "";
    live.style.opacity = "1";
    root.classList.add("is-typing");

    // Timing (ajustable)
    const baseDelay = 55;     // velocidad por caracter
    const lineBreakDelay = 220; // pausa extra en <br>
    const startDelay = 3000;   // pausa antes de empezar

    let i = 0;

    const tick = () => {
        if (i >= tokens.length) {
            root.classList.remove("is-typing");
            return;
        }

        const t = tokens[i];

        if (t.type === "br") {
            live.insertAdjacentHTML("beforeend", "<br>");
            i += 1;
            window.setTimeout(tick, lineBreakDelay);
            return;
        }

        // char
        live.insertAdjacentText("beforeend", t.value);
        i += 1;

        window.setTimeout(tick, baseDelay);
    };

    window.setTimeout(tick, startDelay);
})();
