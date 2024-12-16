//takes user's name to display welcome message
const hello = document.querySelector(".hello");

var name = prompt("Please enter your name :)");

console.log(name);

hello.textContent = "Hello " + name + "!";

//book adding logic
const libraryArray = [];

function Book(author, title, numberOfPages, read) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary(author, title, numberOfPages, read) {
    const book = new Book(author, title, numberOfPages, read);
    libraryArray.push(book);
}

addBookToLibrary('Stephen King', 'The Shining', 505, 1);
addBookToLibrary('Harper Lee', 'Killing The Mockingbird', 336, 0);
addBookToLibrary('George Orwell', '1984', 328, 1);

 
