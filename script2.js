// Scroll progress indicator
(function() {
    const progress = document.getElementById('scrollProgress');
    if (!progress) return;

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progress.style.width = pct + '%';
    }

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateProgress();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    updateProgress();
})();
