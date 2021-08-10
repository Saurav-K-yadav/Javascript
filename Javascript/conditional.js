const age = 20;
if (age == 30) {
  console.log("Age is 30");
} else {
  console.log("Age is not 30");
}

const age1 = "20";
// only value is checked and matched in if else condition if we want to match datatype triple = is used
if (age1 == 20) {
  console.log("true");
}
if (age1 === 20) {
  console.log("true");
}

if (typeof vari1 == "undefined") {
  console.log(" Doesn't Exist");
}
let vari = 234;
if (typeof vari !== "undefined") {
  console.log("Exists");
}

if (vari == 120 || age == 20) {
  console.log("Exists");
}

// Terninary operator
console.log(age == 30 ? "30" : "not 30");

let a = 1;
switch (a) {
  case 1:
    console.log(1);
    break;
  case 20:
    console.log(20);
    break;
  default:
    console.log("undefied");

    break;
}
