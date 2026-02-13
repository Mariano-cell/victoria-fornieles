// ==============================
// PROJECT PAGE — FADE-IN
// ==============================

(() => {
    if (!document.body.classList.contains("page--project")) return;

    window.addEventListener("load", () => {
        document.body.classList.add("is-loaded");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const stage = entry.target.closest('.project-stage');
            if (!stage) return;
            stage.style.width = 'auto';
            stage.offsetHeight;
            stage.style.width = '';
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.project-img').forEach(img => observer.observe(img));

})();