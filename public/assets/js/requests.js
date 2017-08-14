'use strict';

let clothing = () => {
    $.ajax({
        url: "http://localhost:8080/clothing/men-clothing/",
        method: "GET",
        dataType: 'json'
    }).done(function (data){
        clothingData(data);
    });
};

