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

// Mobile nav toggle (hamburger)
(function() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    function closeMenu() {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
    }

    function openMenu() {
        links.classList.add('is-open');
        toggle.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('nav-open');
    }

    toggle.addEventListener('click', function() {
        if (links.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when any link is clicked (so anchor navigation works smoothly on mobile)
    links.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') closeMenu();
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && links.classList.contains('is-open')) closeMenu();
    });
})();
