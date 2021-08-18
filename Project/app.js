console.log("Welcome to notes app");
showNotes();

//if user adds a note, it is to be added to local storage
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});
//Function to display elements
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard mx-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card-text">${element}</p>
      <button id="${index}"onclick="deleteNote(this.id) class="btn btn-primary">Delete Note</button>
    </div>
  </div>
  `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = 'Nothing here!!<br> Add notes';
  }
}

//delete notes
// function deleteNote(index) {
//   console.log("Deleting note");
//   // let notes = localStorage.getItem("notes");
//   // if (notes == null) {
//   //   notesObj = [];
//   // } else {
//   //   notesObj = JSON.parse(notes);
//   // }
//   // notesObj.splice(index, 1);
//   // showNotes();
//   // localStorage.setItem("notes", JSON.stringify(notesObj));
// }
