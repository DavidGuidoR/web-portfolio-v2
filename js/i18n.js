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

async function fetchTranslations(lang) {
    try {
        const response = await fetch(`locales/${lang}.json`);
        if (!response.ok) throw new Error('Network response was not ok');
        const translations = await response.json();
        return translations;
    } catch (error) {
        console.error("Could not load translations", error);
        return null; // Fallback
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

        if (value) {
            el.innerHTML = value;
        }
    });
}

async function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLangUI();
    const translations = await fetchTranslations(lang);
    applyTranslations(translations);
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
