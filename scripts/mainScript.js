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
addBookToLibrary("Lord of the Rings", "J.R.R. Tolkien", 1077, false);

const mainDiv = document.getElementById("main");
const emptyCard = document.getElementById("btn-new-book");

function displayBooks() {
    if (myLibrary.length > 0) {
        for (let book of myLibrary) {
            const newDiv = document.createElement("div"); // ---> creates full card wrapper
            const newDivTop = document.createElement("div"); // ---> creates separate div for top part of the card
            const newDivBottom = document.createElement("div"); // ---> creates separate div for bottom part of the card
            const newDivBtns = document.createElement("div"); // ---> creates separate div to hold buttons in the card
            const newDivText = document.createElement("div"); // ---> creates separate div to hold text in the card

            newDiv.classList.add("card");
            newDiv.dataset.bookId = book.ID;

            newDivText.classList.add("text");

            newDivBtns.classList.add("cardBtns");

            newDivTop.classList.add("top");
            newDivBottom.classList.add("bottom");

            const newH5 = document.createElement("h5");
            const h5Content = document.createTextNode(book.title);

            newH5.appendChild(h5Content);

            // IsRead button
            const btnIsRead = document.createElement("button");
            btnIsRead.dataset.bookId = book.ID;
            btnIsRead.title = "Click here to mark book as read/not read";

            btnIsRead.classList.add("btnIsRead");

            const btnIsReadImg = document.createElement("img");
            btnIsReadImg.classList.add("bookIcon");

            btnIsReadImg.src = book.isRead ? "./images/book-check-outline.svg" : "./images/book-cancel-outline.svg";

            btnIsRead.appendChild(btnIsReadImg);

            // Delete button
            const btnDeleteBook = document.createElement("button");
            btnDeleteBook.dataset.bookId = book.ID;
            btnDeleteBook.title = "Click here to delete book from the library";

            btnDeleteBook.classList.add("btnDeleteBook");

            const btnDeleteBookImg = document.createElement("img");
            btnDeleteBookImg.classList.add("bookIcon");

            btnDeleteBookImg.src = "./images/delete-outline.svg";

            btnDeleteBook.appendChild(btnDeleteBookImg);

            // Append buttons
            newDivBtns.appendChild(btnIsRead);
            newDivBtns.appendChild(btnDeleteBook);

            newDivTop.appendChild(newDivBtns);

            newDivTop.appendChild(newH5);

            const newPAuthor = document.createElement("p");
            newPAuthor.classList.add("italic");
            newPAuthor.classList.add("author");

            newPAuthor.innerText = `by ${book.author}`;

            const newPNumOfPages = document.createElement("p");
            newPNumOfPages.classList.add("numOfPages");
            newPNumOfPages.innerText = `${book.numOfPages} pages`;

            newDivText.appendChild(newPAuthor);
            newDivText.appendChild(newPNumOfPages);

            newDivBottom.appendChild(newDivText);

            // Append top div and bottom div
            newDiv.appendChild(newDivTop);
            newDiv.appendChild(newDivBottom);

            mainDiv.insertBefore(newDiv, emptyCard);
        }

        attachListeners();
    }
}

displayBooks();

function clearDisplayedBooks() {
    const bookCards = mainDiv.querySelectorAll(".card");
    bookCards.forEach(card => card.remove());
}

function attachListeners() {
    const isBookReadBtns = document.getElementsByClassName("btnIsRead");
    const deleteBookBtns = document.getElementsByClassName("btnDeleteBook");

    for (let btn of isBookReadBtns) {
        btn.addEventListener("click", IsRead);
    }

    for (let btn of deleteBookBtns) {
        btn.addEventListener("click", DeleteBook);
    }
}

function IsRead(e) {
    const button = e.currentTarget;
    const bookId = button.dataset.bookId;

    // toggle book state
    for (let book of myLibrary) {
        if (book.ID === bookId) {
            book.isRead = !book.isRead;

            const image = button.querySelector("img");

            image.src = book.isRead ? "./images/book-check-outline.svg" : "./images/book-cancel-outline.svg";

            break;
        }
    }
}

function DeleteBook(e) {
    const button = e.currentTarget;
    const bookId = button.dataset.bookId;

    for (let book of myLibrary) {
        if (book.ID === bookId) {
            myLibrary.splice(myLibrary.indexOf(book), 1);

            break;
        }
    }

    clearDisplayedBooks();
    displayBooks();
}