console.log("This is tute 56");

//This is traditiona; for loop
people = ['saurav', 'Kumar', 'Yadav'];
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}


//for in loop
obj = {
    name: "saurav",
    language: "CPP",
    hobby: "sleeping"
}

//< -----------    using for loop    ------------- >
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);

}

//Using for in
for (let key in obj) {
    console.log(obj[key]);
}

let myString="Saurav Kumar Yadav";
for (let key in myString) {
    console.log(myString[key]);
}

//< ------------    for of loop    -------------- >
//Quickest
let language=['c','cpp','pyhton','java','c#'];
for (let name of language) {
    console.log(name);
}

for (let iterator of myString) {
    console.log(iterator);
}
