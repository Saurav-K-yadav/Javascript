let text = document.links;
let str = "python";
let hre;
Array.from(text).forEach(function(element) {
  hre = element.href;
  if (hre.includes(str)) {
    console.log(hre);
  }
});
 