$('#form_register').submit(function(e){

    e.preventDefault();

    let form = $(this);

    $.ajax({
        url: 'api/users',
        type: 'post',
        data: {
            firstName: $("#registerFirstName").val(),
            lastName: $("#registerLastName").val(),
            user: $("#registerUserName").val(),
            email: $("#registerEmail").val(),
            password: $("#registerPass").val()

        },
        // data: $(this).serialize(), // .serialize()сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

        statusCode: {
            403: function () {
                $('.alert-info').css('display', 'block');
            },
        },
        beforeSend: function(){
            form.find('input[type="submit"]').attr('disabled', 'disabled');
            // $('form#form_register :input').attr('disabled','disabled'); // сoбытиe дo oтпрaвки
        },

        success: function(){
            // $('form#form_register :input').removeAttr('disabled');
            form.find('input[type="submit"]').prop('disabled', false);

            $('.alert-success').css('display', 'block');
        },

    });


});