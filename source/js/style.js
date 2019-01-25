
$( document ).ready(function() { // Функция позволяющая выполнять другие функции не дожидаясь полной загрузки документа
    $("#submit").click(function(){ // Ловим клик по кнопке
        $(".modal").fadeIn(); // Плавно показываем подложку
    });
});

/* Убираем подложку */
$( document ).ready(function() { // Функция позволяющая выполнять другие функции не дожидаясь полной загрузки документа
    $(".modal__close").click(function(){ // Ловим клик по подложке Overlay
        $(".modal").fadeOut(); // Плавно убираем подложку
    });
});

jQuery(function($) {
  $("#phone").mask("+7(999) 999-99-99");
});

$("#email").blur(function() {
  var email = $(this).val();
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
});

$('#birth').datetimepicker();
