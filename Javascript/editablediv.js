console.log("Editable div");
//You have to create a div and inject it into page which contains the heading
//whenever someone clicks on the div, it should be converted into an editable item.
//whenever user clicks away save the note into the local storage
let div = document.createElement("div");
div.className = "division";
div.id = "div";
div.innerHTML =
  "<br><div>This is a division created with the help of javascript</div>";
console.log(div);
head = document.querySelector("h1");
console.log(head);
head.appendChild(div);
div.addEventListener("click", func);
function func(element) {
  console.log(element);
}
