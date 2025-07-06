// Логин

loginWindow = document.querySelector('.login');
loginButtonNaveNotAccount = document.getElementById('loginButtonNaveNotAccount');
loginButtonNaveAccount = document.getElementById('loginButtonHaveAccount');

loginFieldEmail.value = localStorage['user_email'];

loginButtonForgotPassword = document.getElementById('loginButtonForgotPassword');
loginButtonLogIn = document.getElementById('loginButtonLogIn');
loginContainer = document.querySelector('.login__container');
loginTitle  = document.querySelector('.login__title');
loginButtonClose = document.getElementById('loginButtonClose');

loginFieldRepeatPassword = document.getElementById('loginFieldRepeatPassword');
loginFieldPassword = document.getElementById('loginFieldPassword');

loginMessagePasswordReset = document.querySelector('.login__message-password-reset');
loginErrorMessage = document.querySelector('.login__error-message');

const login_singup_toggle = () => {
    for (let el of document.querySelector('.login__row:last-of-type').children) {
        el.classList.toggle('visually-hidden');
    }
    loginButtonNaveNotAccount.classList.toggle('visually-hidden');
    loginButtonNaveAccount.classList.toggle('visually-hidden');
    loginButtonForgotPassword.classList.toggle('visually-hidden');
    loginContainer.classList.toggle('login__container--singup');
}

loginButtonNaveNotAccount.addEventListener('click', login_singup_toggle)
loginButtonNaveAccount.addEventListener('click', login_singup_toggle)

loginButtonNaveNotAccount.addEventListener('click', () => {
    loginButtonLogIn.textContent = 'Sign Up';
    loginTitle.textContent = 'Sign Up';
    loginFieldRepeatPassword.setAttribute('required', true);
    loginMessagePasswordReset.classList.add('visually-hidden')
    loginErrorMessage.classList.add('visually-hidden');

})

loginButtonNaveAccount.addEventListener('click', () => {
    loginButtonLogIn.textContent = 'Log In';
    loginTitle.textContent = 'Log In';
    loginFieldRepeatPassword.removeAttribute('required');
    loginMessagePasswordReset.classList.add('visually-hidden')
    loginErrorMessage.classList.add('visually-hidden');

})

loginButtonClose.addEventListener('click', () => {
    loginWindow.classList.toggle('visually-hidden');
    loginMessagePasswordReset.classList.add('visually-hidden')
    loginErrorMessage.classList.add('visually-hidden');
})

// loginButtonLogIn.addEventListener('click', () => {
//     if (!('visually-hidden' in loginFieldRepeatPassword.classList) && (loginFieldRepeatPassword.value !== loginFieldPassword.value)) {
//         loginMessagePasswordsNotMatch.classList.remove('visually-hidden');
//         return;
//     }
//     localStorage['user_email'] = loginFieldEmail.value;
// })

const loginFormIsValid = () => {
    if ((!(loginFieldRepeatPassword.classList.contains('visually-hidden')) && (loginFieldRepeatPassword.value !== loginFieldPassword.value)) ) {
        loginErrorMessage.classList.remove('visually-hidden');
        loginErrorMessage.textContent = 'Указанные пароли не совпадают';
        return false;
    }   
    // if (loginFieldEmail.value.trim() === '' || loginFieldRepeatPassword.value.trim() === '' || loginFieldPassword.value.trim() === '') {
    //     loginErrorMessage.classList.remove('visually-hidden');
    //     loginErrorMessage.textContent = 'Часть полей не заполнено!';
    //     return false;
    // }
    return true;
}   

loginWindow.addEventListener('submit', (event) => {
    if (!loginFormIsValid()) {
        event.preventDefault();
        return;
    }
    loginErrorMessage.classList.remove('visually-hidden');
    localStorage['user_email'] = loginFieldEmail.value;
})

loginButtonForgotPassword.addEventListener('click', () => {
    loginMessagePasswordReset.classList.remove('visually-hidden')
})

singUpShortFormButton = document.getElementById('singUpShortFormButton');

// let singUpShortFormButtonEvent = new Event("click");

if (singUpShortFormButton) {
    singUpShortFormButton.addEventListener('click', () => {
        localStorage['user_email'] = singUpShortFormInputField.value;
        loginFieldEmail.value = singUpShortFormInputField.value;
        loginWindow.classList.toggle('visually-hidden');
    })
}

loginButtonShowPassword = document.getElementById('loginButtonShowPassword');
loginButtonShowPassword.addEventListener('click', () => {
    const type = loginFieldPassword.getAttribute('type');
    if (type === 'password') {
        loginFieldPassword.setAttribute('type', 'text');
        loginFieldRepeatPassword.setAttribute('type', 'text');
    }
    else {
        loginFieldPassword.setAttribute('type', 'password');
        loginFieldRepeatPassword.setAttribute('type', 'password');
    }
})
