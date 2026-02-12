(() => {
    const viewer = document.querySelector(".project-viewer[data-project]");
    if (!viewer) return;

    const projectKey = viewer.dataset.project;

    const btnPrev = viewer.querySelector(".project-nav--prev");
    const btnNext = viewer.querySelector(".project-nav--next");

    // ==============================
    // CATÁLOGO DE SLIDES
    // (solo editás estos arrays, no tocás más lógica)
    // ==============================
    const PROJECT_SLIDES = {
        bambu: [
            { src: "../assets/img/projects/bambu/poster-x3.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/aplicacion.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/raw-tote-bag-mockup.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/tarjeta-personal.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/banner-2.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/bambu-manual-marca-vol3-25.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/bambu-manual-marca-vol3-33.jpg", category: "BRANDING", caption: "", alt: "" }
        ],

        tomo: [
            { src: "../assets/img/projects/tomo/portada-tomo.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-13.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/free-eco-bag.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-20.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-10.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-15.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-44.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-45.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-57.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-13.jpg", category: "BRANDING", caption: "", alt: "" },
        ],

        diagonal: [
            { src: "../assets/img/projects/diagonal/bag-hanging.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/free-rectangle-sign.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/paper-bag-mockup.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd03.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd05.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd07.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd09.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd16.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd18.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd19.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd21.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd23.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/pd25.jpg", category: "BRANDING", caption: "", alt: "" }
        ],

        cora: [
            { src: "../assets/img/projects/cora/agenda-cora.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc00334.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc00412.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc00817.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06627.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06645.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06671.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06680.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06769.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06804.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06811.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06822.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06907.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06923.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06926.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06958.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06963.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06976.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06993.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07121.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07292.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07323.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07659.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07663.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07842.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc08097.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc08186.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc09152.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc09223.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/ig-cora-2.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/ig-cora.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/img-8069.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/sin-titulo-02.jpg", category: "DISEÑO Y FOTOGRAFÍA", alt: "" }
        ],

        analogicas: [
            { src: "../assets/img/projects/analogicas/6.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/11.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/0158-aa029.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/670aa027.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/2341-aa008.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/2341-aa009.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/2341-aa034.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/2341-aa035.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000003640034.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000011900015.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012640001.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012640014.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012640016.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012640027.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650001.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650004.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650005.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650006.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650013.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650031.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/000012650032.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-01.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-02.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-03.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-06.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-07.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-23.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/fotos-viaje-24.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/vicky-fornieles1.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/vicky-fornieles2.jpg", category: "", caption: "", alt: "" },
        ],

        "linea-22": [
            { src: "../assets/img/projects/linea-22/07.jpg", category: "BRANDING", caption: "", alt: "" },
        ],

        vermuteo: [
            { src: "../assets/img/projects/vermuteo/01.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/02.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/03.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/04.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/05.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/06.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/07.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/08.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/09.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" }
        ],

        "artes-tapa": [
            { src: "../assets/img/projects/artes-de-tapa/10.jpg", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/07.jpg", category: "DREIMONDS", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/01.jpg", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/08.jpg", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/05.png", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/02.jpg", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/04.jpg", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/03.jpg", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/06.jpg", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/09.jpg", category: "MAGNESIO 1864", caption: "", alt: "" }
        ],

        escaneos: [
            { src: "../assets/img/projects/escaneos/01.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/02.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/03.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/04.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/05.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/06.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/07.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/08.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/09.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/10.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/11.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/12.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/13.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/14.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/15.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/16.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/17.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/18.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/19.JPG", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/20.JPG", category: "", caption: "", alt: "" }
        ],

        "digitales-alteradas": [
            { src: "../assets/img/projects/fotos/01.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/02.png", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/03.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/04.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/05.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/06.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" }
        ],
    };

    // ==============================
    // SETUP
    // ==============================
    const slides = PROJECT_SLIDES[projectKey];

    if (!Array.isArray(slides) || slides.length === 0) {
        btnPrev.disabled = true;
        btnNext.disabled = true;
        return;
    }

    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
    const stage = viewer.querySelector(".project-stage");
    const track = viewer.querySelector(".project-viewer__track") || viewer;
    const category = viewer.querySelector(".project-stage .project-category");
    const categoryMobile = viewer.querySelector(".project-category--mobile");
    const caption = viewer.querySelector(".project-caption");

    let index = 0;

    // ==============================
    // PRELOAD: carga imágenes cercanas
    // ==============================
    const preloadAround = (centerIndex) => {
        for (let i = centerIndex - 2; i <= centerIndex + 2; i++) {
            if (i < 0 || i >= slides.length) continue;
            const figure = stage.children[i];
            if (!figure) continue;
            const img = figure.querySelector(".project-img");
            if (img && !img.src && img.dataset.src) {
                img.src = img.dataset.src;
                delete img.dataset.src;
            }
        }
    };

    // ==============================
    // UPDATE UI: botones y textos
    // ==============================
    const updateUI = () => {
        btnPrev.disabled = index === 0;
        btnNext.disabled = index === slides.length - 1;
        const cat = slides[index].category || "";
        if (category) category.textContent = cat;
        if (categoryMobile) categoryMobile.textContent = cat;
        if (caption) caption.textContent = slides[index].caption || "";
    };

    // ==============================
    // MOBILE: construir carrusel con un <figure> por slide
    // ==============================
    const buildCarousel = () => {
        stage.innerHTML = "";

        slides.forEach((s, i) => {
            const figure = document.createElement("figure");
            figure.className = "project-figure";

            const media = document.createElement("div");
            media.className = "project-media";

            const img = document.createElement("img");
            img.className = "project-img";
            img.alt = s.alt || "";
            img.decoding = "async";

            // Solo la primera imagen carga de entrada, el resto es lazy
            if (i === 0) {
                img.src = s.src;
                img.style.opacity = "1";
            } else {
                img.dataset.src = s.src;
                img.style.opacity = "0"; // fade in al entrar al viewport
            }

            media.appendChild(img);
            figure.appendChild(media);
            stage.appendChild(figure);
        });
    };

    // ==============================
    // MOBILE: scroll programático al slide
    // ==============================
    const scrollToIndex = (i) => {
        const figure = stage.children[i];
        if (!figure) return;
        stage.scrollTo({ left: figure.offsetLeft, behavior: "smooth" });
    };

    // ==============================
    // DESKTOP: fade entre fotos (un solo <img> en el DOM)
    // ==============================
    const renderDesktop = () => {
        const s = slides[index];
        const img = stage.querySelector(".project-img");
        if (!img) return;

        preloadAround(index);
        updateUI();

        img.style.opacity = "0";

        const newImg = new Image();
        newImg.src = s.src;

        const swap = () => {
            img.src = s.src;
            img.alt = s.alt || "";
            img.style.opacity = "1";
        };

        if (newImg.complete) {
            setTimeout(swap, 80);
        } else {
            const timeout = setTimeout(swap, 1500);
            newImg.onload = () => { clearTimeout(timeout); swap(); };
        }
    };

    // ==============================
    // INIT
    // ==============================
    if (isMobile()) {
        buildCarousel();
        preloadAround(0);
        updateUI();

        // Actualizar index y UI al scrollear
        stage.addEventListener("scroll", () => {
            const slideWidth = stage.offsetWidth;
            const newIndex = Math.round(stage.scrollLeft / slideWidth);
            if (newIndex !== index) {
                index = newIndex;
                preloadAround(index);
                updateUI();

                // Fade in de la imagen entrante
                const enteringFigure = stage.children[index];
                if (enteringFigure) {
                    const enteringImg = enteringFigure.querySelector(".project-img");
                    if (enteringImg) {
                        enteringImg.style.opacity = "1";
                    }
                }
            }
        }, { passive: true });

    } else {
        // Desktop: usar el <img> que ya existe en el HTML
        const img = stage.querySelector(".project-img");
        if (img) img.src = slides[0].src;
        preloadAround(0);
        updateUI();
    }

    // ==============================
    // BOTONES
    // ==============================
    btnPrev.addEventListener("click", () => {
        if (index <= 0) return;
        index--;
        if (isMobile()) {
            scrollToIndex(index);
        } else {
            renderDesktop();
        }
    });

    btnNext.addEventListener("click", () => {
        if (index >= slides.length - 1) return;
        index++;
        if (isMobile()) {
            scrollToIndex(index);
        } else {
            renderDesktop();
        }
    });

    // ==============================
    // TECLADO (desktop)
    // ==============================
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") btnPrev.click();
        if (e.key === "ArrowRight") btnNext.click();
    });

})();