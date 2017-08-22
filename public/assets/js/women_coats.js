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

$.ajaxSetup({
    url: '#', // путь к php-обработчику
    type: 'GET', // метод передачи данных
    dataType: 'json', // тип ожидаемых данных в ответе
    // beforeSend: function(){ // Функция вызывается перед отправкой запроса
    //     output.text('Запрос отправлен. Ждите ответа.');
    // },
    // error: function(req, text, error){ // отслеживание ошибок во время выполнения ajax-запроса
    //     output.text('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
    // },
    // complete: function(){ // функция вызывается по окончании запроса
    //     output.append('<p>Запрос полностью завершен!</p>');
    // }
});

$(function(){
    let output = $('#output');
    $('#btn').on('click', function(){
        // Теперь, вся запись любого запроса, будет сводится
        // к параметрам data и success: данные, которые передаём
        // и обработка ответа от сервера
        $.ajax({
            data: {key: 1}, // данные, которые передаем на сервер
            success: function(json){ // функция, которая будет вызвана в случае удачного завершения запроса к серверу
                output.html(json);
            }
        });
    });
});

$(function(){
    let output = $('#output'); // блок вывода информации
    $('#btn').on('click', function(){
        $.ajax({
            url: 'path/to/handler.php', // путь к php-обработчику
            type: 'POST', // метод передачи данных
            dataType: 'json', // тип ожидаемых данных в ответе
            data: {key: 1}, // данные, которые передаем на сервер
            // beforeSend: function(){ // Функция вызывается перед отправкой запроса
            //     output.text('Запрос отправлен. Ждите ответа.');
            // },
            // error: function(req, text, error){ // отслеживание ошибок во время выполнения ajax-запроса
            //     output.text('Хьюстон, У нас проблемы! ' + text + ' | ' + error);
            // },
            // complete: function(){ // функция вызывается по окончании запроса
            //     output.append('<p>Запрос полностью завершен!</p>');
            // },
            success: function(json){ // функция, которая будет вызвана в случае удачного завершения запроса к серверу
                // json - переменная, содержащая данные ответа от сервера. Обзывайте её как угодно ;)
                output.html(json); // выводим на страницу данные, полученные с сервера
            }
        });
    });
});
