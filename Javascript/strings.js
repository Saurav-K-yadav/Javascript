console.log("Starting of Strings: Methods and Templates");
let Name = "Ram Charan";
const greeting = "Good Morning !!!";
console.log(Name + " " + greeting);

// concatination
Name = Name.concat(",How are you doing?");
console.log(Name);
console.log(Name.length);
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());

console.log(Name[0]);

console.log(Name.indexOf("Charan"));
// displays where a particular character or word start
console.log(Name.indexOf("a"));
// multiple occurence first occurence in given

console.log(Name.lastIndexOf("a"));
// position where last time occurence occured

console.log(Name.charAt(0));
// same as Name[0]

console.log(Name.endsWith("?"));
console.log(Name.includes("Hero"));

console.log(Name.substring(0, 3));
// displays Name [0] to Name[2]

console.log(Name.slice(0, 4));
// Works like substring BUT
console.log(Name.slice(0, -1));
// displays till n-1 position where n is last position
console.log(Name.slice(-1));
// displays last position
console.log(Name.split(" "));
// splits given string in arrays whenever given character is encountered

let str = "hello world hello there";
console.log(str.replace("hello", "HI"));
// replaces first occurence

// Template Literals
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);
