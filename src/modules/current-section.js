// Определяем текущую секцию
export function displayCurrentSection() {
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.header__nav_link');
    const sections = Array.from(links).map(link => {
      const targetId = link.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      return { link, section };
    });
    
    function activateLink() {
      const scrollPosition = window.scrollY + 100;
      for (let i = 0; i < sections.length; i++) {
        const { link, section } = sections[i];
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          link.classList.add('section_active');
        } else {
          link.classList.remove('section_active');
        }
      }
    }
    
    window.addEventListener('scroll', activateLink);
    activateLink();
  });
}