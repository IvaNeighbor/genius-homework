const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});
