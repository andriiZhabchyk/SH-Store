'use strict';

//get filters params to subcategory filter part
let getSubcategoryData = () => {
    const pathname = location.pathname;
    $.ajax({
        method: "GET",
        url: pathname + "/filters",
        dataType: 'html'
    }).done(( data ) => {
        $('#filters').html('').append(data);
        getPriceData();
    });
};

//get items elems from filter data
let getFilterItems = (pathname, searchParam) => {
    $.ajax({
        url: `${pathname}/search`,
        type: 'POST',
        dataType: 'html',
        data: searchParam
    })
        .done((data) => {
            $('#coat-row').html('').append(data);
        });
};


