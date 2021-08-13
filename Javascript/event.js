console.log("More on JavaScript Events");
let btn = document.getElementById("btn");
btn.addEventListener("click", func1);
//left-click only
//dblclick for double click
function func1(e) {
  console.log(e);
  e.preventDefault();
  //this is added so form does,t get submitted when the clicked
}

btn.addEventListener("mousedown", func2);
function func2(e) {
  console.log("Mousedown", e);
  e.preventDefault();
  //this is added so form does,t get submitted when the clicked
}

document.querySelector(".no").addEventListener("mouseenter", func3);
function func3(e) {
  console.log("Your mouse entered class no", e);
  e.preventDefault();
  //this is added so form does,t get submitted when the clicked
}

document.querySelector(".no").addEventListener("mouseleave", func4);
function func4(e) {
  console.log("Your mouse exited class no", e);
  e.preventDefault();
  //this is added so form does,t get submitted when the clicked
}

document
  .querySelector(".container")
  .addEventListener("mousemove", function (a) {
    console.log("Mouse is moved");
    console.log(a.offsetX, a.offsetY);
    document.body.style.backgroundColor = `rgb(${a.offsetX},${a.offsetY},${
      a.offsetX - a.offsetY
    })`;
    a.preventDefault();
    //this is added so form does,t get submitted when the clicked
  });
