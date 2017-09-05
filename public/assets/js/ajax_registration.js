let loginUser = (form, path) => {
    let itemForm = $(form),
        data = {};

    if (path === 'register'){
        data.firstName = $("#registerFirstName").val();
        data.lastName = $("#registerLastName").val();
        data.userName = $("#registerUserName").val();
        data.email = $("#registerEmail").val();
        data.password = $("#registerPass").val();
    } else {
        data.userName = $('#log_inUserName').val();
        data.password = $('#log_inUserPassword').val();
    };

    $.ajax({
        url: `api/users/${path}`,
        type: 'post',
        data: data,
        // data: $(this).serialize(), // .serialize()сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

        statusCode: {
            417: function (data) {
                $('.alert-danger > p').text(data.responseText);
                $('.alert-danger').css('display', 'block');
            }
        },

        success: function(data){
            location.assign('/');
            showUserInfo(data);
        }
    });
};