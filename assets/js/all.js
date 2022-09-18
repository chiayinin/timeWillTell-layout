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
}); // icon toggle

var btnSide = document.querySelector('.btn-side');
var iconOpen = document.querySelector('.icon-open');
var iconClose = document.querySelector('.icon-close');
var frontMain = document.querySelector('.front-main');
btnSide.addEventListener('click', function () {
  if (iconOpen.classList.contains('d-none') == true) {
    iconOpen.classList.remove('d-none');
    iconClose.classList.add('d-none');
    frontMain.classList.remove('ms-200');
  } else {
    iconOpen.classList.add('d-none');
    iconClose.classList.remove('d-none');
    frontMain.classList.add('ms-200');
  }
}); // sweet alert

var btnShare = document.querySelector('.btn-share');
btnShare.addEventListener('click', function () {
  swal({
    title: "分享成功！",
    text: "",
    icon: "success",
    button: "確定"
  });
}); // vanillajs-datepicker

var elem = document.querySelector('input[name="inputDate"]');
var datepicker = new Datepicker(elem, {
  language: 'zh-TW',
  buttonClass: 'btn'
});
//# sourceMappingURL=all.js.map
