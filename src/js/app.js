
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

TweenMax.to(".headline .counter", 1, {opacity: 0, delay: 5});
TweenMax.to(".headline .gun", 1, {opacity: 1, display: "block", delay: 5});





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
       // labels: ["Under 17", "Over 17"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#CACAE5", "#fff"],
          data: [50, 300]
        }
      ]
    },
    options: {
      maintainAspectRatio: false
    },
});

var tl = new TimelineLite();
  tl.to("#gun-path1", 2, { morphSVG:"#1", fill:"#51598B"}, 0.5);
  tl.to("#gun-path2", 2, { morphSVG:"#1", fill:"#E8D7A3"}, 0.5);
  tl.to("#gun-path3", 2, { morphSVG:"#1", fill:"#EFE3BE"}, 0.5);
  tl.to("#gun-path4", 2, { morphSVG:"#1", fill:"#EEE2BD"}, 0.5);
  tl.to("#gun-path5", 2, { morphSVG:"#1", fill:"#F6F1DF"}, 0.5);
  tl.to("#gun-path6", 2, { morphSVG:"#1", fill:"#F6EFDB"}, 0.5);
  tl.to("#gun-path7", 2, { morphSVG:"#1", fill:"#E8D7A2"}, 0.5);
  tl.to("#gun-path8", 2, { morphSVG:"#1", fill:"#E8D7A2"}, 0.5);
  tl.to("#gun-path9", 2, { morphSVG:"#8", fill:"#E7D7A3"}, 0.5);
  tl.to("#gun-path10", 2, { morphSVG:"#8", fill:"#E6D6A3"}, 0.5);
  tl.to("#gun-path11", 2, { morphSVG:"#8", fill:"#E7D7A3"}, 0.5);

  // tl.to("#gun-path12", 1, { morphSVG:"#8", fill:"#E7D7A3"});


  // tl.to("#gun-path13", 1, { morphSVG:"#8", fill:"#F1F0EE"});
  // tl.to("#gun-path14", 1, { morphSVG:"#8", fill:"#F1F0EE"});
  // tl.to("#gun-path15", 1, { morphSVG:"#8", fill:"#F1F0EE"});
  // tl.to("#gun-path16", 1, { morphSVG:"#8", fill:"#F1F0EE"});















