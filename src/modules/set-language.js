import { translations } from "./translations.js";

export let language;

export function getLocalLanguage() {
    // Проверка сохраненного языка в localStorage
    const savedLanguage = localStorage.getItem('language');
    const supportedLanguages = ['en', 'ru']; 
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
        language = savedLanguage;
        setLanguage(savedLanguage);
        return;
    }
    // Определение языка браузера
    const userLanguage = (navigator.language || navigator.userLanguage).split('-')[0];
    // Выбор языка
    language = supportedLanguages.includes(userLanguage) ? userLanguage : 'en';
    localStorage.setItem('language', language);
    setLanguage(language);
}


// Функция установки языка
function setLanguage(language) {
    if (!language) return; // Проверка на null/undefined
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
    setTopbarLanguauge(language);
    setHeaderLanguauge(language);
    setHeroLanguauge(language);
    setAboutLanguauge(language);
    setBackgroundLanguauge(language);
    setSkillsLanguauge(language);
    setProjectsLanguauge(language);
    setLifeLanguauge(language);
    setModalLanguauge(language);
    setFooterLanguauge(language);
}

// Функция замены ссылок в тексте
function replaceLinks(text, links = {}) {
    for (const [key, url] of Object.entries(links)) {
        text = text.replace(`[${key}]`, `<a href="${url}" class="text_link" target="_blank">${key}</a>`);
    }
    text = replaceBreaks(text);
    text = replaceBold(text);
    return text;
}

function replaceBreaks(text) {
    if (!text || typeof text !== 'string') return text;
        text = text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
    return text;
}

function replaceBold (text) {
    if (!text || typeof text !== 'string') return text;
    text = `<p>${text}</p>`;
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text_strong">$1</strong>');
    return text;
}

function toLowercaseText(text) {
    if (!text || typeof text !== 'string') return text;
    text = text.replace(/--([^\-]+)--/g, '<span class="to-lowercase_text">$1</span>');
    return text;
}

function setTopbarLanguauge(language) {
    document.querySelectorAll('.tr-email').forEach(el => el.textContent = translations.topbar.email);
    document.querySelectorAll('.tr-phone').forEach(el => el.textContent = translations.topbar.phone);
}

function setHeaderLanguauge(language) {
    document.querySelector('.tr-logo_name').textContent = translations.header.logo;
    document.querySelector('.tr_logo_qa').textContent = translations.header.qa;
    document.querySelector('.tr_header_about').textContent = translations.header.about[language];
    document.querySelector('.tr_header_background').textContent = translations.header.background[language];
    document.querySelector('.tr_header_skills').textContent = translations.header.skills[language];
    document.querySelector('.tr_header_projects').textContent = translations.header.projects[language];
    document.querySelector('.tr_header_life').textContent = translations.header.life[language];
}

function setHeroLanguauge(language) {
    document.querySelector('.tr_hero_i').innerHTML = toLowercaseText(translations.hero.me[language]);
    document.querySelector('.tr_hero_name').textContent = translations.hero.name[language];
    document.querySelector('.tr_hero_speciality').innerHTML = toLowercaseText(translations.hero.speciality[language]);
    document.querySelector('.tr_hero_subtitle').textContent = translations.hero.subtitle[language];
    document.querySelector('.tr_hero_addition').textContent = translations.hero.additional[language];
    document.querySelector('.tr_hero_button').textContent = translations.hero.button[language];
    document.querySelector('.tr_hero-img_alt').setAttribute('alt', translations.hero.img_alt[language]);
}

function setAboutLanguauge(language) {
    document.querySelector('.tr_about_title').textContent = translations.about.title[language];
    document.querySelector('.tr_about_story').innerHTML = replaceLinks(translations.about.subtitle[language]);
}

