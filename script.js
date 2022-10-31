let myLibrary = [];

// Sample book
const sampleBook = new Book("Tolkien", "Lord of The Rings","1938", 509, "Read");


//Adds sample book to library and displays table in browser console
addBookToLibrary(sampleBook);
showLibrary();







function Book(author,title, year, numberOfPages, read) {
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

function showLibrary(){
    console.table(myLibrary);
}