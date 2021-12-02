console.log("This is tutorial 59");

const syms=Symbol("My identifier");
console.log("The symbol is ",syms);
const syms2=Symbol("My identifier");
console.log("The symbol is ",syms2);
console.log(syms ===syms2);

const a="This is";
const b="This is";
console.log(a === b);
//Every symbol is unique