function setBackgroundLanguauge(language) {
    // Опыт 
    document.querySelector('.tr_background_experience_title').textContent = translations.background.experence.title[language];
    // job-4
    document.querySelector('.tr_background_job-4_title').textContent = translations.background.experence.job_4.title[language];
    document.querySelector('.tr_background_job-4_establishment').textContent = translations.background.experence.job_4.establishment;
    document.querySelector('.tr_background_job-4_period').textContent = translations.background.experence.job_4.period[language];
    document.querySelector('.tr_background_job-4_story').textContent = translations.background.experence.job_4.story[language];
    document.querySelector('.tr_background_job-4_story').innerHTML = replaceLinks(translations.background.experence.job_4.story[language].text, translations.background.experence.job_4.story[language].links);
    // job-3
    document.querySelector('.tr_background_job-3_title').textContent = translations.background.experence.job_3.title[language];
    document.querySelector('.tr_background_job-3_establishment').textContent = translations.background.experence.job_3.establishment;
    document.querySelector('.tr_background_job-3_period').textContent = translations.background.experence.job_3.period[language];
    document.querySelector('.tr_background_job-3_story').innerHTML = replaceLinks(translations.background.experence.job_3.story[language].text, translations.background.experence.job_3.story[language].links);
    // job-2
    document.querySelector('.tr_background_job-2_title').textContent = translations.background.experence.job_2.title[language];
    document.querySelector('.tr_background_job-2_establishment').textContent = translations.background.experence.job_2.establishment[language];
    document.querySelector('.tr_background_job-2_period').textContent = translations.background.experence.job_2.period[language];
    document.querySelector('.tr_background_job-2_story').textContent = translations.background.experence.job_2.story[language];
    // job-1
    document.querySelector('.tr_background_job-1_title').textContent = translations.background.experence.job_1.title[language];
    document.querySelector('.tr_background_job-1_establishment').textContent = translations.background.experence.job_1.establishment[language];
    document.querySelector('.tr_background_job-1_period').textContent = translations.background.experence.job_1.period[language];
    document.querySelector('.tr_background_job-1_story').textContent = translations.background.experence.job_1.story[language];
    document.querySelector('.tr_experience_alt').setAttribute('alt', translations.background.experence.experience_alt[language]);
    // Образование
    document.querySelector('.tr_background_education_title').textContent = translations.background.education.title[language];
    // Образование 3
    document.querySelector('.tr_background_edu-3_title').textContent = translations.background.education.speciality_3.title[language];
    document.querySelector('.tr_background_edu-3_establishment').textContent = translations.background.education.speciality_3.establishment[language];
    document.querySelector('.tr_background_edu-3_period').textContent = translations.background.education.speciality_3.end_date;
    document.querySelector('.tr_background_edu-3_story').textContent = translations.background.education.speciality_3.story[language];
    // Образование 2
    document.querySelector('.tr_background_edu-2_title').textContent = translations.background.education.speciality_2.title[language];
    document.querySelector('.tr_background_edu-2_establishment').textContent = translations.background.education.speciality_2.establishment[language];
    document.querySelector('.tr_background_edu-2_period').textContent = translations.background.education.speciality_2.end_date;
    document.querySelector('.tr_background_edu-2_story').textContent = translations.background.education.speciality_2.story[language];
    // Образование 1
    document.querySelector('.tr_background_edu-1_title').textContent = translations.background.education.speciality_1.title[language];
    document.querySelector('.tr_background_edu-1_establishment').textContent = translations.background.education.speciality_1.establishment[language];
    document.querySelector('.tr_background_edu-1_period').textContent = translations.background.education.speciality_1.end_date;
    document.querySelector('.tr_background_edu-1_story').textContent = translations.background.education.speciality_1.story[language];
    document.querySelector('.tr_education_alt').setAttribute('alt', translations.background.education.education_alt[language]);
    // CV
    document.querySelector('.tr_cv_link').textContent = translations.background.cv.link[language];
    document.querySelector('.tr_cv-download_link').textContent = translations.background.cv.download[language];
    document.querySelector('.tr_cv-hh_link').textContent = translations.background.cv.hh[language];
    
}

