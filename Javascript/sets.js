console.log("This is tute 58");

//Set stores unique values
const mySet = new Set();
//adding values
console.log('The set looks like', mySet);
mySet.add('This');
mySet.add('is');
mySet.add('name');
mySet.add('name');
mySet.add('name');
console.log('looks like ', mySet);
//Sets doesn't allow to repeat the values

mySet.add(true);
mySet.add(true);
mySet.add(false);
mySet.add(true);
console.log('looks like ', mySet);

//Set constructor
let ms=new Set(['My',{a:4},'name','is',1,2,'is',{b:4}]);
console.log(ms);
console.log(ms.size)
//counts only unique elements
console.log(ms.has('My'));
console.log(ms.has('MY'));

console.log("Before removing :", ms);
ms.delete("My");
console.log('After removal',ms);

//Iterating
for (const iterator of ms) {
    console.log(iterator);
    
}

ms.forEach(element => {
    console.log(element);
    
});