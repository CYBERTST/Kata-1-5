window.addEventListener("DOMContentLoaded", function () {
  let showButton = document.querySelector(".show-all-btn");
  let container = document.querySelector(".swiper-wrapper");
  let swiper;

  function initSwiper() {
    swiper = new Swiper(".swiper", {
      direction: "horizontal",
      slidesPerView: "auto",

      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  const breakpoint = window.matchMedia("(min-width: 768px)");
  function destroySwiper() {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
  }
  function handleResize() {
    if (breakpoint.matches) {
      destroySwiper();
    } else {
      initSwiper();
    }
  }
  handleResize();

  breakpoint.addEventListener("change", handleResize);

  showButton.addEventListener("click", function () {
    if (showButton.classList.contains("show-all-btn")) {
      showButton.classList.remove("show-all-btn");
      container.classList.add("swiper--opened");
      container.classList.add("swiper-wrapper--margin-bottom");
      showButton.classList.add("show-less");
      showButton.textContent = "Скрыть";
    } else {
      showButton.classList.add("show-all-btn");
      container.classList.remove("swiper--opened");
      container.classList.remove("swiper-wrapper--margin-bottom");
      showButton.classList.remove("show-less");
      showButton.textContent = "Показать все";
    }
  });
});
