square = document.getElementById('square');
widthInput = document.getElementById('width-input');
heightInput = document.getElementById('height-input');
rndClrBtn = document.getElementById('random-color-button');

updateHeight = () => {
    if (Number(heightInput.value) >= 0) {
        square.style.height = heightInput.value + 'px';
    }
}

updateWidth = () => {
    if (Number(widthInput.value) >= 0) {
        square.style.width = widthInput.value + 'px';
    }
}

randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

randomColor = () => {
    let color = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
    square.style.backgroundColor = color;
}

rndClrBtn.addEventListener("click", randomColor);
widthInput.addEventListener("input", updateWidth);
heightInput.addEventListener("input", updateHeight);
