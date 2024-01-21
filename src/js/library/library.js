"use strict";
var _a, _b, _c, _d, _e;
const myLibrary = [];
//author, title, number of pages, whether it’s been read
class Book {
    constructor(author, title, pages, hasRead = false) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.hasRead = hasRead;
    }
}
class BookLibrary {
    constructor(library) {
        this.library = library;
    }
}
class Input {
    constructor(author, title, number, read, button) {
        this.author = author;
        this.title = title;
        this.number = number;
        this.read = read;
        this.button = button;
        this.boundedGetValues = this.getValues.bind(this);
    }
    getValues() {
        var _a, _b, _c, _d;
        const object = {
            author: ((_a = this.author) === null || _a === void 0 ? void 0 : _a.value.trim()) || '',
            title: ((_b = this.title) === null || _b === void 0 ? void 0 : _b.value.trim()) || '',
            number: ((_c = this.number) === null || _c === void 0 ? void 0 : _c.value.trim()) || '',
            read: (_d = this.read) === null || _d === void 0 ? void 0 : _d.checked,
        };
        return object;
    }
    handleValues(e) {
        console.log(e);
        e.preventDefault();
        const inputObject = this.getValues();
        let isValid = true;
        if (!inputObject.author) {
            isValid = false;
        }
        if (!inputObject.title) {
            isValid = false;
        }
        if (!inputObject.number) {
            isValid = false;
        }
        if (isValid) {
            console.log('all valid');
            return inputObject;
        }
        else {
            console.log('invalid input');
            return null;
        }
    }
}
const inputElements = new Input(document.querySelector('#author-input'), document.querySelector('#title-input'), document.querySelector('#number-input'), document.querySelector('#read-input'), document.querySelector('.add-btn'));
//getting all values on the click. Do we want that?
//OR get all values on input, then button calls the getValues method
(_a = inputElements.author) === null || _a === void 0 ? void 0 : _a.addEventListener('input', (e) => inputElements.getValues(e.target));
(_b = inputElements.title) === null || _b === void 0 ? void 0 : _b.addEventListener('input', (e) => inputElements.getValues(e.target));
(_c = inputElements.number) === null || _c === void 0 ? void 0 : _c.addEventListener('input', (e) => inputElements.getValues(e.target));
(_d = inputElements.read) === null || _d === void 0 ? void 0 : _d.addEventListener('change', (e) => inputElements.getValues(e.target));
(_e = inputElements.button) === null || _e === void 0 ? void 0 : _e.addEventListener('click', (e) => inputElements.handleValues(e));
function addBookToLibrary() {
    // do stuff here
}
