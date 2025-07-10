const url = 'http://exercise.develop.maximaster.ru/service/cpu/'; 
const username = 'cli';
const password = '12344321';
let delayTime = 5000;
const dataArray = [];
const labels = [];
let numOfErr = 0;
const info = document.getElementById('info');

const createGraph = () => {
    document.getElementById('mainChartWrapper').innerHTML='';
    const ctx = document.createElement('canvas');
    ctx.classList.add('mainChart')
    document.getElementById('mainChartWrapper').append(ctx);
    
    const graphData = {
        labels: labels, 
        datasets: [{
            label: 'График загруженности процессора',
            data: [...dataArray],
            fill: true,
            borderColor: 'rgb(48, 65, 223)',
            backgroundColor: 'rgba(48, 65, 223, 0.1)',
            tension: 0
        }]
    };
    
    const config = {
      type: 'line',
      data: graphData,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Номер замера',
              font: {
                family: 'Courier New',
                size: 14,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: 'Значение CPU', 
              font: {
                family: 'Courier New',
                size: 14,
              },
            },
          },
        },
      },
    };
    
    new Chart(ctx, config);
}

const callout = () => {
    fetch(url, {
      headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
      },
    })
    .then(response => {
      if (!response.ok) { 
        dataArray.push(dataArray[dataArray.length - 1]); 
        labels.push(dataArray.length);
        numOfErr++;
        console.log('Кол-во замеров:', dataArray.length, 'Кол-во ошибок:', numOfErr, 'Процент ошибок:', numOfErr/dataArray.length);

        createGraph();

        info.innerHTML = `Кол-во замеров: ${dataArray.length}, Кол-во ошибок: ${numOfErr}, Процент ошибок: ${numOfErr/dataArray.length}`

        throw new Error(`Ошибка! Статус: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        dataArray.push(data);
        labels.push(dataArray.length);
        console.log(data);
        console.log(labels);
        console.log(dataArray);
        console.log('Кол-во замеров:', dataArray.length, 'Кол-во ошибок:', numOfErr, 'Процент ошибок:', numOfErr/dataArray.length);

        createGraph();

        info.innerHTML = `Кол-во замеров: ${dataArray.length}, Кол-во ошибок: ${numOfErr}, Процент ошибок: ${numOfErr/dataArray.length}`
    })
    .catch(error => {
      console.log('Ошибка: ' + error.message);
    })
    .finally(() => {
        setTimeout(callout, delayTime);
    }); 
} 

callout();