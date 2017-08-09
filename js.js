$(document).ready(function(){
    for ( var i = 0; i < 16; i++) {
      for (var x = 0; x < 16; x++) {
          $("<div>").addClass("square").appendTo("#container");
      }

    }
    $(".square").hover(function(){
    $(this).css("background-color", function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
);

  });
  });
  function reset(){

      $(".square").remove();
      var size = prompt("How many boxes do you want this time?");
      console.log(size);
      $("#container").css("height", size*12);
      $("#container").css("width", size*12);
      for ( var i = 0; i < size; i++) {
        for (var x = 0; x < size; x++) {
            $("<div>").addClass("square").appendTo("#container");
        }

      }
      $(".square").hover(function(){
      $(this).css("background-color", function getRandomColor() {
          var letters = "0123456789ABCDEF";
          var color = "#"
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;

      });

    });
  };

  function randomColor(){
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var colorR = "rgb("+r+","+g+","+b+")";
/*
  console.log(r);
  console.log(g);
  console.log(b);
  console.log(colorR);
  */
  $("#color").css("background-color", colorR);
};
