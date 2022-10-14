//just console log SOMETHING
var idiotInput = document.querySelectorAll(idiotInput);
var now = moment();
console.log(now);

todaysDate = $("#currentDay");
function displayDate() {
    var today = moment()
    todaysDate.text(today);

  }
displayDate()






// var a = moment().toString(); 
// document.getElementById("todaysdate") = a

// console.log("time");


// var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
// $("#2a").text(weekDay);


// $( function() {
//     $( "#selectable" ).selectable();
//   } );

$( function() {
  $( ".widget input[type=submit], .widget a, .widget button" ).button();
  $( "button, input, a" ).on( "click", function( event ) {
    event.preventDefault();
  } );
} );