"use strict";

// import Swiper JS
var swiper = new Swiper('.mySwiper', {
  // 參數設定
  // autoplay: {
  //     disableOnInteraction: false,
  //     delay: 0
  // },
  // direction: "vertical", // 方向
  loop: true,
  // 循環
  watchSlidesProgress: true,
  speed: 3000,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  // 分頁物件
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // RWD
  breakpoints: {
    480: {
      slidesPerView: 1
    },
    767: {
      slidesPerView: 2
    },
    996: {
      slidesPerView: 4
    }
  }
});
//# sourceMappingURL=all.js.map
