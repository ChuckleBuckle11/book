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
console.log(submitButton);
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
  console.log(myLibrary);

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

function showLibrary() {
  console.table(myLibrary);
}

function displayBooks() {
  const library = document.getElementsByClassName("library")[0];

  // removes any existing items 
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.remove();
  });


  for (book of myLibrary){
    //Creates new row to be appended to library
    const newRow = document.createElement("div");
    //creates listing 
    const author = document.createElement("div");
    author.textContent = book.author;
    author.className = "item"
    const title = document.createElement("div");
    title.textContent = book.title;
    title.className = "item"
    const year = document.createElement("div");
    year.textContent = book.year;
    year.className = "item"
    const numberofPages = document.createElement("div");
    numberofPages.textContent = book.numberOfPages;
    numberofPages.className = "item"
    const read = document.createElement("div");
    read.textContent = book.read;
    read.className = "item"

    //appends items to the new row
    newRow.append(author,title,year,numberofPages,read);

    //sets newRow styles to grid
    newRow.style.display = "grid";
    newRow.style["grid-template-columns"] = "20% 20% 20% 20% 20%";

    //appends row to library
    library.appendChild(newRow);


  }
}

function clearForm(){

}
