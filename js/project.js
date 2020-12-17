// Отложенная загрузка карты
var YaMapsShown = false;

$(window).scroll(function () {
  var offset = $('.maps-container').offset().top;
  if (!YaMapsShown) {
    if ($(window).scrollTop() + $(window).height() > offset - 600) {
      showYaMaps();
      YaMapsShown = true;
    }
  }
});

function showYaMaps() {
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A422b316b9615f1dd5eedbedddbf28572fd515fee51686b56bce7539c07f4f1bd&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false";

   document.getElementById("maps").appendChild(script);
 };
// КОНЕЦ Отложенная загрузка карты





// SEND MAIL
function sendFormOne(sendButton, inputName_Name, inputName_Phone) {
  $('[name = ' + sendButton + ']').on('click', function () {
      name2 = $(this).siblings('[name = ' + inputName_Name + ']').val();
      console.log("🚀 ~ file: project.js ~ line 31 ~ name2", name2)
      phone = $(this).siblings('[name = ' + inputName_Phone + ']').val();
      console.log("🚀 ~ file: project.js ~ line 33 ~ phone", phone)


      if (name2 == 0 || phone == 0) {
          alert('Заполните, пожалуйста, все поля');
          return false;
      } 
      else {
          $.ajax({
              type: 'POST',
              url: "/backend/mail.php",
              data: {
                  "name2": name2,
                  "phone": phone
              }
          }).done(function () {
              $('.modal_thanks').fadeTo(300, 1, 'linear').css('display', 'flex');
              $('.popup-back-call').removeClass('popup-back-call_active');
              $('.popup-group').removeClass('popup-group_active');
              $('.popup-consultation').removeClass('popup-consultation_active');
              $('.popup-group').removeClass('popup-group_active');
              $('.popup-application').removeClass('popup-application_active');
              $('.popup-group').removeClass('popup-group_active');

              setTimeout(function () {
                  $('.modal_thanks').fadeOut(500);
                  $('.popup-group').removeClass('popup-group_active');
                  $('body').css('overflow-y', 'scroll');

              }, 2000);
          });
          return false;
      }
  });
};

sendFormOne('send', 'name2', 'phone');




///////
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1700 мс

        $('body,html').animate({scrollTop: top}, 1700);
        $('.header-block1').removeClass('active');
        $('.header-block2').removeClass('active');
        $('.header-burger2').removeClass('active');

    });
});

$(document).ready(function(){
  $("#menu2").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1700 мс

      $('body,html').animate({scrollTop: top}, 1700);
  });
});


//mask input
$('.number-mask').mask('+7 (999) 999-9999'); 