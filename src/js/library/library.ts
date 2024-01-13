import { card } from "../card/card.js";
import { handleError } from "../utils/error.js";
const myLibrary: Book[] = [];
class Book {
  author: string;
  title: string;
  pages: number;
  read: boolean = false;
  constructor(author: string, title: string, pages: number, read: boolean) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }


}





function addBookToLibrary(
  author: string,
  title: string,
  pages: number,
  read: boolean
) {
  myLibrary.push(new Book(author, title, pages, read));
}

function displayBooks(): void {
  const container = document.querySelector(".main__cards") as HTMLDivElement;
  container.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const contentCard = card(book.author, book.title, book.pages, book.read, index);
    console.log(index)
    container.append(contentCard);
  });
}

function handleInput() {
  interface Input {
    author: string;
    title: string;
    number: number;
    read: boolean;
  }
  const authorInput = document.querySelector(
    "#author-input"
  ) as HTMLInputElement;
  const titleInput = document.querySelector("#title-input") as HTMLInputElement;

  const numberInput = document.querySelector(
    "#number-input"
  ) as HTMLInputElement;

  const readCheckbox = document.querySelector(
    "#read-input"
  ) as HTMLInputElement;

  const input: Input = {
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
  } else {
    return null;
  }
}

addBookToLibrary("Hei", "nei", 1, false)

const addBtn = document.querySelector(".add-btn") as HTMLButtonElement;
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const ValidInput = handleInput();
  if (ValidInput !== null) {
      addBookToLibrary(
        ValidInput.author,
        ValidInput.title,
        ValidInput.number,
        ValidInput.read
      );
  displayBooks();
  }

});


function init() {
  displayBooks();
}
init();
