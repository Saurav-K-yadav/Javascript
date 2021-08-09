console.log("Test");
// var,let,const can be used to create variable
var name1 = "saurav";
console.log(name1);
var channel;
channel = "Saurav's page";
console.log(channel);
var num = 100;
var num2 = 200;
console.log(num + num2);
let a = 0;
let b = 10;
console.log(a / b);
const c = 30;
console.log(c);
// var is global but let is local so local is preferred
const arr = [2, 3, 4];
arr.push(8);
console.log(arr);
arr.pop();
console.log(arr);
// push and pop is allowed in const array

// DATA TYPES
// primitiive DAtatypes
let nameS = "SAURAV";
console.log("name os string " + nameS);
console.log("Datatype is " + typeof nameS);

let d = 40;
console.log("value is " + d);
console.log("Datatype is " + typeof d);

let isGood = true;
console.log("Boolean " + isGood);
console.log("Datatye is " + typeof isGood);

let point = null;
console.log("value " + point);
console.log("Datatye is " + typeof point);

let undef = undefined;
console.log("value " + undefined);
console.log("Datatye is " + typeof undefined);

// Reference Datatypes
let myarr = [1, 2, 3, 4, false];
console.log(myarr);
console.log("Datatye is " + typeof myarr);

// object literals
let marks = {
  saurav: 100,
  gaurav: 50,
  "Bachhan Ji ": 75,
};
console.table(marks);
console.log("Datatye is " + typeof marks);

// functions
function findName(){
    
}
console.log(typeof findName);

let date=new Date();
console.log( typeof date);
console.log( date);
