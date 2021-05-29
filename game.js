var header = document.querySelector("h1");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color
  }

function changeheadercolor() {
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

setInterval("changeheadercolor()", 500);


var restart = document.querySelector("#b");
var box = document.querySelectorAll("td");

function clearBoard(){
  for (var i = 0; i < box.length; i++) {
    box[i].textContent= "";
  }}

restart.addEventListener('click',clearBoard)

var start = document.querySelectorAll("#one")

function suru(){
  if(this.textContent === ""){
    this.textContent = "X";
}else if (this.textContent ==="X") {
    this.textContent = "O";
}else {
    this.textContent = "";
}}

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click',suru)
}
