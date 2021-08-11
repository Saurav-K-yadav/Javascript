let a = document;
console.log(a);
//Structural representation of HTML

a = document.all;
console.log(a);

a = document.body;
console.log(a);
// don't use will be dicontinued
a = document.forms[0];
console.log(a);
// targets the forms

let b = document.all;
Array.from(b).forEach(function (element) {
  // creates array from given variable
  console.log(b);
});
b = document.links[0];
console.log(b);
