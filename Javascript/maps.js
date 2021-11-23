console.log("This is tute 57");

//< -------    MAPS in Javascript    ------ >
//any type of key or value can be used
const myMap = new Map();
console.log(myMap);

const key1 = 'myStr',
    key2 = {},
    key3 = function () { };

// seting map values
myMap.set(key1, "This is a string");
myMap.set(key2, "This is a blank object");
myMap.set(key3, "This is an empty function");
console.log(myMap);

//Getting the values from the map
let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value1);
console.log(value2);
console.log(value3);

//get the size of the map0
console.log(myMap.size);

//using for of
for (let [key, value] of myMap) {
    console.log(key);
    console.log(value);

}

//Using for each loop
myMap.forEach((value, key) => {
    console.log('key is ', key);
    console.log('value is ', value);
})

//convering a map to array
let myArray = Array.from(myMap);
console.log(myArray);