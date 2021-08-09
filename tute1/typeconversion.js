// Type Conversion and Type Coercion
let myVar;
myVar = 34;
console.log(myVar);
console.log(myVar, typeof myVar);
let var2 = String(34);
console.log(var2);
console.log(var2, typeof var2);
let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);
let D = String(new Date());
console.log(D, typeof D);

let arr = String([1, 2, 3]);
console.log(arr.length, typeof arr);

let i = 100;
console.log(i.toString(), typeof i.toString());
// toString() function converts to string

let str1 = true;
console.log(Number(str1), typeof Number(str1));

let number = parseInt(34.909);
console.log(number, typeof number);
// Changes to Integer

let no = parseFloat(90.03);
console.log(no, typeof no);

let d = 30.809347572345;
console.log(d.toFixed(4), typeof d);
// Fixes no of decimal digits

// ---- TYPE COERCION----
let myStr="10";
let myNum=20;
console.log(myStr+myNum);
// While number and String together JAVASCRIPT converts number to string 