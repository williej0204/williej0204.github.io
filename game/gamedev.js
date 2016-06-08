
var ships = $("#ship");

$(document).keydown(function(e) {
  $(ship).keydown;
  switch(e.which) {
  
  //move left
  case 37:
    $(ship).animate({left: "-=40px"}, 'fast');
    break;

 //move up
  case 38:
    $(ship).animate({top: "-=40px"}, 'fast');
    break;

  //move right
  case 39:
    $(ship).animate({left: "+=40px"}, 'fast');
    break;

//move down
  case 40:
    $(ship).animate({top: "+=40px"}, 'fast');
    break;
      
  
  
  
  
  };
});

function collision($astroid, $ship) {
      var x1 = $astroid.offset().left;
      var y1 = $astroid.offset().top;
      var h1 = $astoid.outerHeight(true);
      var w1 = $astroid.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $ship.offset().left;
      var y2 = $ship.offset().top;
      var h2 = $ship.outerHeight(true);
      var w2 = $ship.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }

//Your jquery goes here

