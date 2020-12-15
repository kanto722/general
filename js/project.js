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