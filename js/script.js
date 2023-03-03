// slider

var swiper = new Swiper(".topSwiper", {
  slidesPerView: 1,
  // spaceBetween: 10,
  centeredSlides: true,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 160,
    },
  },
});
