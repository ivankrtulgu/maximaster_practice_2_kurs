telField = document.getElementById("tel-field");
mainForm = document.getElementById("main-form");

isNum = () => {
    symb = telField.value[telField.value.length - 1];
    if (!(symb >= '0' && symb <= '9')) {
        telField.value = telField.value.substr(0, telField.value.length - 1)
    }
}

formSubmitEvent = () => {
    console.log(1);
}

telField.addEventListener("input", isNum)