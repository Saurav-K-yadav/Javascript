console.log("Math Object in Javascript");
let x = 3;
let y = 4;
let z = x + y;
console.log(z);
z = x / y;
console.log(z);

//Math objects
z = Math;
//complete mathematical package
console.log(z);

z = Math.PI;
console.log(z);
//Prints value of PI

z = Math.E;
console.log(z);
//Euler's number

z = Math.ceil(5.34234);
console.log(z);
//gives next whole number

z = Math.floor(-5.34234);
// -3
// -4
// -5
// -6 -- smaller than -5 and whole number
console.log(z);
//gives last whole number

z = Math.round(5.34234);
console.log(z);
//rounds off

z = Math.round(-5.34234);
console.log(z);
//gives absolute value

z = Math.sqrt(9);
console.log(z);
//square root

z = Math.pow(2, 3);
console.log(z);
//power

z = Math.min(5, 1, 23, 5, 56, 7, 8, 0, -12);
console.log(z);
//gives minimum value

z = Math.max(5, 1, 23, 5, 56, 7, 8, 0, -12);
console.log(z);
//gives maximum value

z=Math.random();
console.log(z);
//Generates a random number each time, lies between 0 and 1

z=10+(100-10)*(Math.random());
//multiply by lower+(upper-lower) to define a range
// range between 10 and 100 
console.log(z);
//Generates a random number each time
