function red() {
  let red = document.getElementById("red");
  red.classList.toggle("red");
}


function blue() {
  let blue = document.getElementById("blue");
  blue.classList.toggle("blue");
}


function green() {
  let green = document.getElementById("green");
  green.classList.toggle("green");
}


function yellow() {
  let yellow = document.getElementById("yellow");
  yellow.classList.toggle("yellow");
}


function namedisplay() {
    const name = document.getElementById("nameinput").value;
    const output = document.getElementById("nameoutput");
    output.textContent = "Hello, " + name;
}

