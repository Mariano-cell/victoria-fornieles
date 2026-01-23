(() => {
    const viewer = document.querySelector(".project-viewer[data-project]");
    if (!viewer) return;

    const projectKey = viewer.dataset.project; // ej: "bambu", "tomo", etc.

    const btnPrev = viewer.querySelector(".project-nav--prev");
    const btnNext = viewer.querySelector(".project-nav--next");
    const img = viewer.querySelector(".project-img");
    const caption = viewer.querySelector(".project-caption");

    // 1) Catálogo central de slides por proyecto
    //    (vos acá solo agregás arrays; no tocás más lógica)
    const PROJECT_SLIDES = {
        bambu: [
            { src: "../assets/img/projects/bambu/poster-x3.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/aplicacion.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/raw-tote-bag-mockup.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/tarjeta-personal.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/banner-2.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/bambu-manual-marca-vol3-25.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/bambu-manual-marca-vol3-33.jpg", caption: "", alt: "" }
        ],

        tomo: [
            { src: "../assets/img/projects/tomo/a4-13.png", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/free-eco-bag.png", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-20.png", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-10.png", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-15.png", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-44.png", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-45.png", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-57.png", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-13.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-14.jpg", caption: "", alt: "" }
        ],

        diagonal: [
            { src: "../assets/img/projects/diagonal/bag-hanging.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/free-rectangle-sign.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/paper-bag-mockup.jpg", caption: "", alt: "" },

            { src: "../assets/img/projects/diagonal/pd03.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd05.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd07.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd09.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd16.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd18.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd19.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd21.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd23.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd25.jpg", caption: "", alt: "" }
        ],
        cora: [
            { src: "../assets/img/projects/cora/agenda-cora.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc00334.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc00412.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc00817.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06627.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06645.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06671.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06680.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06769.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06804.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06811.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06822.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06907.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06923.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06926.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06958.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06963.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06976.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc06993.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc07121.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc07292.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc07323.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc07659.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc07663.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc07842.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc08097.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc08186.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc09152.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/dsc09223.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/ig-cora-2.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/ig-cora.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/img-8069.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/sin-titulo-02.jpg", caption: "", alt: "" }
        ],
        // proyecto 05 / FOTOS
        analogicas: [
            { src: "../assets/img/projects/analogicas/6.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/11.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/0158-aa029.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/670aa027.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/2341-aa008.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/2341-aa009.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/2341-aa034.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/2341-aa035.jpg", caption: "", alt: "" },

            { src: "../assets/img/projects/analogicas/000003640034.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000011900015.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012640001.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012640014.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012640016.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012640027.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650001.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650004.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650005.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650006.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650013.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650031.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650032.jpg", caption: "", alt: "" },

            { src: "../assets/img/projects/analogicas/fotos-viaje-01.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-02.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-03.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-06.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-07.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-23.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-24.jpg", caption: "", alt: "" },

            { src: "../assets/img/projects/analogicas/vicky-fornieles1.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/vicky-fornieles2.jpg", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/vickyfornieles7.jpg", caption: "", alt: "" }
        ],



    };

    const slides = PROJECT_SLIDES[projectKey];

    // Si te olvidás de cargar el array, fallá “bien” (sin romper la página)
    if (!Array.isArray(slides) || slides.length === 0) {
        // opcional: esconder nav si no hay galería definida
        btnPrev.disabled = true;
        btnNext.disabled = true;
        if (caption) caption.textContent = "";
        return;
    }

    let index = 0;

    const preload = (i) => {
        if (i < 0 || i >= slides.length) return;
        const im = new Image();
        im.decoding = "async";
        im.src = slides[i].src;
    };

    const render = () => {
        const s = slides[index];

        btnPrev.disabled = index === 0;
        btnNext.disabled = index === slides.length - 1;

        img.src = s.src;
        img.alt = s.alt || "";
        if (caption) caption.textContent = s.caption || "";

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

    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") btnPrev.click();
        if (e.key === "ArrowRight") btnNext.click();
    });

    render();
})();
