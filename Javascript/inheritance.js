console.log("Prototype inheritance in Javascript");
const proto = {
    slogan: function () {
        return `We are the best`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}
const saurav = Object.create(proto);
saurav.name = "saurav";
saurav.roll = "1020";
saurav.changeName("Saurav Kumar Yadav");
console.log(saurav);

//Employee costructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;

}
//slogan
Employee.prototype.slogan = function () {
    return `I am  the best`;
}
let sk = new Employee("saurav", 9348767, 1);
console.log(sk.slogan);

//Employee contractor
function contractor(name, salary, experience, contracts) {
    Employee.call(this, name, salary, experience);
    this.contracts = contracts;
}
//Inherit slogan
contractor.prototype = Object.create(Employee.prototype);
//set constructor
contractor.prototype.constructor = contractor;

let yadav = new contractor("yadav", 123, 3, 0);
console.log(yadav);