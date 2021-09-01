console.log("Arrow functions in Javascript");

// const saurav = function () {
//     console.log("This is a function");
// }

// Above function can be written as
const saurav = () => {
    console.log("This is a function");
}
saurav();

// const greet = function () {
//     return "Good morning";
// }

//we dont require {} in single line fuctions nor return is we don't return object
const greet = () => {
    return "Good Morning";
}
console.log(greet());