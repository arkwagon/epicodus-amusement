$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 48){
    $("#tall").show();
  } else {
    $("#short").show();
  }


});
