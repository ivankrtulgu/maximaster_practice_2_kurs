document.getElementById('headerSearchButton').addEventListener('click', () => {
    const headerSearchElement = document.getElementById('headerSearch');
    if (headerSearchElement.value.trim() === '') {
        document.getElementById('headerSearch').classList.toggle('header__input--visually-hidden');
    } 
})