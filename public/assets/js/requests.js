'use strict';

let getSubcategoryData = () => {
    const pathname = location.pathname;
    $.ajax({
        method: "GET",
        url: pathname + "/filters",
        dataType: 'html'
    }).done(( data ) => {
        $('#filters').html('').append(data);
    });
};