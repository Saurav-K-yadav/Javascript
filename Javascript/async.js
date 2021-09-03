console.log("Async/await");
//async returns a promise
async function saurav() {
    console.log("Inside the function");
    const response = await fetch('https://api.github.com/users');
    console.log("Before response");
    const users = await response.json();
    //transfer control back while this request is handled in background
    console.log("users resolved");
    return users;
    // return "Saurav";
}

console.log("Before calling");
let vari = saurav();
console.log("After calling");
console.log(vari);
vari.then(data => console.log(data));
console.log("Last line of the file");
