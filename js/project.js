document.addEventListener('DOMContentLoaded', () => {
    // Basic setup from main.js (year, mobile toggle)
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

    // Project parsing
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        window.location.href = 'index.html#projects';
        return;
    }

    renderProject(projectId);

    // Watch for language changes and re-render the content instantly
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                renderProject(projectId);
            }, 50); // wait for i18n.js to update local storage
        });
    });
});

function renderProject(id) {
    if (!id) return;
    
    // Fallback to ES if lang is not set
    const lang = localStorage.getItem('lang') || 'es';
    
    // portfolioTranslations comes from js/translations.js which is loaded before this script
    if (typeof portfolioTranslations === 'undefined') return;
    
    const data = portfolioTranslations[lang]?.projects?.[`${id}_detail`];
    
    if (!data) return; // Project data not found

    // Content Population
    document.getElementById('pd-title').textContent = data.title;
    document.getElementById('pd-role').textContent = data.role;
    document.getElementById('pd-overview').textContent = data.overview;
    document.getElementById('pd-challenge').textContent = data.challenge;

    // Tech Stack Generation
    const techContainer = document.getElementById('pd-tech');
    techContainer.innerHTML = ''; // Clear previous
    data.tech.forEach(t => {
        const span = document.createElement('div');
        span.className = 'skill-pill';
        span.textContent = t;
        techContainer.appendChild(span);
    });

    // Image Generation
    const gallery = document.getElementById('pd-gallery');
    gallery.innerHTML = '';
    
    // Cleanup old intervals/listeners if re-rendering via language swap
    if (window.carouselInterval) clearInterval(window.carouselInterval);
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    // Quick clone trick to clear any old event listeners
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    
    if (data.images && data.images.length > 0) {
        data.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = data.title;
            gallery.appendChild(img);
        });
        
        // Setup Carousel Logic if there's more than one image
        if (data.images.length > 1) {
            newPrevBtn.style.display = 'flex';
            newNextBtn.style.display = 'flex';
            
            const scrollAmount = () => gallery.clientWidth;
            
            const slideNext = () => {
                // Buffer to account for browser sub-pixel scrolling differences
                if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 5) {
                    gallery.scrollTo({ left: 0, behavior: 'smooth' }); // Loop back to start
                } else {
                    gallery.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
                }
            };
            
            const slidePrev = () => {
                if (gallery.scrollLeft <= 5) {
                    gallery.scrollTo({ left: gallery.scrollWidth, behavior: 'smooth' }); // Loop to end
                } else {
                    gallery.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
                }
            };

            newNextBtn.addEventListener('click', () => {
                slideNext();
                resetAutoplay();
            });
            
            newPrevBtn.addEventListener('click', () => {
                slidePrev();
                resetAutoplay();
            });
            
            const resetAutoplay = () => {
                clearInterval(window.carouselInterval);
                window.carouselInterval = setInterval(slideNext, 4000);
            };
            
            // Start autoplay slightly delayed so it doesn't snap instantly on load
            setTimeout(resetAutoplay, 100); 
        } else {
            newPrevBtn.style.display = 'none';
            newNextBtn.style.display = 'none';
        }
    }
}
