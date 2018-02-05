// Our labels along the x-axis
var years = ["10Th","12TH","Engineering"];
// For drawing the lines
var percentage = [87.64,62.46,68.4,0,100];


var ctx = document.getElementById("myChart");
ctx.height = 80;

var options = {
  scales: {
      xAxes: [{
          barPercentage: 0.4
      }]
  }
}
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: years,
    datasets: [
      { 
        data: percentage,
        backgroundColor: [
          '#00FF00',
          'rgba(54, 162, 235, 0.2)',
          '#FF3333'
          
      ],
      
        fillColor: ["rgba(220,220,220,0.5)","red", "orange"],
        label: "Percetage Graph",
        borderColor: "#3e95cf",
        fill: true
      }
    ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}

});
