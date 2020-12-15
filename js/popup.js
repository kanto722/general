//slider-gallery-img 
function openPopup(){
    $('.popup-bg').addClass('popup-bg_active');
    $('body').css('overflow-y', 'hidden');

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
    $('body').css('overflow-y', 'scroll');

};
//slider-gallery-img 


// обратный звонок
function openCallBack(){
    $('.popup-back-call').addClass('popup-back-call_active');
    $('.popup-group').addClass('popup-group_active');
    $('body').css('overflow-y', 'hidden');
    
}

function closeCallBack(){
    $('.popup-back-call').removeClass('popup-back-call_active');
    $('.popup-group').removeClass('popup-group_active');
    // $('.popup-group').addClass('popup-group_close');

    $('body').css('overflow-y', 'scroll');

};
// обратный звонок


// консультация
function openConsultation(){
    $('.popup-consultation').addClass('popup-consultation_active');
    $('.popup-group').addClass('popup-group_active');
    $('body').css('overflow-y', 'hidden');

}

function closeConsultation(){
    $('.popup-consultation').removeClass('popup-consultation_active');
    $('.popup-group').removeClass('popup-group_active');
    $('body').css('overflow-y', 'scroll');

};
// консультация

// оставить заявку
function openАpplication(){
    $('.popup-application').addClass('popup-application_active');
    $('.popup-group').addClass('popup-group_active');
    $('body').css('overflow-y', 'hidden');

}

function closeАpplication(){
    $('.popup-application').removeClass('popup-application_active');
    $('.popup-group').removeClass('popup-group_active');
    $('body').css('overflow-y', 'scroll');

};
// оставить заявку

// email
function openEmail(){
    $('.popup-email').addClass('popup-email_active');
    $('.popup-group').addClass('popup-group_active');
    $('body').css('overflow-y', 'hidden');

}

function closeEmail(){
    $('.popup-email').removeClass('popup-email_active');
    $('.popup-group').removeClass('popup-group_active');
    $('body').css('overflow-y', 'scroll');

};
// email


