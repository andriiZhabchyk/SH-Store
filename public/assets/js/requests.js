'use strict';

let getWomenData= () => {
    $.ajax({
        method: "GET",
        url: "some.php",
        data: { name: "John", location: "Boston" }
    })
        .done(function( msg ) {
            alert( "Data Saved: " + msg );
        });
};