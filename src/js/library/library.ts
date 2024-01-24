import { card } from '../cards/cards.js';

class Book {
  constructor(
    public author: string,
    public title: string,
    public pages: string,
    public hasRead: boolean = false
  ) {}
}
class AddBook {
  bookArr: Book[];
  constructor(bookArr: Book[] = []) {
    this.bookArr = bookArr;
  }

  storeBook(book: Book) {
    this.bookArr.push(book);
  }
}

const bookArr = new AddBook();

type BookObject = {
  authorInputValue: string;
  titleInputValue: string;
  pagesInputValue: string;
  hasReadInputValue: boolean;
};

const createBooks = (): void => {
  const books = bookArr.bookArr;
  const cardContainer = document.querySelector(
    '.main__cards'
  ) as HTMLDivElement;
  if (books.length === 0) {
    console.log('Currently empty');
  } else {
    cardContainer.innerHTML = '';
    books.forEach(({ author, title, pages, hasRead }) => {
      cardContainer.append(card(author, title, pages, hasRead));
    });
  }
};
createBooks();

class InputElements {
  public inputStorage: BookObject = {
    authorInputValue: '',
    titleInputValue: '',
    pagesInputValue: '',
    hasReadInputValue: false,
  };
  constructor(
    public authorInput: HTMLInputElement,
    public titleInput: HTMLInputElement,
    public pagesInput: HTMLInputElement,
    public hasReadInput: HTMLInputElement,
    public button: HTMLButtonElement
  ) {}

  getInputValue(): Book | null {
    //store the input values in a object, object is in the class InputElements
    this.inputStorage = {
      authorInputValue: this.authorInput?.value.trim() || '',
      titleInputValue: this.titleInput?.value.trim() || '',
      pagesInputValue: this.pagesInput?.value.trim() || '',
      hasReadInputValue: this.hasReadInput?.checked || false,
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
      return new Book(
        this.inputStorage.authorInputValue,
        this.inputStorage.titleInputValue,
        this.inputStorage.pagesInputValue,
        this.inputStorage.hasReadInputValue
      );
    } else {
      return null;
    }
  }

  submitInputValue(e: Event) {
    e.preventDefault();
    const book = this.getInputValue();

    if (book !== null) {
      bookArr.storeBook(book);
      createBooks();
    } else {
      console.log('Invalid book');
    }
  }
}

const input = new InputElements(
  document.querySelector('#author-input') as HTMLInputElement,
  document.querySelector('#title-input') as HTMLInputElement,
  document.querySelector('#pages-input') as HTMLInputElement,
  document.querySelector('#read-input') as HTMLInputElement,
  document.querySelector('#add-submit-btn') as HTMLButtonElement
);

input.authorInput.addEventListener('input', () => input.getInputValue());
input.titleInput.addEventListener('input', () => input.getInputValue());
input.pagesInput.addEventListener('input', () => input.getInputValue());
input.hasReadInput.addEventListener('change', () => input.getInputValue());

input.button.addEventListener('click', (e) => input.submitInputValue(e));
