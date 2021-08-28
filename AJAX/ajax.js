console.log("Started AJAX");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonclickHandler);
function buttonclickHandler() {
    console.log("Inside the event listener");

    //initiating a xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', "saurav.txt", true);

    xhr.onreadystatechange = function () {
        console.log("Ready state is", xhr.readyState);
    }
    //what to do on progress
    xhr.onprogress = function () {
        if (this.status === 200) {
            //this checks if it is http 200 status i.e. sucessful connection is established

            console.log("Loading...");
        }
        else {
            //else display error message
            alert("Error!");
            console.log("Error!");
        }

    }

    //When the response is ready
    xhr.onload = function () {
        console.log(this.responseText);
    }

    //send the request
    xhr.send();
}

//for post request
let postbtn = document.getElementById("postBtn");
postbtn.addEventListener("click", clickHandler);
function clickHandler() {
    let post = new XMLHttpRequest();
    //the url below is from dummy sample rest api website(dummy website)
    post.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    post.getResponseHeader("Content-type", "application/x-www-form-urlencoded");
    post.onprogress = function () {
        if (this.status === 200) {
            console.log("Loading...")
        }
        else {
            console.log("ErroR !!!");
        }
    }
    post.onload = function () {
        console.log(this.response);
    }
    params = "status=success&name=test&salary=123&age=23&id=25";
    post.send(params);

}

//fetch Button
let populateBtn = document.getElementById("populateBtn");
populateBtn.addEventListener("click", Populator);
function Populator() {
    console.log("Clicked the populate Button");

    //initiating a xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', "sk.txt", true);

    //what to do on progress
    xhr.onprogress = function () {
        if (this.status === 200) {
            //this checks if it is http 200 status i.e. sucessful connection is established

            console.log("Loading...");
        }
        else {
            //else display error message
            alert("Error!");
            console.log("Error!");
        }

    }

    //When the response is ready
    xhr.onload = function () {
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.getElementById("list");
        str = "";
        for (key in obj) {
            str += `<li> ${obj[key]} </li>`;
        }
        list.innerHTML = str;
        console.log(this.responseText);
    }

    //send the request
    xhr.send();
}