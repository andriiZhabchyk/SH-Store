'use strict';

class searchObj {
    constructor(minPrice, maxPrice, countries, brands, sizes) {
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.country = countries;
        this.brands = brands;
        this.sizes = sizes;
    }
}

let getPriceData = (min, max) => {
    $("#slider-range").slider({
        min: 5,
        max: 300,
        values: [1, 300],
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
    getFilterData();
});

let getFilterData = () => {
    const pathname = location.pathname,
        amountMin = $("#slider-range").slider("values", 0),
        amountMax = $("#slider-range").slider("values", 1),
        checkCountry = $('.country'),
        checkBrand = $('.brands'),
        checkSize = $('.sizes');

    let checkedCountries = [],
        checkedBrand =[],
        checkedSizes = [];

    checkedValuesFilter (checkBrand, checkedBrand);
    checkedValuesFilter(checkCountry, checkedCountries);
    checkedValuesFilter(checkSize, checkedSizes);

    let search = new searchObj(amountMin, amountMax, checkedCountries, checkedBrand, checkedSizes);

    getFilterItems(pathname, search);
};

let checkedValuesFilter = (items, array) => {
    for (const item of items) {
        if (item.checked === true) {
            array.push(item.value);
        }
    }

    if (array.length === 0) {
        for (const item of items) {
            array.push(item.value);
        }
    }
};


