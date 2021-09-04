console.log("Error Handling");

let a = "saurav ";
// a = undefined;
try {
if (a != undefined) {
    throw new Error("This is not undefined");
}
else {
    console.log("This is undefined");
}

    function1();
} catch (error) {
    console.log('In catch statement');
    
    console.log(error);

}
finally {
    console.log('This will run finally no matter what');

}