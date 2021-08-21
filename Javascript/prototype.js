console.log("Object Prototype");

let obj = {
    Name: "Saurav",
    Address: "Earth"
}
console.log(obj);

function obj2(parameter) {
    this.Name = parameter;
    obj2.prototype.getName = function () {
        return this.Name;
    }
}
let Obj = new obj2("Saurav");
console.log(Obj.Name);
console.log(Obj.getName());
//changing the basic prototype
//Every object declared has some basic prototypes click dropdown in browser

