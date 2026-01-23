(() => {
    const root = document.querySelector('[data-typewriter="logo"]');
    if (!root) return;

    const live = root.querySelector(".brand__live");
    const ghost = root.querySelector(".brand__ghost");
    if (!live || !ghost) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
        live.innerHTML = ghost.innerHTML;
        live.style.opacity = "1";
        return;
    }

    const fullHTML = ghost.innerHTML.trim();

    // Tokens: chars + <br>
    const temp = document.createElement("div");
    temp.innerHTML = fullHTML;

    const tokens = [];
    const walk = (node) => {
        node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                child.textContent.split("").forEach((c) => tokens.push({ type: "char", value: c }));
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                const tag = child.tagName.toLowerCase();
                if (tag === "br") tokens.push({ type: "br" });
                else child.textContent.split("").forEach((c) => tokens.push({ type: "char", value: c }));
            }
        });
    };
    walk(temp);

    // Timing
    const baseDelay = 55;
    const lineBreakDelay = 220;

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

        live.insertAdjacentText("beforeend", t.value);
        i += 1;
        window.setTimeout(tick, baseDelay);
    };

    const startTypewriter = () => {
        // estado inicial justo antes de arrancar
        live.innerHTML = "";
        live.style.opacity = "1";
        root.classList.add("is-typing");

        i = 0;
        tick();
    };

    // Gate: esperar a que termine de cargar todo (incluye imágenes)
    window.addEventListener("load", startTypewriter);
})();
