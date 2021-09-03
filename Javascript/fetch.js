console.log("Fetch Api");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

// function getData() {
//     console.log("Started get data");
//     url = "saurav.txt";
//     fetch(url).then((response) => {
//         console.log("Inside first then");
//         return response.text();
//     }).then((data) => {
//         console.log("Inside second then");
//         console.log(data);
//     })
// }
function getData() {
    console.log("Started get data");
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside first then");
        return response.json();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}

function postData() {
    console.log("Started get data");
    url = "https://reqres.in/api/users";
    data = {
        "name123": "morpheus",
        "job": "leader",
        "id": "919",
        "createdAt": "2021-09-03T16:09:28.499Z"
    };
    params = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(url, params).then((response) => {
        console.log("Inside first then");
        return response.json();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data);
    })
}

console.log("before post data");
postData();
console.log("After post data");

console.log("Before get data");
getData();
console.log("After get data");
