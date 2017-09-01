'use strict';

let getPriceData = (min, max) => {
    $("#slider-range").slider({
        min: 5,
        max: 300,
        values: [30, 120],
        range: true,
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });

    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
};



$('#filter_form').submit((e) => {
    e.preventDefault();
    const pathname = location.pathname;
    const amountMin = $("#slider-range").slider("values", 0),
        amountMax = $("#slider-range").slider("values", 1),
        checkCountry = $('.country');
    let checkedCountry = [];

    for (const item of checkCountry) {
        if ($(item).checked === true) {
            console.log(item);
            /*checkedCountry.push(item.val());*/
        }
    }

    console.log(amountMin, amountMax, checkedCountry);
    /*$.ajax({
        url: `${pathname}/search`,
        type: 'POST',
        dataType: 'html',
        data: `minPrice=1&maxPrice=2&country=3&brand=4&size=5`,
    })
        .done((data) => {
            console.log(data);
        });*/
});


