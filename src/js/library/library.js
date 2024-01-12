import { card } from "../card/card.js";
const myLibrary = [];
class Book {
    constructor(author, title, pages, read) {
        this.read = false;
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}
function addBookToLibrary(author, title, pages, read) {
    myLibrary.push(new Book(author, title, pages, read));
}
function displayBooks() {
    const container = document.querySelector(".main__cards");
    container.innerHTML = "";
    myLibrary.forEach((book) => {
        const contentCard = card(book.author, book.title, book.pages, book.read);
        container.append(contentCard);
    });
}
(() => {
    const authorInput = document.querySelector("#author-input");
    const titleInput = document.querySelector("#title-input");
    const numberInput = document.querySelector("#number-input");
    const readCheckbox = document.querySelector("#read-input");
    const addBtn = document.querySelector(".add-btn");
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (authorInput.value.trim() &&
            titleInput.value.trim() &&
            parseInt(numberInput.value)) {
            addBookToLibrary(authorInput.value.trim(), titleInput.value.trim(), parseInt(numberInput.value), readCheckbox.checked);
            displayBooks();
            authorInput.value = "";
            titleInput.value = "";
            numberInput.value = "";
            readCheckbox.checked = false;
        }
    });
})();
function init() {
    displayBooks();
}
init();
