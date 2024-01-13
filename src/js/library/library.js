import { card } from "../card/card.js";
import { handleError } from "../utils/error.js";
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
    myLibrary.forEach((book, index) => {
        const contentCard = card(book.author, book.title, book.pages, book.read, index);
        console.log(index);
        container.append(contentCard);
    });
}
function handleInput() {
    const authorInput = document.querySelector("#author-input");
    const titleInput = document.querySelector("#title-input");
    const numberInput = document.querySelector("#number-input");
    const readCheckbox = document.querySelector("#read-input");
    const input = {
        author: authorInput.value,
        title: titleInput.value,
        number: parseInt(numberInput.value),
        read: readCheckbox.checked,
    };
    let isValid = true;
    if (!input.author) {
        handleError(authorInput, "This field is required");
        isValid = false;
    }
    if (!input.title) {
        handleError(titleInput, "This field is required");
        isValid = false;
    }
    if (!input.number) {
        handleError(numberInput, "This field is required");
        isValid = false;
    }
    if (isValid) {
        authorInput.value = "";
        titleInput.value = "";
        numberInput.value = "";
        readCheckbox.checked = false;
        return input;
    }
    else {
        return null;
    }
}
addBookToLibrary("Hei", "nei", 1, false);
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const ValidInput = handleInput();
    if (ValidInput !== null) {
        addBookToLibrary(ValidInput.author, ValidInput.title, ValidInput.number, ValidInput.read);
        displayBooks();
    }
});
function init() {
    displayBooks();
}
init();
