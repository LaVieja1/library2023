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

// Events Listeners

const table = document
    .querySelector("table")
    .addEventListener('click', (e) => {
        const btnDelete = e.target.parentNode.parentNode.childNodes[1];
        const btnRead = e.target.parentNode.childNodes[0];
        if (e.target.innerHTML == 'Borrar') {
            deleteBook(btnDelete.dataset.indexNumber);
        }
        if (e.target.classList.contains("read-button")) {
            changeStatus(btnRead.dataset.indexNumber);
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
            <td><button class="read-button" data-index-number=${i}>${book.read}</td>
            <td><button id="delete" data-index-number=${i}>Borrar</button></td>
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
        return "Leído";
    } else {
        return "No leído";
    }
}

function deleteBook(currentBook) {
    myLibrary.splice(currentBook, 1);
}

function changeStatus(book) {
    if(myLibrary[book].read === 'Leído') {
        myLibrary[book].read = 'No Leído';
    } else myLibrary[book].read = 'Leído';
}

// Test

let testBook = new Book("Harry Potter y la Piedra filosofal", "JK Rowling", 500, "Leído");
myLibrary.push(testBook);
updateTable();