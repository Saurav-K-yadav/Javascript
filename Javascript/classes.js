console.log("Classes and Inheritance");

class Employee {
    //constructor
    constructor(iname, iexperience, idivision) {
        this.name = iname;
        this.experience = iexperience;
        this.division = idivision;
    }
    //functions of the class
    slogan() {
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear() {
        return 2021 - this.experience;
    }
    //static methods can be called without the class
    static add(a, b) {
        return a + b;
    }
}

saurav = new Employee("saurav", 1, 2);
console.log(saurav);
console.log(saurav.slogan());
console.log(saurav.joiningYear());
console.log(Employee.add(30, 70));

//Inheritance
class Programmer extends Employee {
    constructor(iname, iexperience, idivision, ilanguage) {
        super(iname, iexperience, idivision);
        //pass the following to the constructor
        this.language = ilanguage;
    }
    favouriteLanguage() {
        if (this.language == "C++") {
            return 'C++';
        }
        else {
            return "Javascript";
        }
    }
    //cannot use static with this because this is used for current object and static doesn't need object to call itself
    static DA(salary) {
        return 0.1 * salary;
    }

}
let yadav = new Programmer("yadav", 5, 2, "C++");
console.log(yadav);
//don't need object to call static member
console.log(Programmer.DA(1000));