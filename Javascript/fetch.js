console.log("Fetch Api");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData() {
    console.log("Started get data");
    url = "saurav.txt";
    fetch(url).then((response) => {
        console.log("Inside first then");
        return response.text();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}
console.log("Before get data");
getData();
console.log("After get data");
