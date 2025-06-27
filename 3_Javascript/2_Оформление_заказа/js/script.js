ymaps.ready(init);
var myMap;
let isAdressSelected = false;

function init () {
    myMap = new ymaps.Map("map", {
        center: [54.1938, 37.6171], // Тула
        zoom: 11
    }, {
        balloonMaxWidth: 200,
        searchControlProvider: 'yandex#search'
        
    });

    myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentHeader:'Адрес доставки выбран!',
                contentBody:'<p>Ваш заказ придет по следующим координатам:</p>' +
                    '<p>Координаты: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                contentFooter:'<sup>Для смены адреса щёлкните еще раз</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
        
    });

    myMap.events.add('contextmenu', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentHeader:'Адрес доставки выбран!',
                contentBody:'<p>Ваш заказ придет по следующим координатам:</p>' +
                    '<p>Координаты: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                contentFooter:'<sup>Для смены адреса щёлкните еще раз</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });
    
    myMap.events.add('balloonopen', function (e) {
        myMap.hint.close();
        isAdressSelected = true;
    });

    myMap.events.add('balloonclose', function(e) {
        isAdressSelected = false;
    });
}

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
    if (!isAdressSelected) {
        return document.getElementById("fail-text-adress");
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