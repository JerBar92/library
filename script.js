const myLibrary = [];

const addBook = document.querySelector(".addBook");
const newBookInfo = document.querySelector("#newBookInfo");
const cancel = document.querySelector(".cancel");
const send = document.querySelector(".send");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const genre = document.querySelector("#genre");
const read = document.querySelector("#read");
const bookList = document.querySelector(".bookList");
const bookCard = document.querySelector(".bookCard");
const remove = document.querySelector(".remove");
const readingStatus = document.querySelector(".reading");

function Book(title, author, pages, genre, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    genre.value,
    read.checked
  );
  return myLibrary.push(newBook);
}

function displayBook() {
  const newBookCard = document.createElement("div");
  const newTitle = document.createElement("p");
  const newAuthor = document.createElement("P");
  const newPages = document.createElement("p");
  const newGenre = document.createElement("p");
  const newRead = document.createElement("button");
  const newRemove = document.createElement("button");

  newBookCard.classList.add("bookCard");
  newRead.classList.add("reading");
  newRemove.classList.add("remove");

  myLibrary.forEach((book, index) => {
    newTitle.textContent = `Title: ${book.title}`;
    newAuthor.textContent = `Author: ${book.author}`;
    newPages.textContent = `Pages: ${book.pages}`;
    newGenre.textContent = `Genre: ${book.genre}`;
    newRead.textContent = read.checked ? "Read" : "Not read";
    newRemove.textContent = "Remove";

    newBookCard?.appendChild(newTitle);
    newBookCard?.appendChild(newAuthor);
    newBookCard?.appendChild(newPages);
    newBookCard?.appendChild(newGenre);
    newBookCard?.appendChild(newRead);
    newBookCard.appendChild(newRemove);
    bookList?.appendChild(newBookCard);

    newRemove.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      bookList?.removeChild(newBookCard);
    });
  });
}

function clear() {
  title.value = "";
  author.value = "";
  pages.value = "";
  genre.value = "";
  read.checked = false;
  newBookInfo.close();
}

addBook?.addEventListener("click", () => {
  newBookInfo.show();
});

cancel?.addEventListener("click", () => clear());

send.addEventListener("click", (event) => {
  event?.preventDefault();
  addBookToLibrary();
  displayBook();
  clear();
});
