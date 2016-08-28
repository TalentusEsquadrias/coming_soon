/* CAROUSEL BACKGROUND */

$(document).ready(function(){

  var bg = 3;

  var around = setInterval(function(){

    if(bg%2 == 1){

      $("#carousel1").fadeOut(500);
      var esperar = setTimeout(
        function(){
          $("#carousel1").removeClass();
          $("#carousel1").addClass("carousel-bg"+bg)
        }, 500);

    }else if(bg%2 == 0){

      $("#carousel1").fadeIn(500);
      var esperar = setTimeout(
        function(){
          $("#carousel2").removeClass();
          $("#carousel2").addClass("carousel-bg"+bg)
       }, 500);

    }

    if(bg >= 16){

      bg = 0;

    }

    bg++;

  }, 5000);

});
