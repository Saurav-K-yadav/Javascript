let marks = [50, 20, 40, 04, 30];
const fruits = ["Orange", "Apple", "pineapple"];
const mixed = ["str", 123, [3, 5]];
const arr = new Array(23, 54, 1234, "Orange");
console.table(arr);
console.log(mixed);
console.log(arr.length);
console.log(Array.isArray(arr));
arr[0] = 100;
console.log(arr[0]);
let value = marks.indexOf(4);
console.log(value);
//mutating (Modifying ) array
marks.push(90);
console.log(marks[marks.length - 1]);

marks.unshift(100000);
// puts ats the starting
console.log(marks);

marks.pop();
console.log(marks);

marks.shift();
console.log(marks);
// removes element from first

marks.splice(0, 3);
console.log(marks);
// removes no of Element from given starting point

console.log(marks.reverse());
// these permanently changes array not just print it
console.log(marks);

let marks2 = [1, 2, 3, 4];
marks = marks.concat(marks2);
console.log(marks);

let myObj = {
  name: "Ram",
  channel: "Good",
  isgood: true,
  arrays: [1.2, 3, 4, 5],
  "with space": "spaces",
};
console.log(myObj);
console.log(myObj.name);
console.log(myObj.arrays[2]);
console.log(myObj["with space"]);
