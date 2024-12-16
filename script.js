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

addBookToLibrary('Stephen King', 'The Shining', 505, 'Yes');
addBookToLibrary('Harper Lee', 'Killing The Mockingbird', 336, "No");
addBookToLibrary('George Orwell', '1984', 328, "Yes");

const books = document.querySelector(".books");
const bookContainer = document.createElement("div");
const bookCard = document.createElement("div");

function displayBooks(){
    for (let i = 0; i < libraryArray.length; i++) {
        books.appendChild(bookContainer);
        bookContainer.appendChild(bookCard);
        var authorP = document.createElement("p");
        authorP.textContent = `Author: ${libraryArray[i].author}`;
        bookCard.appendChild(authorP);
        var titleP = document.createElement("p");
        titleP.textContent = `Title: ${libraryArray[i].title}`;
        bookCard.appendChild(titleP);
        var pagesP = document.createElement("p");
        pagesP.textContent = `Pages: ${libraryArray[i].numberOfPages}`;
        bookCard.appendChild(pagesP);
        var readP = document.createElement("p");
        readP.textContent = `Read: ${libraryArray[i].read}`;
        bookCard.appendChild(readP);
    }
}

displayBooks();

 
