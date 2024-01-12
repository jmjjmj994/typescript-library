import { card } from "../card/card.js";
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
  myLibrary.forEach((book) => {
    const contentCard = card(book.author, book.title, book.pages, book.read);
    container.append(contentCard);
  });
}

(() => {
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

  const addBtn = document.querySelector(".add-btn") as HTMLButtonElement;

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      authorInput.value.trim() &&
      titleInput.value.trim() &&
      parseInt(numberInput.value)
    ) {
      addBookToLibrary(
        authorInput.value.trim(),
        titleInput.value.trim(),
        parseInt(numberInput.value),
        readCheckbox.checked
      );
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
