$(document).ready(function () {
    $('#btnLogin').on('click', function () {
        let formElements = document.forms.formLogin.elements;


        for (let i = 0; i < formElements.length; i++) {

            let nameRegExp =/[A-zА-яЁё]/;

            if(formElements[i].value === "") {
                document.getElementById("errorFirstName").innerHTML = 'Обязательно для заполнения'
            }

            if(formElements[i].value !== "") {
                if (nameRegExp.test(document.getElementById("loginUserName").value)) {
                        document.getElementById("errorFirstName").innerHTML = '';
                    }  else if (!nameRegExp.test(document.getElementById("loginUserName").value || formElements[i].value)) {

                        document.getElementById("errorFirstName").innerHTML = 'Используйте только буквы';
                    }
                }

             }

        event.preventDefault()
    })
});