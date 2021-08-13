console.log("Events & Event Object In JavaScript");

document.getElementById("heading").addEventListener("click", function (e) {
  let vari;
  vari = e.target;
  console.log(vari);
  //Whenever we click the id the target will get printed

  vari = e.target.className;
  console.log(vari);

  vari = e.target.classList;
  console.log(vari);
  vari = Array.from(e.target.classList);
  //we can create array of the list of classes like this
  console.log(vari);

  console.log("This is learned from CodewithHarry");
  console.log(e);

  let variable = e.offsetX;
  //displays where it is clicked from the left of the element
  console.log(variable);

  let client= e.clientY;
  //displays distance with respects to clients browser windows size
  console.log(client);

  //   location.href="https://www.google.com";
  // it redirects to given location
});



