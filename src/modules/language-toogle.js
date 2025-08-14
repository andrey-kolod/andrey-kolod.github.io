import { language } from "../index.js";

export function languageToogler() {
    function handleResize() {
        const sectionWidth = document.querySelector('.topbar__container');
        const sideBar = document.querySelector('.header__side-bar');
        const existingSideBarLinks = document.querySelector('.topbar__language_links_side-bar');
        const existingTopBarLinks = document.querySelector('.topbar__language_links');
        if (existingSideBarLinks) existingSideBarLinks.remove();
        if (existingTopBarLinks) existingTopBarLinks.remove();
        if (window.innerWidth <= 768) {
            const languageLinks = document.createElement('li');
            languageLinks.classList.add('topbar__language_links_side-bar');
            setLanguageButton(language, languageLinks);
            sideBar.append(languageLinks);
        } else {
            const languageLinks = document.createElement('div');
            languageLinks.classList.add('topbar__language_links');
            setLanguageButton(language, languageLinks);
            sectionWidth.prepend(languageLinks);
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
}


function setLanguageButton(language, languageLinks) {
    languageLinks.innerHTML = `
        <img class="topbar__language_link rus${language === 'ru' ? ' language_active' : ''}" src="/images/icons/rus.svg" alt="Трехцветный флаг России">
        <img class="topbar__language_link eng${language === 'en' ? ' language_active' : ''}" src="/images/icons/usa.svg" alt="Звездно-полосатый флаг США">
    `;
}
