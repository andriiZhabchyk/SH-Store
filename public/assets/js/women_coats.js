'use strict';

$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 50, 300 ],
        slide: function( event, ui ) {
            $("#amount").val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
        }
    });
    $("#amount").val( "€" + $("#slider-range").slider("values", 0 ) +
        " - €" + $("#slider-range").slider( "values", 1 ) );
});

$(function(){
    // let output = $('#output'); // блок вывода информации
    $('filter_form').on('click', function(){
        $.ajax({
            url: '#', // путь к php-обработчику
            type: 'GET', // метод передачи данных
            dataType: 'json', // тип ожидаемых данных в ответе
            data: {minPrice: '', maxPrice: '', country: '', brand: '', size: ''}, // данные, которые передаем на сервер

            success: function(json){ // функция, которая будет вызвана в случае удачного завершения запроса к серверу
                // output.html(json); // выводим на страницу данные, полученные с сервера
            }
        });
    });
});

