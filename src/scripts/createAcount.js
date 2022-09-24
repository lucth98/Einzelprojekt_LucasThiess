import css from "../styles/createAccount.css";
console.log("create acount Js loaded");


function emailValidation() {
    console.log("email function");
    var emailElement = document.getElementById("cAEmail");
    var email = emailElement.value;

    var regex = /\S+@\S+\.\S+/;

    if (email == null) {
        emailElement.setCustomValidity("please enter your email");
        emailElement.reportValidity();
    } else if (regex.test(email)) {
        console.log(email + " Email valide");
        emailElement.setCustomValidity("");
        emailElement.reportValidity();
    } else {
        console.log(email + " Email invalide");
        emailElement.setCustomValidity("not a valide email adress");
        emailElement.reportValidity();
    }
}

function userNameValidation() {
    checkLengthOfInput("cAUserName", 5, "User Name");
}

function ageValidation() {
    var emailInput = document.getElementById("cAAge");
    var age = emailInput.value;
    if (age == null) {
        emailInput.setCustomValidity("please enter your age");
        emailInput.reportValidity();
    } else if (age < 13) {
        emailInput.setCustomValidity("User must be older than 13");
        emailInput.reportValidity();
    } else if (age > 100) {
        emailInput.setCustomValidity("User must be alive\n(not older than 100)");
        emailInput.reportValidity();
    } else {
        emailInput.setCustomValidity("");
        emailInput.reportValidity();
    }

}

function passwordValidation() {
    var passwordinput = document.getElementById("cAPassword");
    var password = passwordinput.value;
    if (password == null) {
        passwordinput.setCustomValidity("please enter a password");
        passwordinput.reportValidity();
        return;
    }

    var outputText = "";

    const regSpecialCaracters = new RegExp('[^A-Za-z0-9]');
    const regNumbers = new RegExp('[0-9]');

    if (password.length < 8) {
        outputText += "password mut have a length over 8 \n";
    }

    if (!regSpecialCaracters.test(password)) {
        outputText += "password must contain a spacial caracter\n";
    }

    if (!regNumbers.test(password)) {
        outputText += "password must contain a number\n";
    }

    passwordinput.setCustomValidity(outputText);
    passwordinput.reportValidity();

}


function checkLengthOfInput(inputElementId, reqiredLength, message) {
    var inputElement = document.getElementById(inputElementId);
    if (inputElement == null || inputElement.value == null) {
        console.log("Error name der komponente" + inputElementId);
        inputElement.setCustomValidity("please enter data in " + message);
        inputElement.reportValidity();
        return;
    }
    var numberOfCharactersInInputText = inputElement.value.length;
    if (numberOfCharactersInInputText < reqiredLength) {
        inputElement.setCustomValidity(message + " must be al least " + reqiredLength + " caracters long");
        inputElement.reportValidity();
    } else {
        inputElement.setCustomValidity("");
        inputElement.reportValidity();
    }
}

function firstNameValidation() {
    checkLengthOfInput("cAFirstName", 2, "First Name");
}

function lastNameValidation() {
    checkLengthOfInput("cALastName", 2, "Last Name");
}

function submitValidation() {
    console.log("submit button presset")
    emailValidation();
    userNameValidation();
    ageValidation();
    passwordValidation();
    firstNameValidation();
    lastNameValidation();
}

if (document.URL.includes("createAcount.html")) {
    try {
        document.getElementById("cAEmail").addEventListener("input", emailValidation);
        document.getElementById("cAAge").addEventListener("input", ageValidation);
        document.getElementById("cAUserName").addEventListener("input", userNameValidation);
        document.getElementById("cAPassword").addEventListener("input", passwordValidation);
        document.getElementById("cAFirstName").addEventListener("input", firstNameValidation);
        document.getElementById("cALastName").addEventListener("input", lastNameValidation);
        document.getElementById("cASubmit").addEventListener("click", submitValidation);
    } catch (error) {
        console.log(error);
    }
}



