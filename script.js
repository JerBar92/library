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
const remove = document.querySelector(".remove");
const readingStatus = document.querySelector(".status");

function Book(title, author, pages, [genre], read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = [genre];
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
  const newBook = document.createElement("div");
  const newTitle = document.createElement("p");
  const newAuthor = document.createElement("P");
  const newPages = document.createElement("p");
  const newGenre = document.createElement("p");
  const newRead = document.createElement("button");
  const newRemove = document.createElement("button");
  newBook.classList.add("bookCard");
  newRead.classList.add("status");
  newRemove.classList.add("remove");
  for (let i = 0; i < myLibrary.length; i++) {
    newTitle.textContent = `Title: ${title.value}`;
    newAuthor.textContent = `Author: ${author.value}`;
    newPages.textContent = `Pages: ${pages.value}`;
    newGenre.textContent = `Genre: ${genre.value}`;
    newRead.textContent = read.checked ? "Read" : "Not read";
    newRemove.textContent = "Remove";
    newBook?.appendChild(newTitle);
    newBook?.appendChild(newAuthor);
    newBook?.appendChild(newPages);
    newBook?.appendChild(newGenre);
    newBook?.appendChild(newRead);
    newBook.appendChild(newRemove);
    newBook.setAttribute("data-index", i);
    bookList?.appendChild(newBook);
  }
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
