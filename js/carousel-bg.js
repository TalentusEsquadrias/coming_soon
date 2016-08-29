/* CAROUSEL BACKGROUND */

$(document).ready(function(){

  var bg = 3;

  var around = setInterval(function(){

    if(bg%2 == 1){

      $("#carousel1").fadeOut(500);
      var esperar = setTimeout(
        function(){

          $("#carousel1").css("background", "url(images/bg"+bg+".jpg) no-repeat center center fixed");
          
        }, 500);

    }else if(bg%2 == 0){

      $("#carousel1").fadeIn(500);
      var esperar = setTimeout(
        function(){

          $("#carousel2").css("background", "url(images/bg"+bg+".jpg) no-repeat center center fixed");

       }, 500);

    }

    if(bg >= 16){

      bg = 0;

    }

    bg++;

  }, 5000);

});
