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
            { src: "../assets/img/projects/bambu/nuevo-formato/01.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/nuevo-formato/02.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/nuevo-formato/03.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/nuevo-formato/04.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/nuevo-formato/05.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/nuevo-formato/06.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/bambu/nuevo-formato/07.webp", category: "BRANDING", caption: "", alt: "" }
        ],

        tomo: [
            { src: "../assets/img/projects/tomo/nuevo-formato/01.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/02.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/03.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/04.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/05.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/06.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/07.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/08.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/09.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/nuevo-formato/10.webp", category: "BRANDING", caption: "", alt: "" }
        ],


        diagonal: [
            { src: "../assets/img/projects/diagonal/nuevo-formato/01.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/02.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/03.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/04.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/05.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/06.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/07.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/08.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/09.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/10.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/11.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/12.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/diagonal/nuevo-formato/13.webp", category: "BRANDING", caption: "", alt: "" }
        ],


        cora: [
            { src: "../assets/img/projects/cora/nuevo-formato/01.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/02.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/03.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/04.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/05.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/06.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/07.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/08.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/09.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/10.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/11.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/12.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/13.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/14.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/15.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/16.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/17.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/18.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/19.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/20.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/21.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/22.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/23.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/24.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/25.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/26.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/27.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/28.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/29.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/30.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/31.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/32.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" },
            { src: "../assets/img/projects/cora/nuevo-formato/33.webp", category: "DISEÑO Y FOTOGRAFÍA", caption: "", alt: "" }
        ],

        analogicas: [
            { src: "../assets/img/projects/analogicas/nuevo-formato/01.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/02.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/03.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/04.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/05.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/06.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/07.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/08.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/09.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/10.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/11.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/12.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/13.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/14.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/15.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/16.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/17.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/18.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/19.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/20.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/21.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/22.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/23.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/24.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/25.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/26.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/27.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/28.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/29.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/30.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/analogicas/nuevo-formato/31.webp", category: "", caption: "", alt: "" }
        ],

        "linea-22": [
            { src: "../assets/img/projects/linea-22/nuevo-formato/01.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/02.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/03.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/04.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/05.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/06.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/07.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/08.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/09.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/10.webp", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/nuevo-formato/11.webp", category: "BRANDING", caption: "", alt: "" }
        ],


        vermuteo: [
            { src: "../assets/img/projects/vermuteo/nuevo-formato/01.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/nuevo-formato/02.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/nuevo-formato/03.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/nuevo-formato/04.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/nuevo-formato/05.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/nuevo-formato/06.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/nuevo-formato/07.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/nuevo-formato/08.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/nuevo-formato/09.webp", category: "DISEÑO DE LOGO", caption: "", alt: "" }
        ],


        "artes-tapa": [
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/10.webp", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/07.webp", category: "DREIMONDS", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/01.webp", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/08.webp", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/05.webp", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/02.webp", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/04.webp", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/03.webp", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/nuevo-formato/06.webp", category: "MAGNESIO 1864", caption: "", alt: "" },

        ],


        escaneos: [
            { src: "../assets/img/projects/escaneos/nuevo-formato/01.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/02.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/03.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/04.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/05.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/06.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/07.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/08.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/09.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/10.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/11.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/12.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/13.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/14.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/15.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/16.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/17.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/18.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/19.webp", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/escaneos/nuevo-formato/20.webp", category: "", caption: "", alt: "" }
        ],

        "digitales-alteradas": [
            { src: "../assets/img/projects/fotos/nuevo-formato/01.webp", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/nuevo-formato/02.webp", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/nuevo-formato/03.webp", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/nuevo-formato/04.webp", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/nuevo-formato/05.webp", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/nuevo-formato/06.webp", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/nuevo-formato/07.webp", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" }
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

        // Swipe detection directo sobre el stage
        let touchStartX = 0;
        stage.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        stage.addEventListener("touchend", (e) => {
            const delta = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(delta) > 40) {
                if (delta > 0 && index < slides.length - 1) {
                    index++;
                } else if (delta < 0 && index > 0) {
                    index--;
                }
                scrollToIndex(index);
                preloadAround(index);
                updateUI();
            }
        }, { passive: true });

        // Actualizar index y UI al scrollear (scroll nativo o programático)
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