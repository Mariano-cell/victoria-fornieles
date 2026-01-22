(() => {
    const viewer = document.querySelector(".project-viewer[data-project='bambu']");
    if (!viewer) return;

    const btnPrev = viewer.querySelector(".project-nav--prev");
    const btnNext = viewer.querySelector(".project-nav--next");
    const img = viewer.querySelector(".project-img");
    const caption = viewer.querySelector(".project-caption");

    // Lista de imágenes del proyecto (rápido + controlable + preload)
    const slides = [
        {
            src: "../assets/img/projects/bambu/poster-x3.jpg",
            caption: "",
            alt: ""
        },
        {
            src: "../assets/img/projects/bambu/aplicacion.jpg",
            caption: "",
            alt: ""
        },
        {
            src: "../assets/img/projects/bambu/raw-tote-bag-mockup.jpg",
            caption: "",
            alt: ""
        },
        {
            src: "../assets/img/projects/bambu/tarjeta-personal.jpg",
            caption: "",
            alt: ""
        },
        {
            src: "../assets/img/projects/bambu/banner-2.jpg",
            caption: "",
            alt: ""
        },
        {
            src: "../assets/img/projects/bambu/bambu-manual-marca-vol3-25.jpg",
            caption: "",
            alt: ""
        },
        {
            src: "../assets/img/projects/bambu/bambu-manual-marca-vol3-33.jpg",
            caption: "",
            alt: ""
        }
    ];


    let index = 0;

    const preload = (i) => {
        if (i < 0 || i >= slides.length) return;
        const im = new Image();
        im.decoding = "async";
        im.src = slides[i].src;
    };

    const render = async () => {
        const s = slides[index];

        btnPrev.disabled = index === 0;
        btnNext.disabled = index === slides.length - 1;

        // Swap rápido: primero set src; el decode ayuda a evitar parpadeos en algunos casos
        img.src = s.src;
        img.alt = s.alt || "";
        caption.textContent = s.caption || "";

        // Preload vecinos para navegación instantánea
        preload(index - 1);
        preload(index + 1);
    };

    btnPrev.addEventListener("click", () => {
        if (index > 0) {
            index--;
            render();
        }
    });

    btnNext.addEventListener("click", () => {
        if (index < slides.length - 1) {
            index++;
            render();
        }
    });

    // Opcional: teclado
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") btnPrev.click();
        if (e.key === "ArrowRight") btnNext.click();
    });

    render();
})();
