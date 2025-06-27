const telField = document.getElementById("tel-field");
const mainForm = document.getElementById("main-form");

isNum = () => {
    symb = telField.value[telField.value.length - 1];
    if (!(symb >= '0' && symb <= '9')) {
        telField.value = telField.value.substr(0, telField.value.length - 1);
    }
}

checkValidity = () => {
    const fioField = document.getElementById("fio-field"); 
    const telField = document.getElementById("tel-field"); 
    const emailField = document.getElementById("email-field"); 
    if (fioField.value.trim() === '') {
        return document.getElementById("fail-text-fio");
    }    
    if (telField.value.trim() === '') {
        return document.getElementById("fail-text-tel");
    }   
    if (emailField.value.trim() === '') {
        return document.getElementById("fail-text-email");
    }
}

formSubmitEvent = () => {
    const successText = document.getElementById("success-text"); 
    const failText = document.getElementById("fail-text"); 
    for (el of document.querySelectorAll(".fail-text")) {
        el.classList.add('visually-hidden');
    }
    for (el of document.querySelectorAll(".success-text")) {
        el.classList.add('visually-hidden');
    }
    if (!this.checkValidity()) {
        failText.classList.add('visually-hidden');
        successText.classList.remove('visually-hidden');
    }
    else {
        successText.classList.add('visually-hidden');
        failText.classList.remove('visually-hidden');
        this.checkValidity().classList.remove('visually-hidden');
    }
}   

telField.addEventListener("input", isNum)