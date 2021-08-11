let text = document.links;
Array.from(text).forEach(function (element) {
  if (element.href.includes("code")) {
    console.log("code");
  }
});
