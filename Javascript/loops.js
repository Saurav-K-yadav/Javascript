for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
let j = 11;
while (j <= 20) {
  console.log(j);
  j++;
}
let k = 20;
do {
  k++;
  if (k === 25) continue;
  console.log(k);
} while (k < 30);

let array = [1, 2, 3, 4, 5, 6];
array.forEach(function (element) {
  console.log(element);
});

let obj = {
  name: "Hero Honda",
  age: 34,
  value: true,
};
for (let key in obj) {
  console.log(obj[key]);
}
