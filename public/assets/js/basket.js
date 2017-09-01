'use strict';

$(document).ready(function() {
    $("#checkout").click(function () {
        $("#myModal").modal('show');
    });

    $("#myTooltip").on('show.bs.tooltip');


$("#cart_order").submit(function() {
    $.ajax({
        url: "#",
        type: "POST",
        data: $(this).serialize()
    }).done(function() {
        alert("Thank you for your order, we'll call you soon!");
    });
    return false;
});


function checkParams() {
    var newName = $('#name_order').val();

    if(newName.length !== 3 ) {
        $('#confirm_order').removeAttr('disabled');
    } else {
        $('#confirm_order').attr('disabled', 'disabled');
    }

    var newPhone = $('#phone_order').val();

    if(newPhone.length !== 3 ) {
        $('#confirm_order').removeAttr('disabled');
    } else {
        $('#confirm_order').attr('disabled', 'disabled');
    }
}

});



