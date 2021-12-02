console.log("Last tutorial");
let a, b;
[a, b] = [30, 60];
console.log(a, b);

[a, b] = [12, 123, 1244];
console.log(a, b);
let d;
[a, b, ...d] = [10, 20, 30, 40, 50];
//First two are stored as usual rest are stored in last elment as array
console.log(a, b, d);

let numbers = [1, 2, 3, 4];
[a, b, c] = numbers;
console.log(a, b, c);


numbers = [1, 2, 3, 4];
[a, b, ...c] = numbers;
console.log(a, b, c);

//Object Destructuring
const laptop={
    model:"DELL",
    age:"1 year",
    CPU:"I 5",
    start:function(){console.log('started')}
}
console.log(laptop.start);
let {model,age,CPU,start}=laptop;
console.log(model,age,CPU,start);
