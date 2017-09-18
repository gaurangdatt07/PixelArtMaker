// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const colorPicker = document.getElementById('colorPicker');
const form = document.getElementById('size_picker');
const table = document.getElementById('piexel_canvas');
let rows;
let columns;
let color = "black";


function makeGrid() {
  rows = document.getElementById('input_height');
  columns = document.getElementById('input_width');
  var box='';

  for (var i = 0; i < rows; i++) {
    box +=  rows.insertRow(i);
      for (var j = 0; j<columns; j++) {
        box += rows.insertCell(j);
      }
  }
  table.innerHTML = box;


  function updateColorPicker(event) {
  color = document.getElementById("colorPicker").value;
}

function updateBoxColor(event) {
  var box = document.getElementById(this.id);
  box.style.backgroundColor = color;
}

function addListeners() {
  var boxes = document.getElementsByTagName("td");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", updateBoxColor, false);
  }
}



// Your code goes here!

}
