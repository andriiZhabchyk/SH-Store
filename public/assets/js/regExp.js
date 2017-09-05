//LOG-IN
$(document).ready(function () {

    $('#btnLogin').on('click', function () {
        console.log('1');
        let formElements = document.forms.formLogin.elements;


        for (let i = 0; i < formElements.length; i++) {


            //USER NAME
            let userNameRegExp = /^[a-z][a-z0-9]*?([-_.][a-z0-9]+){0,2}$/i;

            if (formElements[i].name == 'userName') {
                if (formElements[i].value === "") {
                    document.getElementById("errorName").style.display = "block";
                    if (document.getElementById("errorName").style.display = "block") {
                        document.getElementById("errorName").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (userNameRegExp.test(document.getElementById("log_inUserName").value)) {

                        document.getElementById("errorName").innerHTML = '';
                        document.getElementById("errorName").style.display = "none";

                    } else if (!userNameRegExp.test(document.getElementById("log_inUserName").value || formElements[i].value)) {

                        document.getElementById("errorName").style.display = "block";

                        if (document.getElementById("errorName").style.display = "block") {
                            document.getElementById("errorName").innerHTML = 'please, enter correct user name';
                        }

                    }
                }
            }


            //password
            let passwordRegExp = /^[A-zА-яЁё0-9_]{6,18}$/;


            if (formElements[i].name == 'userPassword') {

                if (formElements[i].value === "") {

                    document.getElementById("errorPassword").style.display = "block";

                    if (document.getElementById("errorPassword").style.display = "block") {
                        document.getElementById("errorPassword").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (passwordRegExp.test(document.getElementById("log_inUserPassword").value)) {

                        document.getElementById("errorPassword").innerHTML = '';
                        document.getElementById("errorPassword").style.display = "none";

                    } else if (!passwordRegExp.test(document.getElementById("log_inUserPassword").value || formElements[i].value)) {

                        document.getElementById("errorPassword").style.display = "block";

                        if (document.getElementById("errorPassword").style.display = "block") {
                            document.getElementById("errorPassword").innerHTML = 'from 6 to 18 symbols, can use letters, numbers and symbol "_"';
                        }

                    }
                }
            }


        }
        event.preventDefault();
        loginUser('#form_login', 'login');
    });

});



//REGISTRATION
$(document).ready(function () {


    $('#btnRegister').on('click', function () {
        let formElements = document.forms.formRegister.elements;


        for (let i = 0; i < formElements.length; i++) {

            let nameRegExp = /[A-zА-яЁё]/;


            //FirstName
            if (formElements[i].name == 'firstName') {
                if (formElements[i].value === "") {
                    document.getElementById("errorFirstName").style.display = "block";
                    if (document.getElementById("errorFirstName").style.display = "block") {
                        document.getElementById("errorFirstName").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (nameRegExp.test(document.getElementById("registerFirstName").value)) {

                        document.getElementById("errorFirstName").innerHTML = '';
                        document.getElementById("errorFirstName").style.display = "none";

                    } else if (!nameRegExp.test(document.getElementById("registerFirstName").value || formElements[i].value)) {

                        document.getElementById("errorFirstName").style.display = "block";

                        if (document.getElementById("errorFirstName").style.display = "block") {
                            document.getElementById("errorFirstName").innerHTML = 'use only uppercase and lowercase letters';
                        }

                    }
                }
            }

            //LastName
            if (formElements[i].name == 'lastName') {
                if (formElements[i].value === "") {
                    document.getElementById("errorLastName").style.display = "block";
                    if (document.getElementById("errorLastName").style.display = "block") {
                        document.getElementById("errorLastName").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (nameRegExp.test(document.getElementById("registerLastName").value)) {

                        document.getElementById("errorLastName").innerHTML = '';
                        document.getElementById("errorLastName").style.display = "none";

                    } else if (!nameRegExp.test(document.getElementById("registerLastName").value || formElements[i].value)) {

                        document.getElementById("errorLastName").style.display = "block";

                        if (document.getElementById("errorLastName").style.display = "block") {
                            document.getElementById("errorLastName").innerHTML = 'use only uppercase and lowercase letters';
                        }

                    }
                }
            }


            //User name
            let userNameRegExp = /^[a-z][a-z0-9]*?([-_.][a-z0-9]+){0,2}$/i;


            if (formElements[i].name == 'userName') {
                if (formElements[i].value === "") {
                    document.getElementById("errorUserRegName").style.display = "block";
                    if (document.getElementById("errorUserRegName").style.display = "block") {
                        document.getElementById("errorUserRegName").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (userNameRegExp.test(document.getElementById("registerUserName").value)) {

                        document.getElementById("errorUserRegName").innerHTML = '';
                        document.getElementById("errorUserRegName").style.display = "none";

                    } else if (!userNameRegExp.test(document.getElementById("registerUserName").value || formElements[i].value)) {

                        document.getElementById("errorUserRegName").style.display = "block";

                        if (document.getElementById("errorUserRegName").style.display = "block") {
                            document.getElementById("errorUserRegName").innerHTML = 'please, enter correct user name';
                        }

                    }
                }
            }


            //Email
            let EmailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (formElements[i].name == 'emailRegistration') {
                if (formElements[i].value === "") {
                    document.getElementById("errorEmail").style.display = "block";
                    if (document.getElementById("errorEmail").style.display = "block") {
                        document.getElementById("errorEmail").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (EmailRegExp.test(document.getElementById("registerEmail").value)) {

                        document.getElementById("errorEmail").innerHTML = '';
                        document.getElementById("errorEmail").style.display = "none";

                    } else if (!EmailRegExp.test(document.getElementById("registerEmail").value || formElements[i].value)) {

                        document.getElementById("errorEmail").style.display = "block";

                        if (document.getElementById("errorEmail").style.display = "block") {
                            document.getElementById("errorEmail").innerHTML = 'Enter correct email';
                        }

                    }
                }
            }

            //PASSWORD
            let passwordRegExp =/^[A-zА-яЁё0-9_]{6,18}$/ ;


            if (formElements[i].name == 'passRegistration') {

                if (formElements[i].value === "") {

                    document.getElementById("errorPass").style.display = "block";

                    if (document.getElementById("errorPass").style.display = "block") {
                        document.getElementById("errorPass").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (passwordRegExp.test(document.getElementById("registerPass").value)) {

                        document.getElementById("errorPass").innerHTML = '';
                        document.getElementById("errorPass").style.display = "none";

                    } else if (!passwordRegExp.test(document.getElementById("registerPass").value || formElements[i].value)) {

                        document.getElementById("errorPass").style.display = "block";

                        if (document.getElementById("errorPass").style.display = "block") {
                            document.getElementById("errorPass").innerHTML = 'from 6 to 18 symbols, can use letters, numbers and symbol "_"';
                        }

                    }
                }
            }


            //CONFIRM PASSWORD
            let pass = document.getElementById("registerPass").value;
            let pass2 = document.getElementById("registerConfirmPass").value;


            if (formElements[i].value === "") {

                document.getElementById("errorPassConfirm").style.display = "block";

                if (document.getElementById("errorPassConfirm").style.display = "block") {
                    document.getElementById("errorPassConfirm").innerHTML = 'Required field'
                }

            }

            if(pass2 !== "") {
                getConfirmPass()

            }

            function getConfirmPass() {


                if (pass !== pass2) {

                    document.getElementById("errorPassConfirm").style.display = "block";


                    if (document.getElementById("errorPassConfirm").style.display = "block") {

                        document.getElementById("errorPassConfirm").innerHTML = 'Password not confirmed, try again';
                    }
                }

                if (pass === pass2) {
                    document.getElementById("errorPassConfirm").innerHTML = '';
                    document.getElementById("errorPassConfirm").style.display = "none";
                }
            }
        }

        event.preventDefault();
        loginUser('#form_register', 'register');
    });

});



//Order
$(document).ready(function () {
    $('#confirm_order').on('click', function () {
        let formElements = document.forms.cartOrder.elements;


        for (let i = 0; i < formElements.length; i++) {

            let nameRegExp = /[A-zА-яЁё]/;

            //Name
            if (formElements[i].name == 'name') {
                if (formElements[i].value === "") {
                    document.getElementById("errorOrderName").style.display = "block";
                    if (document.getElementById("errorOrderName").style.display = "block") {
                        document.getElementById("errorOrderName").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (nameRegExp.test(document.getElementById("name_order").value)) {

                        document.getElementById("errorOrderName").innerHTML = '';
                        document.getElementById("errorOrderName").style.display = "none";

                    } else if (!nameRegExp.test(document.getElementById("name_order").value || formElements[i].value)) {

                        document.getElementById("errorOrderName").style.display = "block";

                        if (document.getElementById("errorOrderName").style.display = "block") {
                            document.getElementById("errorOrderName").innerHTML = 'enter only letters';
                        }

                    }
                }
            }


            //Email
            let EmailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (formElements[i].name == 'email') {
                if (formElements[i].value === "") {
                    document.getElementById("errorOrderEmail").style.display = "block";
                    if (document.getElementById("errorOrderEmail").style.display = "block") {
                        document.getElementById("errorOrderEmail").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (EmailRegExp.test(document.getElementById("email_order").value)) {

                        document.getElementById("errorOrderEmail").innerHTML = '';
                        document.getElementById("errorOrderEmail").style.display = "none";

                    } else if (!EmailRegExp.test(document.getElementById("email_order").value || formElements[i].value)) {

                        document.getElementById("errorOrderEmail").style.display = "block";

                        if (document.getElementById("errorOrderEmail").style.display = "block") {
                            document.getElementById("errorOrderEmail").innerHTML = 'Enter correct email';
                        }

                    }
                }
            }

            //Phone
            let phoneRegExp =/^[\d]{1}\ \([\d]{3}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/;

            if (formElements[i].name == 'phone') {
                if (formElements[i].value === "") {
                    document.getElementById("errorOrderPhone").style.display = "block";
                    if (document.getElementById("errorOrderPhone").style.display = "block") {
                        document.getElementById("errorOrderPhone").innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (phoneRegExp.test(document.getElementById("phone_order").value)) {

                        document.getElementById("errorOrderPhone").innerHTML = '';
                        document.getElementById("errorOrderPhone").style.display = "none";

                    } else if (!phoneRegExp.test(document.getElementById("phone_order").value || formElements[i].value)) {

                        document.getElementById("errorOrderPhone").style.display = "block";

                        if (document.getElementById("errorOrderPhone").style.display = "block") {
                            document.getElementById("errorOrderPhone").innerHTML = 'Enter correct phone';
                        }

                    }
                }
            }


        }


        event.preventDefault()
    });

});



//NEWSLETTER
$(document).ready(function () {
    $('#btnNewsLetter').on('click', function () {
        let formElements = document.forms.formNewsLetter.elements;


        for (let i = 0; i < formElements.length; i++) {


            //email
            let EmailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


            if (formElements[i].name == 'email') {
                if(formElements[i].value === "") {
                    document.getElementById("errorEmailNewsLetter").style.display = "block";
                    if (document.getElementById("errorEmailNewsLetter").style.display = "block") {
                        document.getElementById("errorEmailNewsLetter").innerHTML = 'Required field';

                    }

                }

                if (formElements[i].value !== "") {

                    if (EmailRegExp.test(document.getElementById("newsletter").value)) {

                        document.getElementById("errorEmailNewsLetter").innerHTML = '';
                        document.getElementById("errorEmailNewsLetter").style.display = "none";

                    } else if (!EmailRegExp.test(document.getElementById("newsletter").value)) {

                        document.getElementById("errorEmailNewsLetter").style.display = "block";

                        if (document.getElementById("errorEmailNewsLetter").style.display = "block") {
                            document.getElementById("errorEmailNewsLetter").innerHTML = 'Enter correct email';
                        }

                    }
                }
            }

        }


        event.preventDefault()
    });

});




//CONTACT
$(document).ready(function () {
    $('#btnContact').on('click', function () {
        let formElements = document.forms.formContact.elements;


        for (let i = 0; i < formElements.length; i++) {


            //name
            let nameRegExp =/[A-zА-яЁё]/;

            if (formElements[i].name == 'contactName') {

                if (formElements[i].value === "") {
                    document.getElementById("errorContactName").innerHTML = 'Required field'
                }

                if (formElements[i].value !== "") {
                    if (nameRegExp.test(document.getElementById("contactName").value)) {
                        document.getElementById("errorContactName").innerHTML = '';
                    } else if (!nameRegExp.test(document.getElementById("contactName").value || formElements[i].value)) {

                        document.getElementById("errorContactName").innerHTML = 'use only uppercase and lowercase letters';
                    }
                }

            }
            //email
            let EmailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (formElements[i].name == 'contactEmail') {
                if (formElements[i].value === "") {
                    document.getElementById("errorContactEmail").innerHTML = 'Required field'
                }

                if (formElements[i].value !== "") {
                    if (EmailRegExp.test(document.getElementById("contactName").value)) {
                        document.getElementById("errorContactEmail").innerHTML = '';
                    } else if (!EmailRegExp.test(document.getElementById("contactName").value)) {

                        document.getElementById("errorContactEmail").innerHTML = 'Enter correct email';
                    }
                }
            }

        }

        event.preventDefault()
    });

});






