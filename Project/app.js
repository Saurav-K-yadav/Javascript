console.log("Welcome to notes app");

//if user adds a note, t is to be added to local storage
let addBtn=document.getElementById("addbtn");
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addtxt");
let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
notesObj.push(addTxt.value);
localStorage.setItem("notes",JSON.stringify(notes));
addTxt.value="";
console.log(notesObj);
})
