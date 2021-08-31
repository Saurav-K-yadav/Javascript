console.log("Promises Basics, Promise.then() & Promise.catch()");

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Your Promise has been resolved");
                resolve();
            }
            else {
                console.log("Your promise has not been resolved");
                reject("Sorry not fulfilled");
            }
        }, 2000);
    })
}

func1().then(function () {
    console.log("Thanks for resolving");
}).catch(function (error) {
    console.log("Not good" + error);
})