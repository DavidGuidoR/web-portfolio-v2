document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = '';
                navLinks.style.flexDirection = '';
                navLinks.style.position = '';
                navLinks.style.top = '';
                navLinks.style.left = '';
                navLinks.style.width = '';
                navLinks.style.backgroundColor = '';
                navLinks.style.padding = '';
                navLinks.style.alignItems = '';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--bg-main)';
                navLinks.style.padding = 'var(--spacing-lg) 0';
                navLinks.style.alignItems = 'center';
            }
        });
    }

    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (window.innerWidth <= 992) {
                    navLinks.style.display = '';
                }
            }
        });
    });

    // Animate scroll indicators only when their section is active
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const indicator = entry.target.querySelector('.scroll-indicator');
            if (indicator) {
                if (entry.isIntersecting) {
                    indicator.classList.add('animating');
                } else {
                    indicator.classList.remove('animating');
                }
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(sec => observer.observe(sec));
});
