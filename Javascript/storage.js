console.log("local and sessional storage");
//Local Storage -- Lasts forever
localStorage.setItem("Name", "saurav");
// sets a key value inside local storage
localStorage.setItem("Name2", "yadav");
let name1 = localStorage.getItem("Name");
// Retrieve anitem from local storage
console.log(name1);

localStorage.removeItem("Name");
//removes a particular item from local storage

// localStorage.clear();
// Clears the enire local storage

let arr = ["1", "2", "3"];
localStorage.setItem("numbers", JSON.stringify(arr));
//  Stores array in the localstorage in the form of string
let numb2 = JSON.parse(localStorage.getItem("numbers"));
//Converts the string into the array
console.log(numb2[2]);

//SESSION STORAGE
// removes as soon as browser is closed
// Other coding aspects are same as local storage
sessionStorage.setItem("Naame", "saurav");
console.log(sessionStorage.getItem("Naame"));
