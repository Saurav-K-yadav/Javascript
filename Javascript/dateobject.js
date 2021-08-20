console.log("Date object");
let today = new Date();
console.log(today);

let otherDay = new Date('2020-02-20 02:02:20');
console.log(otherDay);

otherDay = new Date('2020 july 20 02:02:20');
console.log(otherDay);

console.log(otherDay.getDay());
//get the day

console.log(otherDay.getMinutes());

otherDay.setDate(23);
otherDay.setMonth(12);
//1 is february
console.log(otherDay);

let a = new Date().getTime();
console.log(a);
//Number of seconds since unix Epoch i.i 1 Jan 1970
