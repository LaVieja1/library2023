// Libreria

let myLibrary = [];

// Object Constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// UI

const form = document.querySelector('#form');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const submitInput = document.querySelector('#submit');

const tableBody = document.querySelector('#book-table');

const btnDelete = document.querySelector('#delete');

// Events Listeners

const table = document
    .querySelector("table")
    .addEventListener('click', (e) => {
        const currentTarget = e.target.parentNode.parentNode.childNodes[1];
        if (e.target.innerHTML == 'borrar') {
            deleteBook(currentTarget.dataset.indexNumber);
        }
        updateTable();
    });

submitInput.addEventListener('click', () => {
    addBookToLibrary();
    updateTable();
});

// Funciones

function updateTable() {
    tableBody.innerHTML = '';
    let i = 0;

    myLibrary.forEach((book) => {
        const htmlBook = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button class="read-button">${book.read}</td>
            <td><button id="delete" data-index-number=${i}>borrar</button></td>
        </tr>
        `;
        tableBody.insertAdjacentHTML("afterbegin", htmlBook);
        i++;
    });
}

function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = getReadValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


function getReadValue() {
    if (form.querySelector('input[name="read"]:checked')) {
        return "read";
    } else {
        return "not read";
    }
}

function deleteBook(currentBook) {
    myLibrary.splice(currentBook, 1);
}

// Test

let testBook = new Book("Harry Potter y la Piedra filosofal", "JK Rowling", 500, "read");
myLibrary.push(testBook);
updateTable();