function setSkillsLanguauge(language) {
    document.querySelector('.tr_skills_title').textContent = translations.skills.title[language];
    // JS
    document.querySelector('.tr_skills_js').textContent = translations.skills.js.title;
    document.querySelector('.tr_skills_js_story').textContent = translations.skills.js.story[language];
    // CSS
    document.querySelector('.tr_skills_css').textContent = translations.skills.css.title;
    document.querySelector('.tr_skills_css_story').textContent = translations.skills.css.story[language];
    // HTML
    document.querySelector('.tr_skills_html').textContent = translations.skills.html.title;
    document.querySelector('.tr_skills_html_story').textContent = translations.skills.html.story[language];
    // API
    document.querySelector('.tr_skills_api').textContent = translations.skills.api.title;
    document.querySelector('.tr_skills_api_story').textContent = translations.skills.api.story[language];
    // Playwrghit
    document.querySelector('.tr_skills_playwright').textContent = translations.skills.pw.title;
    document.querySelector('.tr_skills_playwright_story').textContent = translations.skills.pw.story[language];
    // Linux console
    document.querySelector('.tr_skills_console').textContent = translations.skills.linux.title[language];
    document.querySelector('.tr_skills_console_story').textContent = translations.skills.linux.story[language];
    // Functional testing
    document.querySelector('.tr_skills_functional').textContent = translations.skills.func_test.title[language];
    document.querySelector('.tr_skills_functional_story').textContent = translations.skills.func_test.story[language];
    // GUI testing
    document.querySelector('.tr_skills_gui').textContent = translations.skills.test_gui.title[language];
    document.querySelector('.tr_skills_gui_story').textContent = translations.skills.test_gui.story[language];
    // Git
    document.querySelector('.tr_skills_git').textContent = translations.skills.git.title;
    document.querySelector('.tr_skills_git_story').textContent = translations.skills.git.story[language];
    // Postman
    document.querySelector('.tr_skills_postman').textContent = translations.skills.postman.title;
    document.querySelector('.tr_skills_postman_story').textContent = translations.skills.postman.story[language];
    // Charles
    document.querySelector('.tr_skills_charles').textContent = translations.skills.charles.title;
    document.querySelector('.tr_skills_charles_story').textContent = translations.skills.charles.story[language];
    // TTMS
    document.querySelector('.tr_skills_ttms').textContent = translations.skills.ttms.title[language];
    document.querySelector('.tr_skills_ttms_story').textContent = translations.skills.ttms.story[language];
    // Testing theory
    document.querySelector('.tr_skills_theory').textContent = translations.skills.test_theory.title[language];
    document.querySelector('.tr_skills_theory_story').textContent = translations.skills.test_theory.story[language];
    // SQL
    document.querySelector('.tr_skills_sql').textContent = translations.skills.sql.title;
    document.querySelector('.tr_skills_sql_story').textContent = translations.skills.sql.story[language];
    // Figma
    document.querySelector('.tr_skills_figma').textContent = translations.skills.figma.title;
    document.querySelector('.tr_skills_figma_story').textContent = translations.skills.figma.story[language];
    // DocsVision
    document.querySelector('.tr_skills_docsvision').textContent = translations.skills.dv.title;
    document.querySelector('.tr_skills_docsvision_story').textContent = translations.skills.dv.story[language];
    // AI
    document.querySelector('.tr_skills_ai').textContent = translations.skills.ai.title[language];
    document.querySelector('.tr_skills_ai_story').textContent = translations.skills.ai.story[language];
    // English
    document.querySelector('.tr_skills_eng').textContent = translations.skills.eng.title[language];
    document.querySelector('.tr_skills_eng_story').textContent = translations.skills.eng.story[language];
    // Soft skills
    document.querySelector('.tr_skills_soft').textContent = translations.skills.soft_skills.title[language];
    document.querySelector('.tr_skills_soft_story').textContent = translations.skills.soft_skills.story[language];

    document.querySelector('.tr_skills_open').textContent = translations.skills.open_button[language];
}

