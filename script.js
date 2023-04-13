// UI

const form = document.querySelector('#form');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const submitInput = document.querySelector('#submit');


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

submitInput.addEventListener('click', () => {
    return addBookToLibrary();
})

function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = getReadValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function getReadValue() {
    if (form.querySelector('input[name="read"]:checked').value == 'yes') {
        return true;
    } else {
        return false;
    }
}

let testBook = new Book("Harry Potter", "JK Rowling", 500, true);
myLibrary.push(testBook);