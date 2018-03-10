
$(".counter").each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});

// let plusSigns = document.querySelectorAll(".plus-button");

// for (var i = 0 ; i < plusSigns.length; i++) {
//    plusSigns[i].addEventListener("mouseover", function () {
//      TweenMax.to(this, 2, {rotation: 180});
//    });
// }

TweenMax.from(".main-animation1", 2, {opacity: 0, width: "0vw"});


TweenMax.to(".main-animation3", 0.4, {rotation: 10, y: 5, yoyo: true, repeat: 5, delay: 5});
TweenMax.to(".main-animation3_2", 0.4, {rotation: -10, x: 5, yoyo: true, repeat: 5, delay: 5});

TweenMax.to(".main-animation4", 1, {opacity: 1, delay: 3});
TweenMax.to(".main-animation4_2", 1, {opacity: 1, delay: 4});
TweenMax.to(".main-animation5", 0.5, {x: 5, y: 2, yoyo: true, repeat: 5});




var doughnutChart2 = new Chart(document.getElementById("doughnut-chart_day2"), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#CACAE5", "#fff"],
          data: [17, 300]
        }
      ]
    },
});





