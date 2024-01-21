const myLibrary = [];

//author, title, number of pages, whether it’s been read
class Book {
  author: string;
  title: string;
  pages: number;
  hasRead: boolean;
  constructor(author: string, title: string, pages: number, hasRead = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.hasRead = hasRead;
  }
}

class BookLibrary {
  library: [];
  constructor(library: []) {
    this.library = library;
  }
}

class Input {
  author: HTMLInputElement | null;
  title: HTMLInputElement | null;
  number: HTMLInputElement | null;
  read: HTMLInputElement | null;
  button: HTMLButtonElement | null;
  object: object;
  isValid: boolean;

  constructor(
    author: HTMLElement | null,
    title: HTMLElement | null,
    number: HTMLElement | null,
    read: HTMLElement | null,
    button: HTMLElement | null
  ) {
    this.author = author as HTMLInputElement | null;
    this.title = title as HTMLInputElement | null;
    this.number = number as HTMLInputElement | null;
    this.read = read as HTMLInputElement | null;
    this.button = button as HTMLButtonElement | null;
    this.boundedGetValues = this.getValues.bind(this);
  }

  getValues() {
    const object = {
      author: this.author?.value.trim() || '',
      title: this.title?.value.trim() || '',
      number: this.number?.value.trim() || '',
      read: this.read?.checked,
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
    } else {
      console.log('invalid input');
      return null;
    }
  }
}

const inputElements = new Input(
  document.querySelector('#author-input'),
  document.querySelector('#title-input'),
  document.querySelector('#number-input'),
  document.querySelector('#read-input'),
  document.querySelector('.add-btn')
);

//getting all values on the click. Do we want that?
//OR get all values on input, then button calls the getValues method

inputElements.author?.addEventListener('input', (e) =>
  inputElements.getValues(e.target)
);
inputElements.title?.addEventListener('input', (e) =>
  inputElements.getValues(e.target)
);
inputElements.number?.addEventListener('input', (e) =>
  inputElements.getValues(e.target)
);
inputElements.read?.addEventListener('change', (e) =>
  inputElements.getValues(e.target)
);
inputElements.button?.addEventListener('click', (e) =>
  inputElements.handleValues(e)
);
function addBookToLibrary() {
  // do stuff here
}
