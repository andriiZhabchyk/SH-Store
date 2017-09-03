'use strict';

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

$('#getItemInfo').on('click', () => {
    let elem = document.getElementById('item-info');
    elem = elem.innerHTML;

    let target = $(event.currentTarget).parent().parent();
    target = target.attr('data-id');

    $.ajax({
        url:  `${elem}/${target}`,
        method: "GET",
        dataType: 'html'
    }).done((data) => {
        console.log(data);
    });
});

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


