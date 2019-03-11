// Everything OK?
console.log('OK');

// Your Awesome Scripts
//$(document).ready(function(){
// Target your .container, .wrapper, .post, etc.
//   $("iframe").fitVids();
//});

$(function() {
  $('[data-spzoom]').spzoom({
    width: 500,
    height: 500,
    position: 'left',
  });
});