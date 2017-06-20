$(document).ready(function(){

  console.log("Everything is ready to go");

  //Add the “selected” class to the first element of the menú
  $("ul li:first").addClass("selected");

  //Add the “middle” class to the middle articles in the <section> tags
  $(".container :nth-child(2)").addClass("middle");

  //Add the “highlighted” class to the .list-item even elements
  $("#list-container .list-item:odd").addClass("highlighted");

  //Add a “1px solid #eee” border to the last .list-item element
  $("#list-container .list-item:last").css('border', "2px solid red");

  //In the form, change the border color of the focused input
  $("input:focus").css('border', "2px solid red");

});
