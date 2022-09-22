console.log("create acount Js loaded");


function emailValidation() {
    console.log("email function");
    var emailElement = document.getElementById("cAEmail");
    var email = emailElement.value;

    const regexEmail = new RegExp('/^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/');

    if (!regexEmail.test(email)) {
        emailElement.setCustomValidity("not a valide email adress");
        emailElement.reportValidity();
    } else {
        emailElement.setCustomValidity("");
        emailElement.reportValidity();
    }
}

function userNameValidation() {
    /*
    var userNameInput = document.getElementById("cAUserName");
    var userNameLenght = userNameInput.value.length;
    if (userNameLenght < 5) {
        userNameInput.setCustomValidity("Username must be al least 5 caracters long ");
        userNameInput.reportValidity();
    } else {
        userNameInput.setCustomValidity("");
        userNameInput.reportValidity();
    }*/
    checkLengthOfInput("cAUserName", 5, "User Name");
}

function ageValidation() {
    var emailInput = document.getElementById("cAAge");
    var age = emailInput.value;
    if (age < 13) {
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
    var outputText = "";

    const regSpecialCaracters = new RegExp('/[^A-Za-z0-9]/g');
    const regNumbers = new RegExp('/[0-9]/g');

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

try {
    document.getElementById("cAEmail").addEventListener("input", emailValidation);
    document.getElementById("cAAge").addEventListener("input", ageValidation);
    document.getElementById("cAUserName").addEventListener("input", userNameValidation);
    document.getElementById("cAPassword").addEventListener("input", passwordValidation);
    document.getElementById("cAFirstName").addEventListener("input", firstNameValidation);
    document.getElementById("cALastName").addEventListener("input", lastNameValidation);

} catch (error) {
    console.log(error);
}

