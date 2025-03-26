const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: "auto", // Дозволяє адаптивний розмір
    centeredSlides: true, // Вирівнює активний слайд по центру
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});