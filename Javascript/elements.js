console.log("Creating, Removing & Replacing Elements");
let elements = document.createElement("li");
console.log(elements);
//Adding class name to the element
elements.className = "childul";
elements.id = "createdli";
elements.setAttribute("title", "mytitle");
elements.innerText = "This is appended from javascript";
console.log(elements);
let ul = document.querySelector("ul.this");
console.log(ul);
ul.appendChild(elements);
//appends elements under ul
let text = document.createTextNode("This is a text node");
text.className = "childul";
elements.appendChild(text);

let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("This is a node for elem2");
elem2.appendChild(tnode);
elements.replaceWith(elem2);
let myul = document.getElementById("myul");
myul.replaceChild(elem2, document.getElementById("fui"));
myul.removeChild(document.getElementById("elem2"));
console.log(elem2);
let pr = elem2.getAttribute("id");
console.log(elem2, pr);
elem2.removeAttribute("id");
console.log(elem2,pr);

// Practise
let a =document.createElement("h1");
a.className="class";
a.innerHTML=`<a href="https://www.google.com">google</a>`;
console.log(a);
let ap=document.querySelector(".container");
ap.appendChild(a);