export function anchorScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetElement = document.querySelector(this.getAttribute("href"));
          const headerHeight = document.querySelector(".header").offsetHeight;
          console.log(headerHeight);
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        });
      });
}