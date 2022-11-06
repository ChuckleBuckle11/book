let myLibrary = [];

// Sample book
const sampleBook = new Book("Tolkien", "Lord of The Rings", "1938", 509, "Read");
const sampleBook2 = new Book("George Lucas", "Star Wars", "1961", 66, "Not Read");

//Adds sample book to library and displays table in browser console
addBookToLibrary(sampleBook);
addBookToLibrary(sampleBook2);
displayBooks();

// when clicking the Submit button, add a new Book
const submitButton = document.getElementById("submitButton");
const form = document.querySelector("#form");
submitButton.onclick = () => {

  let formElements = form.elements;

  let author = formElements[0].value;
  let title = formElements[1].value;
  let year = formElements[2].value;
  let numberOfPages = formElements[3].value;
  let read = formElements[4].value;

  // exits the function if any of the fields are empty
  if (!author || !title || !year || !numberOfPages || !read){
    alert("Please fill in all fields!")
    return null;
  }

  let newBook = new Book(author,title,year,numberOfPages,read)
  addBookToLibrary(newBook);
  displayBooks();

}



function Book(author, title, year, numberOfPages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.year = year;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  // do stuff here
}



function displayBooks() {
  const library = document.getElementsByClassName("library")[0];

  // removes any existing items 
  const items = document.querySelectorAll('.item-row');
  items.forEach(item => {
    item.remove();
  });

  let id = 1;
  for (book of myLibrary){
    //Creates new row to be appended to library
    const newRow = document.createElement("div");
    //creates listing 
    const book_id = document.createElement("div");
    book_id.textContent = id;
    book_id.className = "id";
    const author = document.createElement("div");
    author.textContent = book.author;
    author.className = "author"
    const title = document.createElement("div");
    title.textContent = book.title;
    title.className = "title"
    const year = document.createElement("div");
    year.textContent = book.year;
    year.className = "year"
    const numberofPages = document.createElement("div");
    numberofPages.textContent = book.numberOfPages;
    numberofPages.className = "numberOfPages"
    const read = document.createElement("div");
    read.textContent = book.read;
    read.className = "read"

    //creates delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    deleteButton.id = id;
    deleteButton.onclick = () => {
      deleteRow();
    };

    //creates ChangeReadStatus button
    const readStatusButton = document.createElement("button");
    readStatusButton.textContent = "Read?";
    readStatusButton.className = "readStatusButton";
    readStatusButton.id = id;
    readStatusButton.onclick = () => {
      changeReadStatus();
    };

    //appends items to the new row
    newRow.append(book_id,author,title,year,numberofPages,read,deleteButton,readStatusButton);

    //sets newRow styles to grid
    newRow.style.display = "grid";
    newRow.className = "item-row";

    //appends row to library
    library.appendChild(newRow);
    id++;

  }
}

function deleteRow() {
  // event.target will be the input element.
  var td = event.target; 
  var tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}

function changeReadStatus(){
  let td = event.target;
  let tr = td.parentNode;
  let readStatus = tr.getElementsByClassName("read")[0].textContent;
  if (readStatus == "Read"){
    tr.getElementsByClassName("read")[0].textContent = "Not Read";
    return 
  }
  tr.getElementsByClassName("read")[0].textContent = "Read";

  return 
}