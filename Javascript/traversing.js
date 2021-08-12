console.log("Children, Parent and Traversing DOM");
let cont = document.querySelector(".no");
console.log(cont);
cont = document.querySelector(".container");
console.log(cont);
console.log(cont.childNodes);
// this also counts text comment and new lines
console.log(cont.children);
//this doesn't take comments, newline etc
