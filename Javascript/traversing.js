console.log("Children, Parent and Traversing DOM");
let cont = document.querySelector(".no");
console.log(cont);
cont = document.querySelector(".container");
console.log(cont);
console.log(cont.childNodes);
// this also counts text comment and new lines
console.log(cont.children);
//this doesn't take comments, newline etc
let nodeName = cont.childNodes[0].nodeName;
console.log(nodeName);
nodeName = cont.childNodes[1].nodeType;
console.log(nodeName);
// Note types --
//1 >> Element
//2 >> Attributes
//3 >> Text Node
//8 >> Comment
//9 >> Document
// 10 >> doctype

let container = document.querySelector(".container");
console.log(container.children[1].children[0].children);
// traversing the .children to get internal child nodes
console.log(container.firstElementChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);
//there are 6 childerns with element
console.log(container.firstElementChild.nextElementSibling);
//displays next element of child
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

