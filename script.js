document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    hamburger.classList.remove('active');
                }

                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Background Change on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Simple Intersection Observer for Fade-in Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // --- Modal Advertisement Logic ---
    const modal = document.getElementById('ad-modal');
    const closeBtn = document.querySelector('.close-btn');
    let pendingNavigation = null;

    const showModal = (targetUrl = null) => {
        // Prevent showing if already shown/dismissed in this session
        if (sessionStorage.getItem('ad-shown')) {
            if (targetUrl) window.location.href = targetUrl;
            return;
        }

        // Modal is already showing
        if (modal.classList.contains('show')) return;

        pendingNavigation = targetUrl;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        sessionStorage.setItem('ad-shown', 'true');
    };

    const closeModal = () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';

        // If there was a pending navigation, execute it after a short delay
        if (pendingNavigation) {
            const url = pendingNavigation;
            pendingNavigation = null;
            window.location.href = url;
        }
    };

    // Show modal after 3 seconds
    setTimeout(() => showModal(), 3000);

    // Also show modal when user scrolls 20% down
    let scrollTriggered = false;
    window.addEventListener('scroll', () => {
        if (scrollTriggered) return;

        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 20) {
            showModal();
            scrollTriggered = true;
        }
    });

    // Interstitial Logic: Show modal before navigating via links
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (!anchor) return;

        // Ignore modal's own buttons and internal anchor links that we handle elsewhere
        if (anchor.classList.contains('btn-discord') ||
            anchor.classList.contains('close-btn') ||
            anchor.getAttribute('href').startsWith('#')) {
            return;
        }

        // Show modal and prevent crossing over yet
        e.preventDefault();
        showModal(anchor.href);
    });

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // --- Special Rainbow Feature Logic ---
    const specialBtn = document.getElementById('special-btn');
    if (specialBtn) {
        specialBtn.addEventListener('click', () => {
            document.body.classList.toggle('rainbow-active');
        });
    }
});
