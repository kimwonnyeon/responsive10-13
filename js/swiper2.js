const visualSw = new Swiper(".visualSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// productlist
const proSw = new Swiper(".proSwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
});
