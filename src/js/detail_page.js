new AnimOnScroll( document.getElementById( 'grid' ), {
  minDuration : 0.4,
  maxDuration : 0.7,
  viewportFactor : 0.2
});

var ctx = document.getElementById('myChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
           labels: ["Week1", "Week2", "Week3", "Week4"],
           datasets: [{
               label: "Number of Tickets overtime",
               backgroundColor: 'rgb(111,212,252)',
               borderColor: 'rgb(111,212,252)',
               data: [200, 400, 900, 950],
               fill: false,
           }]
       },
});

var doughnutChart = new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#fff", "rgb(111,212,252)", "#C1C1C1"],
          data: [180, 110, 70]
        }
      ]
    },
});
