let myLibrary = [];

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
    console.log(myLibrary);
}