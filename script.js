function red() {
  let red = document.getElementById("red");
  red.classList.toggle("red");
}


function blue() {
  let blue = document.getElementById("blue");
  blue.classList.add("blue");
}


function green() {
  let green = document.getElementById("green");
  green.classList.add("green");
}


function yellow() {
  let yellow = document.getElementById("yellow");
  yellow.classList.add("yellow");
}


function namedisplay() {
    const name = document.getElementById("nameinput").value;
    const output = document.getElementById("nameoutput");
    if(name){
        output.textContent = "," + name;
    }
    else{
        output.textContent ="";
    }
}
//truthy value and falsy value
