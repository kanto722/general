const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      670: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }
  })
