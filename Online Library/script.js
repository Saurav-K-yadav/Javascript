console.log("This is the start of Library Project");
//construtor for the Book
function Book(bname, author, type) {
    this.bname = bname;
    this.author = author;
    this.type = type;

}

//Display Constructor
function display() {

}


display.prototype.add = function () { }

display.prototype.clear = function () { }




//Event listener for submitted form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmitted);

function libraryFormSubmitted(a) {
    a.preventDefault();
    //prevents the default submitting behaviour of the form

    console.log("Library Form submitted");
    let bname = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let fiction = document.getElementById("fiction");
    let cooking = document.getElementById("cooking");
    let programming = document.getElementById("programming");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;

    }
    else {
        type == cooking.value;
    }

    let book = new Book(bname, author, type);

    let display = new display();
    display.add(book);
    display.clear();
    console.log(book);
}