let grid = document.querySelector('.wrapper');
let masonry = new Masonry( grid, {
  // options
  itemSelector: '.wrapper',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
let masonry = new Masonry( '.grid', {
  // options
});