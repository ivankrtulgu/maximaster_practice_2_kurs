//Кнопки header

document.getElementById('headerSearchButton').addEventListener('click', () => {
    const headerSearchElement = document.getElementById('headerSearch');
    if (headerSearchElement.value.trim() === '') {
        document.getElementById('headerSearch').classList.toggle('header__input--visually-hidden');
    } 
})

headerButtonLogIn = document.getElementById('headerButtonLogIn');

headerButtonLogIn.addEventListener('click', () => { 
    loginWindow.classList.toggle('visually-hidden');
})

// Burger menu

document.getElementById('headerBurgerMenuButton').addEventListener('click', () => {
    document.querySelector('.nav__list').classList.toggle('nav__list--active');
})