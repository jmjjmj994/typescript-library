import { toggleReadStatus } from "../eventlisteners/eventlisteners.js";
export function card(
  author: string,
  title: string,
  pages: number,
  read: boolean
) {
  const authorEle = createAuthorElement(author);
  const titleEle = createTitleElement(title);
  const pagesEle = createPagesElement(pages);
  const readEle = createReadElement(read);
  const buttonEle = createCardButton(() => {});
  const article = document.createElement("article") as HTMLTitleElement;
  article.className = "main__cards-card";
  article.append(authorEle, titleEle, pagesEle, readEle, buttonEle);
  return article;
}

function createAuthorElement(author: string) {
  const authorSpan = document.createElement("span") as HTMLSpanElement;
  authorSpan.className = "author";
  const authorSpanContent = document.createElement("span") as HTMLSpanElement;
  authorSpanContent.className = "main__cards-card--author";
  authorSpanContent.textContent = author;
  authorSpan.append(authorSpanContent);
  return authorSpan;
}

function createTitleElement(title: string) {
  const titleSpan = document.createElement("span") as HTMLSpanElement;
  titleSpan.className = "title";
  const titleSpanContent = document.createElement("span") as HTMLSpanElement;
  titleSpanContent.className = "main__cards-card--title";
  titleSpanContent.textContent = title;
  titleSpan.append(titleSpanContent);
  return titleSpan;
}

function createPagesElement(pages: number) {
  const pagesSpan = document.createElement("span") as HTMLSpanElement;
  pagesSpan.className = "pages";
  const pagesSpanContent = document.createElement("span") as HTMLSpanElement;
  pagesSpanContent.className = "main__cards-card--pages";
  pagesSpanContent.textContent = pages.toString();
  pagesSpan.append(pagesSpanContent);
  return pagesSpan;
}

function createReadElement(read: boolean) {
  const readStatusSpan = document.createElement("span") as HTMLSpanElement;
  readStatusSpan.textContent = "Have you read the book?";
  readStatusSpan.className = "read";
  toggleButton.textContent = read ? "Yes" : "No";
  readStatusSpan.append(toggleButton);
  return readStatusSpan;
}



function createCardButton(callback: () => void) {
  const button = document.createElement("button") as HTMLButtonElement;
  button.addEventListener("click", callback);
  button.className = "remove-btn";
  button.textContent = "Remove book";
  return button;
}
