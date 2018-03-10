
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
  tl.to("#1", 1, { morphSVG:"#gun-path1", fill:"#51598B"});
  tl.to("#1", 1, { morphSVG:"#gun-path2", fill:"#E8D7A3"});
  tl.to("#1", 1, { morphSVG:"#gun-path3", fill:"#EFE3BE"});
  tl.to("#1", 1, { morphSVG:"#gun-path4", fill:"#EEE2BD"});
  tl.to("#1", 1, { morphSVG:"#gun-path5", fill:"#F6F1DF"});
  tl.to("#1", 1, { morphSVG:"#gun-path6", fill:"#F6EFDB"});
  tl.to("#1", 1, { morphSVG:"#gun-path7", fill:"#E8D7A2"});
  tl.to("#1", 1, { morphSVG:"#gun-path8", fill:"#E8D7A2"});
  tl.to("#8", 1, { morphSVG:"#gun-path9", fill:"#E7D7A3"});
  tl.to("#8", 1, { morphSVG:"#gun-path10", fill:"#E6D6A3"});
  tl.to("#8", 1, { morphSVG:"#gun-path11", fill:"#E7D7A3"});

  tl.to("#8", 1, { morphSVG:"#gun-path12", fill:"#E7D7A3"});


  tl.to("#8", 1, { morphSVG:"#gun-path13", fill:"#F1F0EE"});
  tl.to("#8", 1, { morphSVG:"#gun-path14", fill:"#F1F0EE"});
  tl.to("#8", 1, { morphSVG:"#gun-path15", fill:"#F1F0EE"});
  tl.to("#8", 1, { morphSVG:"#gun-path16", fill:"#F1F0EE"});