function setProjectsLanguauge(language) {
    document.querySelector('.tr_projects_title').textContent = translations.projects.title[language];
    // My website
    document.querySelector('.tr_project_ak').textContent = translations.projects.my_web.name[language];
    document.querySelector('.tr_project_ak_story').textContent = translations.projects.my_web.description[language];
    document.querySelector('.tr_project_ak_link').textContent = translations.projects.my_web.git_link[language];

    document.querySelector('.tr_project_ak_alt').setAttribute('alt', translations.projects.my_web.ak_alt[language]);
    // Russia Place
    document.querySelector('.tr_project_mesto').textContent = translations.projects.rus_place.name[language];
    document.querySelector('.tr_project_mesto_story').textContent = translations.projects.rus_place.description[language];
    document.querySelector('.tr_project_mesto_git-link').textContent = translations.projects.rus_place.git_link[language];
    document.querySelector('.tr_project_mesto_link').textContent = translations.projects.rus_place.project_link[language];

    document.querySelector('.tr_project_mesto_alt').setAttribute('alt', translations.projects.rus_place.mesto_alt[language]);
    // Test documentation
    document.querySelector('.tr_project_documentation').textContent = translations.projects.test_doc.name[language];
    document.querySelector('.tr_project_documentation_story').textContent = translations.projects.test_doc.description[language];
    document.querySelector('.tr_project_documentation_google-link').textContent = translations.projects.test_doc.google_link;
    document.querySelector('.tr_project_documentation_yandex-link').textContent = translations.projects.test_doc.yandex_link[language];
    document.querySelector('.tr_project_documentation_git-link').textContent = translations.projects.test_doc.git_link;

    document.querySelector('.tr_test-doc_alt').setAttribute('alt', translations.projects.test_doc.test_doc_alt[language]);
}

function setLifeLanguauge(language) {
    document.querySelector('.tr_life_title').textContent = translations.life.title[language];
    document.querySelector('.tr_life_left_arrow').setAttribute('alt', translations.life.attr.arrow_left[language]);
    document.querySelector('.tr_life_left_arrow').setAttribute('alt', translations.life.attr.arrow_right[language]);
}

export async function setLifePicturesLanguage(language) {
        document.querySelector('.tr_life_slide_1').setAttribute('alt', translations.life.attr.picture_1[language]);
        document.querySelector('.tr_life_slide_2').setAttribute('alt', translations.life.attr.picture_2[language]);
        document.querySelector('.tr_life_slide_3').setAttribute('alt', translations.life.attr.picture_3[language]);
        document.querySelector('.tr_life_slide_4').setAttribute('alt', translations.life.attr.picture_4[language]);
        document.querySelector('.tr_life_slide_5').setAttribute('alt', translations.life.attr.picture_5[language]);
        document.querySelector('.tr_life_slide_6').setAttribute('alt', translations.life.attr.picture_6[language]);
}

function setModalLanguauge(language) {
    document.querySelector('.tr_alt_modal_img').setAttribute('alt', translations.modal.img_alt[language]);
}

function setFooterLanguauge(language) {
    document.querySelector('.tr_footer_layout').textContent = translations.footer.layot[language];
    document.querySelector('.tr_footer_layout_link').textContent = translations.footer.layout_link;
    document.querySelector('.tr_footer_icons-1').textContent = translations.footer.icons_1[language];
    document.querySelector('.tr_footer_icons-2').textContent = translations.footer.icons_2[language];
    document.querySelector('.tr_footer_icons_link-2').textContent = translations.footer.icons_link_1;
    document.querySelector('.tr_footer_icons_link-1').textContent = translations.footer.icons_link_2;
}

export function chooseLanguage() {
    document.addEventListener('click', (event) => {
        const langButton = event.target.closest('.topbar__language_link');
        if (!langButton) return;

        document.querySelectorAll('.topbar__language_link').forEach(btn => {
            btn.classList.remove('language_active');
        });
        langButton.classList.add('language_active');
        const selectedLanguage = langButton.classList.contains('rus') ? 'ru' : 'en';
        localStorage.setItem('language', selectedLanguage);
        setLanguage(selectedLanguage);
        setLifePicturesLanguage(selectedLanguage);
    });
}