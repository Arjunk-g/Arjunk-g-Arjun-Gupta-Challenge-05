//just console log SOMETHING the moment time 
// var idiotInput = document.querySelectorAll(idiotInput);
var saveButton = document.getElementById("save");
var timeBlock = document.getElementById("TimeBlocks")

var now = moment();
console.log(now);


//displays the date using JQuery
todaysDate = $("#currentDay");
function displayDate() {
  var today = moment()
  todaysDate.text(today);

}
displayDate()

function renderTimeBlocks() {
  for (let i = 9; i < 18; i++) {
    var time = i;
    if(time>12){
      time -= 12;
      time += " PM";
    }
    else{
      time += " AM";
    }
    var thisCard = `
    <div class="time-block row">
      <h3 class="col-1">${time}</h3>
      <textarea class="inputI col-10"></textarea>
        <button class="save col-1">SAVE</button>
    </div> 
`
timeBlock.innerHTML += thisCard
  }
addListeners();
}
renderTimeBlocks();
function addListeners() {
let saveButtons = document.getElementsByClassName("save");
for (let i = 0; i < saveButtons.length; i++) {
  const element = saveButtons[i];
  element.addEventListener("click", function(e){
    console.log(e);
  })
}
};


saveButton.addEventListener("click", function (event) {
  event.preventDefault();

})
// function saveInput(){
//   var idiotsInput = localStorage.getItem('Some text...');
//   localStorage.setItem('myText', idiotsInput);
// }

// function get() {
//   var storedValue = localStorage.getItem('text');
//   if(storedValue) {
//       document.getElementById('textfield').value = storedValue;
//   }
// }
// var a = moment().toString();
// document.getElementById("todaysdate") = a

// console.log("time");


// var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
// $("#2a").text(weekDay);


// $( function() {
//     $( "#selectable" ).selectable();
//  }
// trying to set up local storage
// var UUP = ["bruh", "wtf"];

// let inputObj = JSON.stringify(UUP);

// localStorage.setItem("UUP", inputObj);

// let inputObjBack = JSON.parse(localStorage.getItem(UUP));

// console.log(inputObjBack);
