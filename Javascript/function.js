function greet(name) {
  console.log(`happy Birthday to you ${name}`);
}
let name1 = "Rohan Das";
greet(name1);
greet("Saurav");

// 0 is default placeholder here
function sum(number1 = 0, number2 = 0) {
  return number1 + number2;
}
console.log("sum is " + sum(10 + 20));

// Function can be assigned in variable
const mysum = function sum(number1 = 0, number2 = 0) {
  return number1 + number2;
};
console.log("sum is " + mysum(10 + 20));

const myObj = {
  name: "SK",
  game: function () {
    return "GTA";
  },
};
console.log(myObj.game());

let arr = ["apple", "Banana", "Cucumber"];
arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});

// Scope
var i = 234;
// global
console.log(i);
function ui(name) {
  // var i=9; local but if we don,t put let then global
  i = 9;
  console.log(i);
  return `This is a ${name} ui of i `;
}
console.log(ui("Ram Charan"), i);
