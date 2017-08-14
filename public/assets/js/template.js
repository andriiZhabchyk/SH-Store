'use strict';

let clothingData = (data) => {
    let clothing = data[0].mansClothing;

    let otherWear = clothing.otherWear;
    let pullover = clothing.pullover;
    let tShirts = clothing.pullover;

    let templateItem = $('#item-template').html();
    let template = Handlebars.compile(templateItem);

    $('.coat-row').append(template(otherWear));

    console.log(otherWear, pullover, tShirts);
};