export function card(author, title, pages, read) {
    const authorEle = createAuthorElement(author);
    const titleEle = createTitleElement(title);
    const pagesEle = createPagesElement(pages);
    const readEle = createReadElement(read);
    const buttonEle = createCardButton(() => { });
    const article = document.createElement("article");
    article.className = "main__cards-card";
    article.append(authorEle, titleEle, pagesEle, readEle, buttonEle);
    return article;
}
function createAuthorElement(author) {
    const authorSpan = document.createElement("span");
    authorSpan.className = "author";
    const authorSpanContent = document.createElement("span");
    authorSpanContent.className = "main__cards-card--author";
    authorSpanContent.textContent = author;
    authorSpan.append(authorSpanContent);
    return authorSpan;
}
function createTitleElement(title) {
    const titleSpan = document.createElement("span");
    titleSpan.className = "title";
    const titleSpanContent = document.createElement("span");
    titleSpanContent.className = "main__cards-card--title";
    titleSpanContent.textContent = title;
    titleSpan.append(titleSpanContent);
    return titleSpan;
}
function createPagesElement(pages) {
    const pagesSpan = document.createElement("span");
    pagesSpan.className = "pages";
    const pagesSpanContent = document.createElement("span");
    pagesSpanContent.className = "main__cards-card--pages";
    pagesSpanContent.textContent = pages.toString();
    pagesSpan.append(pagesSpanContent);
    return pagesSpan;
}
function createReadElement(read) {
    const readStatusSpan = document.createElement("span");
    readStatusSpan.textContent = "Have you read the book?";
    readStatusSpan.className = "read";
    toggleButton.textContent = read ? "Yes" : "No";
    readStatusSpan.append(toggleButton);
    return readStatusSpan;
}
function createCardButton(callback) {
    const button = document.createElement("button");
    button.addEventListener("click", callback);
    button.className = "remove-btn";
    button.textContent = "Remove book";
    return button;
}
