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

