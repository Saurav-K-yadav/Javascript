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