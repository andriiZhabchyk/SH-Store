'use strict';

$(document).ready(function() {
    $("#checkout").click(function () {
        $("#myModal").modal('show');
    });

    $("#myTooltip").on('show.bs.tooltip');


    $("#cart_order").submit(function () {
        $.ajax({
            url: "#",
            type: "POST",
            data: $(this).serialize()
        }).done(function () {
            alert("Thank you for your order, we'll call you soon!");
        });
        return false;
    });
});





