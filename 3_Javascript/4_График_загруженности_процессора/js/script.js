const url = 'http://exercise.develop.maximaster.ru/service/cpu/'; 
const username = 'cli';
const password = '12344321';
let delayTime = 5000;
const dataArray = [];
let numOfErr = 0;

const callout = () => {
    fetch(url, {
      headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
      },
    })
    // .then(response => response.json())
    .then(response => {
      if (!response.ok) { 
        dataArray.push(dataArray[dataArray.length - 1]); 
        numOfErr++;
        console.log('Кол-во замеров:', dataArray.length, 'Кол-во ошибок:', numOfErr, 'Процент ошибок:', numOfErr/dataArray.length);
        throw new Error(`Ошибка! Статус: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        dataArray.push(data);
        console.log(data);
        console.log(dataArray);
        console.log('Кол-во замеров:', dataArray.length, 'Кол-во ошибок:', numOfErr, 'Процент ошибок:', numOfErr/dataArray.length);
    })
    .catch(error => {
      console.log('Ошибка: ' + error.message);
    })
    .finally(() => {
        setTimeout(callout, delayTime);
    }); 
} 

callout();