export { card };
const cardAuthor = (author) => {
    const authorElemSpan = document.createElement('span');
    const authorElem = document.createElement('span');
    authorElemSpan.textContent = 'Author:';
    authorElem.textContent = author;
    authorElemSpan.append(authorElem);
    return authorElemSpan;
};
const cardTitle = (title) => {
    const titleElemSpan = document.createElement('span');
    const titleElem = document.createElement('span');
    titleElemSpan.textContent = 'Title:';
    titleElem.textContent = title;
    titleElemSpan.append(titleElem);
    return titleElemSpan;
};
const cardPages = (pages) => {
    const pagesElemSpan = document.createElement('span');
    const pagesElem = document.createElement('span');
    pagesElemSpan.textContent = 'Number of pages:';
    pagesElem.textContent = pages;
    pagesElemSpan.append(pagesElem);
    return pagesElemSpan;
};
const cardReadStatus = (hasRead) => {
    const readButton = document.createElement('button');
    readButton.textContent = hasRead ? 'I have read it' : 'I have not read it';
    return readButton;
};
const card = (author, title, pages, hasRead) => {
    const card = document.createElement('div');
    card.className = 'main__cards-card';
    card.append(cardAuthor(author), cardTitle(title), cardPages(pages), cardReadStatus(hasRead));
    return card;
};
