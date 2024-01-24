export { card };
import { AddBook, Book } from '../library/library.js';

const cardAuthor = (author: string): HTMLSpanElement => {
  const authorElemSpan = document.createElement('span') as HTMLSpanElement;
  const authorElem = document.createElement('span') as HTMLSpanElement;
  authorElemSpan.textContent = 'Author:';
  authorElem.textContent = author;
  authorElemSpan.append(authorElem);
  return authorElemSpan;
};

const cardTitle = (title: string): HTMLSpanElement => {
  const titleElemSpan = document.createElement('span') as HTMLSpanElement;
  const titleElem = document.createElement('span') as HTMLSpanElement;
  titleElemSpan.textContent = 'Title:';
  titleElem.textContent = title;
  titleElemSpan.append(titleElem);
  return titleElemSpan;
};

const cardPages = (pages: string): HTMLSpanElement => {
  const pagesElemSpan = document.createElement('span') as HTMLSpanElement;
  const pagesElem = document.createElement('span') as HTMLSpanElement;
  pagesElemSpan.textContent = 'Number of pages:';
  pagesElem.textContent = pages;
  pagesElemSpan.append(pagesElem);
  return pagesElemSpan;
};

const cardReadStatus = (hasRead: boolean): HTMLButtonElement => {
  const readButton = document.createElement('button') as HTMLButtonElement;
  readButton.textContent = hasRead ? 'I have read it' : 'I have not read it';
  return readButton;
};

const removeButton = (bookArr:AddBook, index:number): HTMLButtonElement => {
  const removeButton = document.createElement('button') as HTMLButtonElement;
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click',() =>  bookArr.removeBook(index));
  return removeButton;
};

const card = (
  bookArr:AddBook,
  index:number,
  author: string,
  title: string,
  pages: string,
  hasRead: boolean
): HTMLDivElement => {
  const card = document.createElement('div') as HTMLDivElement;
  card.className = 'main__cards-card';
  card.append(
    cardAuthor(author),
    cardTitle(title),
    cardPages(pages),
    cardReadStatus(hasRead),
    removeButton(bookArr, index)
  );

  return card;
};
