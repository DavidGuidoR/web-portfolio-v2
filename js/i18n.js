const validLangs = ['en', 'es'];
let currentLang = localStorage.getItem('lang') || 'es';

if (!validLangs.includes(currentLang)) {
    currentLang = 'es';
}

const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const currentLangSpan = document.getElementById('current-lang');

function updateLangUI() {
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLang.toUpperCase();
    }
}

function applyTranslations(translations) {
    if (!translations) return;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let value = translations;
        for (const key of keys) {
            value = value[key] || '';
            if (!value) break;
        }

        // Apply if value exists
        if (value) {
            el.innerHTML = value;
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLangUI();

    // Direct from the translations object (avoids CORS)
    if (typeof portfolioTranslations !== 'undefined') {
        const translations = portfolioTranslations[lang];
        applyTranslations(translations);
        
        // Update resume link dynamically
        const resumeBtn = document.getElementById('resume-btn');
        if (resumeBtn && translations.nav && translations.nav.resumeLink) {
            resumeBtn.href = translations.nav.resumeLink;
        }
    } else {
        console.error("No translations found! Ensure translations.js is loaded.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial load
    setLanguage(currentLang);

    // Dropdown toggle
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            if (langDropdown.classList.contains('show')) {
                langDropdown.classList.remove('show');
            }
        });
    }

    // Language option click
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
