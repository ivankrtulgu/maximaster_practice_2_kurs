const url = 'http://exercise.develop.maximaster.ru/service/products/'; 
const username = 'cli';
const password = '12344321';
let itemsCount = 0;
let globalData = [];

fetch(url, {
  headers: {
    'Authorization': 'Basic ' + btoa(username + ':' + password),
  },
})
.then(response => response.json())
.then(data => {
  for (let item of data){
    let tr = document.createElement('tr');
    tr.className = "main-table__body-row";

    let td_ID = document.createElement('td');
    td_ID.innerHTML = itemsCount;
    item.ID = itemsCount;

    let td_name = document.createElement('td');
    td_name.innerHTML = item.name;

    let td_quantity = document.createElement('td');
    td_quantity.innerHTML = item.quantity;

    let td_price = document.createElement('td');
    td_price.innerHTML = item.price;

    let td_sum = document.createElement('td');
    td_sum.innerHTML = Number(item.price)*Number(item.quantity);

    tr.append(td_ID);
    tr.append(td_name);
    tr.append(td_quantity);
    tr.append(td_price);
    tr.append(td_sum);

    let mainTableBody = document.querySelector(".main-table__body");
    mainTableBody.append(tr);

    itemsCount++;
  }
  globalData = data;
})
.catch(error => {
  alert('Ошибка: ' + error.message);
});

let minInput = document.getElementById('header-form__input-min');
let maxInput = document.getElementById('header-form__input-max');

minInput.addEventListener('change', () => {
  if (minInput.value.trim() === '' || Number(minInput.value) === 0) return;
  if (maxInput.value.trim() !== '' && maxInput.value !== '0') {
      if (Number(minInput.value) > Number(maxInput.value)) {
        minInput.value = maxInput.value;
      }
  }
})

maxInput.addEventListener('change', () => {
  if (maxInput.value.trim() === '' || Number(maxInput.value) === 0) return;
  if (Number(maxInput.value) < Number(minInput.value)) {
    maxInput.value = minInput.value;
  }
})

document.getElementById('header-form__button').addEventListener('click', () => {
    let minValue = minInput.value;
    let maxValue = maxInput.value;

    document.querySelector(".nodata-text").classList.add('visually-hidden');
    document.querySelector(".main-table").classList.remove('visually-hidden');


    let mainTableBody = document.querySelector(".main-table__body");
    mainTableBody.innerHTML = '';

    let tableIsEmpty = true;

    for (let item of globalData){
        if ((Number(item.price) > Number(minValue) || Number(minValue) === 0 || minValue.trim() === '') && 
        (Number(item.price) < Number(maxValue) || Number(maxValue) === 0 || maxValue.trim() === '')) {
          let tr = document.createElement('tr');
          tr.className = "main-table__body-row";
  
          let td_ID = document.createElement('td');
          td_ID.innerHTML = item.ID;
  
          let td_name = document.createElement('td');
          td_name.innerHTML = item.name;
  
          let td_quantity = document.createElement('td');
          td_quantity.innerHTML = item.quantity;
  
          let td_price = document.createElement('td');
          td_price.innerHTML = item.price;
  
          let td_sum = document.createElement('td');
          td_sum.innerHTML = Number(item.price)*Number(item.quantity);
  
          tr.append(td_ID);
          tr.append(td_name);
          tr.append(td_quantity);
          tr.append(td_price);
          tr.append(td_sum);
  
          let mainTableBody = document.querySelector(".main-table__body");
          mainTableBody.append(tr);
          tableIsEmpty = false;
        }
    }

    if (tableIsEmpty) {
      document.querySelector(".main-table").classList.add('visually-hidden');
      document.querySelector(".nodata-text").classList.remove('visually-hidden');
    }
})