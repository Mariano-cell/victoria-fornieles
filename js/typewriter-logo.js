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

    // --- Tokenización del contenido (chars + <br>) ---
    const fullHTML = ghost.innerHTML.trim();
    const temp = document.createElement("div");
    temp.innerHTML = fullHTML;

    const tokens = [];
    const walk = (node) => {
        node.childNodes.forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                child.textContent.split("").forEach((c) =>
                    tokens.push({ type: "char", value: c })
                );
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                const tag = child.tagName.toLowerCase();
                if (tag === "br") {
                    tokens.push({ type: "br" });
                } else {
                    child.textContent.split("").forEach((c) =>
                        tokens.push({ type: "char", value: c })
                    );
                }
            }
        });
    };
    walk(temp);

    // --- Timing ---
    const baseDelay = 55;        // velocidad por letra
    const lineBreakDelay = 220;  // pausa extra en <br>
    const afterLoadDelay = 3000; // delay deseado después de load

    let i = 0;

    const tick = () => {
        if (i >= tokens.length) {
            root.classList.remove("is-typing");
            return;
        }

        const t = tokens[i];

        if (t.type === "br") {
            live.insertAdjacentHTML("beforeend", "<br>");
            i++;
            window.setTimeout(tick, lineBreakDelay);
            return;
        }

        live.insertAdjacentText("beforeend", t.value);
        i++;
        window.setTimeout(tick, baseDelay);
    };

    const startTypewriter = () => {
        live.innerHTML = "";
        live.style.opacity = "1";
        root.classList.add("is-typing");
        i = 0;
        tick();
    };

    // --- Gate principal: load + delay ---
    window.addEventListener("load", () => {
        window.setTimeout(startTypewriter, afterLoadDelay);
    });
})();
