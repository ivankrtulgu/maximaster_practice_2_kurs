numRows = 3;
numCols = 3;

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