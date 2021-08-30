console.log("This is the start of Library Project");
//construtor for the Book
function Book(bname, author, type) {
    this.bname = bname;
    this.author = author;
    this.type = type;

}

//Display Constructor
function Display() {

}


Display.prototype.add = function (book) {
    console.log("adding to UI");
    tableBody = document.getElementById("tableBody");
    let = uiString = `<tr>
                    <td>${book.bname}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.bname.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('msg');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}



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

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("Sucess", "your book is sucessfully added");
    }
    else {
        display.show("danger", "You cannot add this book");

    }
}