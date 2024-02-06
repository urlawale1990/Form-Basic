let fullNameInput = document.getElementById("fullname")
let emailInput = document.getElementById("email")
let phoneNumberInput = document.getElementById("phonenumber");
let fullNameAlert = document.getElementById("enter-fullname-alert")
let emailAlert = document.getElementById("enter-email-alert")
let phoneAlert = document.getElementById("enter-phonenumber-alert")
let button = document.getElementById("button")
let buttonAlert = document.getElementById("error-message")


function validateFullNameInput() {
    let fullName = fullNameInput.value
    if (fullName.length == 0) {
        fullNameAlert.innerHTML = "Please enter a full name"
        fullNameInput.style.border = "none"
        fullNameInput.style.outline = "1px  solid red"
    } else if (!fullName.match(/^[^\d0-9]+$/)) {
        fullNameAlert.innerText = "You can't enter numbers or special character in your name"

    } else {
        fullNameAlert.innerText = ""
        fullNameInput.style.outline = "1px solid green"
    }

}

fullNameInput.addEventListener("keyup", function() {
    validateFullNameInput();
})


function validateEmailInput() {
    let userEmail = emailInput.value
    if (userEmail.length == 0) {
        emailAlert.innerText = "Please provide an Email address.";
        emailInput.style.border = "none"
        emailInput.style.outline = "1px solid red"
    } else if (!userEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailAlert.innerText = " Enter a valid email address"
        emailInput.style.border = "none"
        emailInput.style.outline = "1px solid red"
    } else {
        emailAlert.innerText = "";
        emailInput.style.outline = "1px solid green";
    }
}

console.log(emailInput)

emailInput.addEventListener("keyup", function() {
    validateEmailInput();
})

function validatePhoneNumber() {
    let userPhoneNumber = phoneNumberInput.value
    if (userPhoneNumber.length !== 11) {
        phoneAlert.innerText = "Phone number must be 11 digits"
        phoneNumberInput.style.border = "none"
        phoneNumberInput.style.outline = "1px solid red"
    } else {
        phoneAlert.innerText = " "
        phoneNumberInput.style.outline = "1px solid green"
    }
}

phoneNumberInput.addEventListener("keyup", function() {
    validatePhoneNumber()
})


function submitButtonValidation() {
    if (!validateEmailInput() || validateFullNameInput() || validatePhoneNumber()) {
        buttonAlert.innerText = "Complete the form"
        button.style.border = "none"



    } else {
        buttonAlert.innerText = "Form Sumbitted"

    }
}

button.addEventListener("click", function() {
    submitButtonValidation()
})