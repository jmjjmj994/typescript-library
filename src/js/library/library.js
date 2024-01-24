import { card } from '../cards/cards.js';
export class Book {
    //Public, instead of manual binding (this) public does it for you. In the JS file, all arguments are binded with this.
    constructor(author, title, pages, hasRead = false) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.hasRead = hasRead;
    }
}
export class AddBook {
    constructor(bookArr = []) {
        this.bookArr = bookArr;
    }
    storeBook(book) {
        this.bookArr.push(book);
    }
    removeBook(index) {
        //Removing books which is not equal to the index.
        this.bookArr = this.bookArr.filter((book, i) => i !== index);
        createBooks();
    }
}
const bookArr = new AddBook();
const createBooks = () => {
    const books = bookArr.bookArr;
    const cardContainer = document.querySelector('.main__cards');
    cardContainer.innerHTML = '';
    if (books.length === 0) {
        console.log('Currently empty');
    }
    else {
        books.forEach(({ author, title, pages, hasRead }, index) => {
            cardContainer.append(card(bookArr, index, author, title, pages, hasRead));
        });
    }
};
createBooks();
class InputElements {
    constructor(authorInput, titleInput, pagesInput, hasReadInput, button) {
        this.authorInput = authorInput;
        this.titleInput = titleInput;
        this.pagesInput = pagesInput;
        this.hasReadInput = hasReadInput;
        this.button = button;
        this.inputStorage = {
            authorInputValue: '',
            titleInputValue: '',
            pagesInputValue: '',
            hasReadInputValue: false,
        };
    }
    getInputValue() {
        var _a, _b, _c, _d;
        //store the input values in a object, object is in the class InputElements
        this.inputStorage = {
            authorInputValue: ((_a = this.authorInput) === null || _a === void 0 ? void 0 : _a.value.trim()) || '',
            titleInputValue: ((_b = this.titleInput) === null || _b === void 0 ? void 0 : _b.value.trim()) || '',
            pagesInputValue: ((_c = this.pagesInput) === null || _c === void 0 ? void 0 : _c.value.trim()) || '',
            hasReadInputValue: ((_d = this.hasReadInput) === null || _d === void 0 ? void 0 : _d.checked) || false,
        };
        let isValid = true;
        if (!this.inputStorage.authorInputValue) {
            isValid = false;
        }
        if (!this.inputStorage.titleInputValue) {
            isValid = false;
        }
        if (!this.inputStorage.pagesInputValue) {
            isValid = false;
        }
        if (isValid) {
            return new Book(this.inputStorage.authorInputValue, this.inputStorage.titleInputValue, this.inputStorage.pagesInputValue, this.inputStorage.hasReadInputValue);
        }
        else {
            return null;
        }
    }
    submitInputValue(e) {
        e.preventDefault();
        const book = this.getInputValue();
        if (book !== null) {
            bookArr.storeBook(book);
            createBooks();
        }
        else {
            console.log('Invalid book');
        }
    }
}
const input = new InputElements(document.querySelector('#author-input'), document.querySelector('#title-input'), document.querySelector('#pages-input'), document.querySelector('#read-input'), document.querySelector('#add-submit-btn'));
input.authorInput.addEventListener('input', () => input.getInputValue());
input.titleInput.addEventListener('input', () => input.getInputValue());
input.pagesInput.addEventListener('input', () => input.getInputValue());
input.hasReadInput.addEventListener('change', () => input.getInputValue());
input.button.addEventListener('click', (e) => input.submitInputValue(e));
