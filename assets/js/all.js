"use strict";

// import Swiper JS
var swiper = new Swiper('.mySwiper', {
  // 參數設定
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
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
    380: {
      slidesPerView: 1
    },
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
}); // 瀑布流 載入圖片後渲染
// $('.row').imagesLoaded().progress( function() {
//   $('.row').masonry();
// });
// Tooltips

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
}); //
//# sourceMappingURL=all.js.map
