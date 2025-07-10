if (localStorage.getItem("numRows")){
    numRows = localStorage.getItem("numRows");
}
else{
    numRows = 3;
}

if (localStorage.getItem("numCols")){
    numCols = localStorage.getItem("numCols");
}
else{
    numCols = 3;
}

const createTable = () => {
    const mainTableBody = document.querySelector('.main-table-body');
    for (let i = 0; i < numRows; i++) {
        const rw = document.createElement('tr');
        mainTableBody.append(rw);
    }
    for (let i of mainTableBody.children) {
        for (let j = 0; j < numCols; j++){
            let el_td = document.createElement('td');
            let el_input = document.createElement('input');
            el_input.classList.add('inputField')
            el_input.classList.add('visually-hidden')
            el_td.append(el_input);
            i.append(el_td);
        }
    }

    let numOfRow = 0;
    for(let i of mainTableBody.children) {
        let numOfCol = 0;
        for(let j of i.children) {
            if (localStorage[[numOfCol,numOfRow]]){
                j.firstElementChild.value = localStorage[[numOfCol,numOfRow]];
            }
            numOfCol++
        }
        numOfRow++
    }
}

createTable();

console.log(numRows);
console.log(numCols);

const addRow = () => {
    let rw = document.createElement('tr')
    for (let i = 0; i < numCols; i++) {
        let el_td = document.createElement('td');
        let el_input = document.createElement('input');
        el_input.classList.add('inputField')
        el_input.classList.add('visually-hidden')
        el_td.append(el_input);
        rw.append(el_td);
    }
    document.querySelector('.main-table-body').append(rw);
    numRows++;
}

const addCol = () => {
    for (let i of document.querySelector('.main-table-body').children) {
        let el_td = document.createElement('td');
        let el_input = document.createElement('input');
        el_input.classList.add('inputField')
        el_input.classList.add('visually-hidden')
        el_td.append(el_input);
        i.append(el_td);
    }
    numCols++;
}

const removeRow = () => {
    console.log(numRows);
    if (numRows === 1){
        return;
    } 

    for (let i of document.querySelector('.main-table-body').lastElementChild.children) {
        if (i.firstElementChild.value.trim() !== "") {
            if (confirm('В удаляемой строке остались данные, продолжить удаление?')){
                break;
            }
            else {
                return;
            }
        }
    }

    document.querySelector('.main-table-body').lastElementChild.remove();

    numRows--;
}


const removeCol = () => {
    console.log(numCols);
    if (numCols === 1){
        return;
    } 

    for (let i of document.querySelector('.main-table-body').children) {
        if (i.lastElementChild.firstElementChild.value.trim() !== "") {
            if (confirm('В удаляемом столбце остались данные, продолжить удаление?')){
                break;
            }
            else {
                return;
            }
        }
    }

    for (let i of document.querySelector('.main-table-body').children) {
        i.lastElementChild.remove();
    }

    numCols--;
}


document.getElementById('row-buttons__add-row').addEventListener('click', addRow);
document.getElementById('row-buttons__remove-row').addEventListener('click', removeRow);
document.getElementById('column-buttons__add-column').addEventListener('click', addCol);
document.getElementById('column-buttons__remove-column').addEventListener('click', removeCol);

window.addEventListener("unload", function() {
    const mainTableBody = document.querySelector('.main-table-body');
    let numOfRow = 0;
    for(let i of mainTableBody.children) {
        let numOfCol = 0;
        for(let j of i.children) {
            localStorage[[numOfCol,numOfRow]] = j.firstElementChild.value;
            numOfCol++
        }
        numOfRow++
    }
    localStorage["numRows"] = numRows;   
    localStorage["numCols"] = numCols; 
});