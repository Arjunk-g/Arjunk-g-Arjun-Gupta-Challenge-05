//just console log SOMETHING the moment time 
var saveButton = document.getElementById("save");
var timeBlock = document.getElementById("TimeBlocks");
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
      <textarea id="inputID"class="inputI col-10"></textarea>
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
    var txt = $("#inputID").val();

  // window.localStorage.setItem('localstuff', JSON.stringify(inputID));
  // data = JSON.parse(window.localStorage.getItem('localstuff'));
  //   console.log(e);
  //   console.log(data);
    // alert(txt);
    // console.log(txt);

    window.localStorage.setItem("ketItem", txt);
    window.localStorage.getItem("keyItem");
  })
}
};    

console.log(localStorage);
