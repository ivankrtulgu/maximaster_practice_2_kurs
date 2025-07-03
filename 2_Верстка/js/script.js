//Поле поиска в header

document.getElementById('headerSearchButton').addEventListener('click', () => {
    const headerSearchElement = document.getElementById('headerSearch');
    if (headerSearchElement.value.trim() === '') {
        document.getElementById('headerSearch').classList.toggle('header__input--visually-hidden');
    } 
})

//Кнопки слайдера

const sliderEl = document.querySelector('.slider__images');

document.getElementById('sliderButtonPrev').addEventListener('click', () => {
    const el = document.querySelector('.slider__image--first');
    if (el.previousElementSibling) {
        el.previousElementSibling.classList.add('slider__image--first');
        el.classList.remove('slider__image--first');
        sliderEl.scrollTo({
            left: document.querySelector('.slider__image--first').offsetLeft,
            behavior: 'smooth'
        });
    }
})

document.getElementById('sliderButtonNext').addEventListener('click', () => {
    const el = document.querySelector('.slider__image--first');
    if (el.nextElementSibling) {
        el.nextElementSibling.classList.add('slider__image--first');
        el.classList.remove('slider__image--first');
        sliderEl.scrollTo({
            left: document.querySelector('.slider__image--first').offsetLeft,
            behavior: 'smooth'
        });
    }
})