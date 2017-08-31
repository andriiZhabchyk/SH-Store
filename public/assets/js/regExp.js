$(document).ready(function () {

    //Log-in

    $('#btnLogin').on('click', function () {
        let formElements = document.forms.formLogin.elements;


        for (let i = 0; i < formElements.length; i++) {


            //name
            let nameRegExp =/[A-zА-яЁё]/;

            if(formElements[i].value === "") {
                document.getElementById("errorName").innerHTML = 'Required field'
            }

            if(formElements[i].value !== "") {
                if (nameRegExp.test(document.getElementById("log_inUserName").value)) {
                    document.getElementById("errorName").innerHTML = '';
                }  else if (!nameRegExp.test(document.getElementById("log_inUserName").value || formElements[i].value)) {

                    document.getElementById("errorName").innerHTML = 'use only uppercase and lowercase letters';
                }
            }


            //password
            let passwordRegExp =/^[A-zА-яЁё0-9_]{6,18}$/ ;

            if(formElements[i].value === "") {
                document.getElementById("errorPassword").innerHTML = 'Required field'
            }

            if(formElements[i].value !== "") {
                if (passwordRegExp.test(document.getElementById("log_inUserPassword").value)) {
                    document.getElementById("errorPassword").innerHTML = '';
                }  else if (!passwordRegExp.test(document.getElementById("log_inUserPassword").value || formElements[i].value)) {

                    document.getElementById("errorPassword").innerHTML = 'password length from 5 to 18 symbols, use uppercase and lowercase letters, numbers and symbol "_"';
                }
            }

        }

        event.preventDefault()
    });

});





//register

$(document).ready(function () {


    $('#btnRegister').on('click', function () {
        let formElements = document.forms.formRegister.elements;


        for (let i = 0; i < formElements.length; i++) {

            let nameRegExp =/[A-zА-яЁё]/;

            //FirstName
            if(formElements[i].value === "") {
                document.getElementById("errorFirstName").innerHTML = 'Required field'
            }

            if(formElements[i].value !== "") {
                if (nameRegExp.test(document.getElementById("registerFirstName").value)) {
                    document.getElementById("errorFirstName").innerHTML = '';
                }  else if (!nameRegExp.test(document.getElementById("registerFirstName").value || formElements[i].value)) {

                    document.getElementById("errorFirstName").innerHTML = 'use only uppercase and lowercase letters';
                }
            }

            //LastName
            if(formElements[i].value === "") {
                document.getElementById("errorLastName").innerHTML = 'Required field'
            }

            if(formElements[i].value !== "") {
                if (nameRegExp.test(document.getElementById("registerLastName").value)) {
                    document.getElementById("errorLastName").innerHTML = '';
                }  else if (!nameRegExp.test(document.getElementById("registerLastName").value || formElements[i].value)) {

                    document.getElementById("errorLastName").innerHTML = 'use only uppercase and lowercase letters';
                }
            }


            //Email

            let EmailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //не проверяет на пустую строку!!!

            if(formElements[i].value === "") {
                document.getElementById("errorEmail").innerHTML = 'Required field'
            }

            if(formElements[i].value !== "") {
                if (EmailRegExp.test(document.getElementById("registerEmail").value)) {
                    document.getElementById("errorEmail").innerHTML = '';
                }  else if (!EmailRegExp.test(document.getElementById("registerEmail").value || formElements[i].value)) {

                    document.getElementById("errorEmail").innerHTML = 'Enter correct email';
                }
            }


            //password

            let passwordRegExp =/^[A-zА-яЁё0-9_]{5,18}$/ ;

            if(formElements[i].value === "") {
                document.getElementById("errorEmptyPass").innerHTML = 'Required field'
            }

            if(formElements[i].value !== "") {
                if (passwordRegExp.test(document.getElementById("registerPass").value)) {
                    document.getElementById("errorPass").innerHTML = '';
                }  else if (!passwordRegExp.test(document.getElementById("registerPass").value || formElements[i].value)) {

                    document.getElementById("errorPass").innerHTML = 'password length from 5 to 18 symbols, use uppercase and lowercase letters, numbers and symbol "_"';
                }
            }

            //confirm password


            let pass = document.getElementById("registerPass").value;
            let pass2 = document.getElementById("registerConfirmPass").value;

            if(formElements[i].value === "") {
                document.getElementById("errorPassConfirm").innerHTML = 'Required field';

            }

            if(pass2 !== "") {
                getConfirmPass()

            }

            function getConfirmPass() {


                if (pass !== pass2) {
                    document.getElementById("errorPassConfirm").innerHTML = 'Password not confirmed, try again';
                }

                if (pass === pass2) {
                    document.getElementById("errorPassConfirm").innerHTML = '';
                }
            }
        }


        event.preventDefault()
    });

});


//Contact

$(document).ready(function () {
    $('#btnContact').on('click', function () {
        let formElements = document.forms.formContact.elements;


        for (let i = 0; i < formElements.length; i++) {


            //name
            let nameRegExp =/[A-zА-яЁё]/;

            if(formElements[i].value === "") {
                document.getElementById("errorContactName").innerHTML = 'Required field'
            }

            if(formElements[i].value !== "") {
                if (nameRegExp.test(document.getElementById("contactName").value)) {
                    document.getElementById("errorContactName").innerHTML = '';
                }  else if (!nameRegExp.test(document.getElementById("contactName").value || formElements[i].value)) {

                    document.getElementById("errorContactName").innerHTML = 'use only uppercase and lowercase letters';
                }
            }


            //email
            let EmailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //не проверяет на пустую строку!!!

            if(formElements[i].value === "") {
                document.getElementById("errorContactEmail").innerHTML = 'Required field'
            }

            if(formElements[i].value !== "") {
                if (EmailRegExp.test(document.getElementById("contactName").value)) {
                    document.getElementById("errorContactEmail").innerHTML = '';
                }  else if (!EmailRegExp.test(document.getElementById("contactName").value)) {

                    document.getElementById("errorContactEmail").innerHTML = 'Enter correct email';
                }
            }


        }

        event.preventDefault()
    });

});




//newsletter

$(document).ready(function () {
    $('#btnNewsLetter').on('click', function () {
        let formElements = document.forms.formNewsLetter.elements;


        for (let i = 0; i < formElements.length; i++) {


            //email
            let EmailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //не проверяет на пустую строку!!!

            // if(formElements[i].value === "") {
            //     document.getElementById("errorEmailNewsLetter").style.display = "block";
            //     if (document.getElementById("errorEmailNewsLetter").style.display = "block") {
            //         document.getElementById("errorEmailNewsLetter").innerHTML = 'qqqq';
            //
            //     }
            //
            // }

            if(formElements[i].value !== "") {

                if (EmailRegExp.test(document.getElementById("newsletter").value)) {

                    document.getElementById("errorEmailNewsLetter").innerHTML = '';
                    document.getElementById("errorEmailNewsLetter").style.display = "none";

                }  else if (!EmailRegExp.test(document.getElementById("newsletter").value)) {

                    document.getElementById("errorEmailNewsLetter").style.display = "block";

                    if (document.getElementById("errorEmailNewsLetter").style.display = "block") {
                        document.getElementById("errorEmailNewsLetter").innerHTML = 'Enter correct email';
                    }

                }
            }

        }


        event.preventDefault()
    });

});
