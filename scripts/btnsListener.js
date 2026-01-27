const dialog = document.getElementById("dialog");

document.getElementById("btn-new-book").addEventListener("click", () => {
    dialog.showModal();
});

const form = document.getElementById("form");

dialog.addEventListener("close", () => {
    // Which button was clicked?
    const action = dialog.returnValue;

    if (action === "save") {
        const formData = new FormData(form);

        addBookToLibrary(formData.get("book_title"), formData.get("book_author"), formData.get("book_numOfPages"), formData.get("book_isRead"));

        clearDisplayedBooks();
        displayBooks();

        form.reset();
    } else {
        console.log("User cancelled");
    }
});