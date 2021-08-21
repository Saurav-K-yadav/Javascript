console.log("Object Literals, Constructors and Object Oriented Javascript");
let car = {
    carName: "maruti suzuki",
    topSpeed: 120,
    run: function () {
        console.log("Car is running");
    }

}
console.log(car);

// constructors
// creating a constructors for car 
function generalCar(givenName, Speed) {
    this.cName = givenName;
    this.spd = Speed;
    this.ran = function () {
        console.log(`${this.cName} is running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.spd}KM than it's top speed`);
    }
}
car2 = new generalCar("Nissan", 128);
console.log(car2.spd);
console.log(car2.cName);
car2.ran();
car2.analyze();
