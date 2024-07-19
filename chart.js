//Chart
const selectedArtists = localStorage.getItem("selectedArtist");

const myItems = items.filter((item) => item.artist === selectedArtists);

const soldItems = myItems.filter((item) => item.priceSold !== null && item.dateSold !== null);

const soldPrices = soldItems.map((item) => item.priceSold);

const now = new Date();
let soldDates = [];


const chartContainer = document.getElementById('myChart');

const sevenDays = document.getElementById('7-days');
const fourteenDays = document.getElementById('14-days');
const thirtyDays = document.getElementById('30-days');

sevenDays.addEventListener('click', function(){
  for(let i = 1; i <= 7; i++){
    soldDates.push(`${i}`);
  }
});

fourteenDays.addEventListener('click', function(){
  for(let i = 1; i <= 14; i++){
    soldDates.push(`${i}`);
  }

});

thirtyDays.addEventListener('click', function(){
  for(let i = 1; i <= 30; i++){
    soldDates.push(`${i}`);
  }

});

const chartConfiguration = {
  type: 'bar',
  data: {
    labels: soldDates,
    datasets: [
      {
        backgroundColor: '#A16A5E',
        label: 'Amount',
        data: soldPrices, 
      },
    ],
  },
  options: {
    indexAxis: 'y',
  }
}

const myChart = new Chart(chartContainer, chartConfiguration);