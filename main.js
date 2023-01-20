
import Chart from 'chart.js/auto'

var placeGraph = document.createElement ("canvas");
placeGraph.id= "mychart";
const table = document.getElementById("table1");

const parent = table.parentNode;

new Chart(placeGraph, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'N° of Crimes in millions',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

parent.insertBefore(placeGraph,table);