console.log("Creating, Removing & Replacing Elements");
let elements = document.createElement("li");
console.log(elements);
//Adding class name to the element
elements.className = "childul";
elements.id = "createdli";
elements.setAttribute('title',"mytitle");
elements.innerText="This is appended from javascript";
console.log(elements);
let ul=document.querySelector("ul.this");
console.log(ul);
ul.appendChild(elements);
//appends elements under ul
let text=document.createTextNode("This is a text node");
text.className = "childul";
elements.appendChild(text);

let elem2=document.createElement("h3");
elem2.id="elem2";
elem2.className="elem2";
let tnode=document.createTextNode("This is a node for elem2");