//slider-gallery-img 
function openPopup(){
    $('.popup-bg').addClass('popup-bg_active');
    const slider2 = document.querySelector('.swiper-container2');

    let mySwiper2 = new Swiper(slider2, {
        slidesPerView: 3,
        spaceBetween: 20,
        autoplay: {
          delay: 2000,
        },
        lazy: true,
    
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
            spaceBetween: 10
          },
          670: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }
      })
    
    
};
function closePopup(){
    $('.popup-bg').removeClass('popup-bg_active');
};
//slider-gallery-img 


// обратный звонок
function openCallBack(){
    $('.popup-back-call').addClass('popup-back-call_active');
    
}

function closeCallBack(){
    $('.popup-back-call').removeClass('popup-back-call_active');
    
};
// обратный звонок


// консультация
function openConsultation(){
    $('.popup-consultation').addClass('popup-consultation_active');
}

function closeConsultation(){
    $('.popup-consultation').removeClass('popup-consultation_active');
};
// консультация

// оставить заявку
function openАpplication(){
    $('.popup-application').addClass('popup-application_active');
}

function closeАpplication(){
    $('.popup-application').removeClass('popup-application_active');
    
};
// оставить заявку

// email
function openEmail(){
    $('.popup-email').addClass('popup-email_active');
}

function closeEmail(){
    $('.popup-email').removeClass('popup-email_active');
};
// email
