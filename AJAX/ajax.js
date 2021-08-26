console.log("Started AJAX");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonclickHandler);
function buttonclickHandler() {
    console.log("Inside the event listener");

    //initiating a xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', "saurav.txt", true);

    //what to do on progress
    xhr.onprogress = function () {
        console.log("Loading...");

    }

    //When the response is ready
    xhr.onload = function () {
        console.log(this.responseText);
    }

    //send the request
    xhr.send();
}