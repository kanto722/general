function openContent(){
    $('.gallery-content-project').addClass('gallery-content-project_invite');
};

function closeContent(){
    $('.gallery-content-project').removeClass('gallery-content-project_invite');
};


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







// // Отложенная загрузка карты
// var VideoShow = false;

// $(window).scroll(function () {
//   var offset = $('.safety-elem1__video').offset().top;
//   if (!VideoShow) {
//     if ($(window).scrollTop() + $(window).height() > offset - 600) {
//       VideoShow();
//       VideoShow = true;
//     }
//   }
// });

// function VideoShow() {
//    var iframe = document.createElement("iframe");
//    iframe.frameborder = "0";
//    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
//    iframe.allowfullscreen = true;
//    iframe.src = "https://www.youtube.com/embed/8pLU3mA_r0g";

//    document.getElementById("play").appendChild(iframe);
//  };
// // КОНЕЦ Отложенная загрузка карты





// SEND MAIL
function sendFormOne(sendButton, inputName_Name, inputName_Phone) {
  $('[name = ' + sendButton + ']').on('click', function () {
      name = $(this).siblings('[name = ' + inputName_Name + ']').val();
      phone = $(this).siblings('[name = ' + inputName_Phone + ']').val();


      if (name == 0 || phone == 0) {
          alert('Заполните, пожалуйста, все поля');
          return false;
      } 
      else {
          $.ajax({
              type: 'POST',
              url: "/backend/mail.php",
              data: {
                  "name": name,
                  "phone": phone
              }
          }).done(function () {
              $('.modal_thanks').fadeTo(300, 1, 'linear').css('display', 'flex');
              setTimeout(function () {
                  $('.btn-mail').fadeOut(500);
              }, 2000);
          });
          return false;
      }
  });
};

sendFormOne('form-btn', 'name', 'phone');