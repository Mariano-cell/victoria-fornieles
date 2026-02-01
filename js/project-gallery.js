(() => {
    const viewer = document.querySelector(".project-viewer[data-project]");
    if (!viewer) return;

    const projectKey = viewer.dataset.project; // ej: "bambu", "tomo", etc.

    const btnPrev = viewer.querySelector(".project-nav--prev");
    const btnNext = viewer.querySelector(".project-nav--next");
    const img = viewer.querySelector(".project-img");

    // opcionales (dependen del HTML de cada proyecto)
    const caption = viewer.querySelector(".project-caption");
    const category = viewer.querySelector(".project-category");

    // 1) Catálogo central de slides por proyecto
    //    (vos acá solo agregás arrays; no tocás más lógica)
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
            { src: "../assets/img/projects/tomo/a4-13.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/free-eco-bag.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-20.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-10.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-15.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-44.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-45.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/frame-57.png", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-13.jpg", category: "BRANDING", caption: "", alt: "" },
            { src: "../assets/img/projects/tomo/a4-14.jpg", category: "BRANDING", caption: "", alt: "" }
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
            { src: "../assets/img/projects/cora/agenda-cora.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc00334.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc00412.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc00817.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06627.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06645.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06671.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06680.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06769.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06804.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06811.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06822.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06907.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06923.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06926.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06958.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06963.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06976.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc06993.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07121.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07292.jpg", category: "BRANDING", alt: "" },
            { src: "../assets/img/projects/cora/dsc07323.jpg", category: "BRANDING", alt: "" },
            { src: "../assets/img/projects/cora/dsc07659.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07663.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc07842.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc08097.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc08186.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc09152.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/dsc09223.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/ig-cora-2.jpg", category: "BRANDING", alt: "" },
            { src: "../assets/img/projects/cora/ig-cora.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/img-8069.jpg", category: "FOTOGRAFÍA", alt: "" },
            { src: "../assets/img/projects/cora/sin-titulo-02.jpg", category: "FOTOGRAFÍA", alt: "" }
        ],

        // proyecto 05 / FOTOS
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
            { src: "../assets/img/projects/analogicas/vickyfornieles7.jpg", category: "", caption: "", alt: "" }
        ],

        linea22: [
            { src: "../assets/img/projects/linea-22/01.png", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/02.png", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/03.png", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/04.png", category: "", caption: "", alt: "" },

            { src: "../assets/img/projects/linea-22/05.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/06.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/07.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/08.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/09.jpg", category: "", caption: "", alt: "" },
            { src: "../assets/img/projects/linea-22/10.jpg", category: "", caption: "", alt: "" }
        ],

        vermuteo: [
            { src: "../assets/img/projects/vermuteo/01.jpg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/02.jpg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/03.jpg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/04.jpg", category: "DISEÑO DE LOGO", caption: "", alt: "" },

            { src: "../assets/img/projects/vermuteo/05.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/06.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/07.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/08.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" },
            { src: "../assets/img/projects/vermuteo/09.jpeg", category: "DISEÑO DE LOGO", caption: "", alt: "" }
        ],

        "artes-tapa": [
            // Ahora cada slide puede tener "category"
            { src: "../assets/img/projects/artes-de-tapa/01.jpg", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/02.jpg", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/03.jpg", category: "PARAISO", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/04.jpg", category: "MAGNESIO 1864", caption: "", alt: "" },

            { src: "../assets/img/projects/artes-de-tapa/05.png", category: "PARAISO", caption: "", alt: "" },

            { src: "../assets/img/projects/artes-de-tapa/06.jpg", category: "MAGNESIO 1864", caption: "", alt: "" },
            // FIX: tenías "../assets/img/projects/projects/..."
            { src: "../assets/img/projects/artes-de-tapa/07.jpg", category: "DREIMONDS", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/08.jpg", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/09.jpg", category: "MAGNESIO 1864", caption: "", alt: "" },
            { src: "../assets/img/projects/artes-de-tapa/10.jpg", category: "MAGNESIO 1864", caption: "", alt: "" }
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

        fotos: [
            { src: "../assets/img/projects/fotos/01.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/02.png", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/03.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/04.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/05.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/06.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" },
            { src: "../assets/img/projects/fotos/07.jpg", category: "FOTOS DIGITALES PROCESADAS EN PHOTOSHOP", caption: "", alt: "" }
        ],
    };

    const slides = PROJECT_SLIDES[projectKey];

    // Si te olvidás de cargar el array, fallá “bien” (sin romper la página)
    if (!Array.isArray(slides) || slides.length === 0) {
        btnPrev.disabled = true;
        btnNext.disabled = true;
        if (caption) caption.textContent = "";
        if (category) category.textContent = "";
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

        // ✅ NUEVO: category sincronizada con la imagen
        // Fallback: si no seteaste category en el slide, muestra vacío
        if (category) category.textContent = s.category || "";

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
