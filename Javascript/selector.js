console.log("DOM selector");
//Single element selector
let elements = document.getElementById("first");
console.log(elements);
console.log(elements.className);
console.log(elements.parentNode);
console.log(elements.childNodes);
elements.style.color = "red";
elements.innerText = "Replaced oiginal text";
elements.innerHTML = "<b>Can use HTML tags now</b>";

//Query selector
let que = document.querySelector(".child");
console.log(que);
que = document.querySelector("#first");
console.log(que);
que = document.querySelector("h1");
//Searches for h1 in document -- first one
console.log(que);
que.style.color = "green";

//Multiple element selector
let ele = document.getElementsByClassName("container");
console.log(ele[0]);
console.log(ele[0].getElementsByClassName("child"));
let elem = document.getElementsByTagName("div");
console.log(elem);

Array.from(elem).forEach((element) => {
  console.log(element);
  element.style.color="blue";
});
