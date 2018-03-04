// let grid = document.querySelector('.wrapper');
// let masonry = new Masonry( grid, {
//   // options
//   itemSelector: '.wrapper',
//   columnWidth: 200
// });

// // element argument can be a selector string
// //   for an individual element
// let masonry2 = new Masonry( grid, {
//  	itemSelector: '.fourth-image',
//  	columnWidth: 200
// });


var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 160,
  stagger: 30,
});

$grid.on( 'click', '.grid-item', function() {
  // change size of item via class
  $( this ).toggleClass('grid-item--gigante');
  // trigger layout
  $grid.masonry();
});

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