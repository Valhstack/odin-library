const myLibrary = [];

function Book(title, author, numOfPages, isRead, ID) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
    this.ID = ID;
}

function addBookToLibrary(title, author, numOfPages, isRead) {
    let newBookID = self.crypto.randomUUID();
    let book = new Book(title, author, numOfPages, isRead, newBookID);

    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Lord of the Ring", "J.R.R. Tolkien", 400, false);

const mainDiv = document.getElementById("main");

function displayBooks() {
    for (let book of myLibrary) {
        const newDiv = document.createElement("div");

        newDiv.classList.add("card");
        newDiv.dataset.bookId = book.ID;

        const newH5 = document.createElement("h5");
        const h5Content = document.createTextNode(book.title);

        newH5.appendChild(h5Content);

        const newP = document.createElement("p");
        const pContent = document.createTextNode(
            `Author: ${book.author} ${book.numOfPages} pages. ${book.isRead ? "Read" : "Not read"}. Book ID: ${book.ID}`
        );

        newP.appendChild(pContent);

        newDiv.appendChild(newH5);
        newDiv.appendChild(newP);

        mainDiv.insertAdjacentElement('beforeend', newDiv);
    }
}

displayBooks();

function clearDisplayedBooks() {
    let child = mainDiv.lastElementChild;
    while (child) {
        mainDiv.removeChild(child);
        child = mainDiv.lastElementChild;
    }
}