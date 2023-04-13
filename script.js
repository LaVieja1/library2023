// UI

const form = document.querySelector('#form');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const submitInput = document.querySelector('#submit');

const tableBody = document.querySelector('#book-table');

// Libreria

let myLibrary = [];

// Object Constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Events Listeners

submitInput.addEventListener('click', () => {
    addBookToLibrary();
    updateTable();
})

// Funciones

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

function updateTable() {
    tableBody.innerHTML = '';

    myLibrary.forEach((book) => {
        const htmlBook = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button class="read-button">${book.read}</td>
            <td><button class="delete">borrar</button></td>
        </tr>
        `;
        tableBody.insertAdjacentHTML("afterbegin", htmlBook);
    });
}

// Test

let testBook = new Book("Harry Potter", "JK Rowling", 500, true);
myLibrary.push(testBook);
updateTable();