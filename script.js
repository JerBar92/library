const myLibrary = [];

const addBook = document.querySelector(".addBook");
const newBookInfo = document.querySelector("#newBookInfo");
const cancel = document.querySelector(".cancel");
const send = document.querySelector(".send");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const genre = document.querySelector("#genre");
let readStatus = document.querySelector("#read");
const bookList = document.querySelector(".bookList");
const bookCard = document.querySelector(".bookCard");
const remove = document.querySelector(".remove");
const readingStatus = document.querySelector(".reading");

function Book(title, author, pages, genre, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.genre = genre;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    genre.value,
    readStatus.checked
  );
  return myLibrary.push(newBook);
}

function displayBook() {
  const newBookCard = document.createElement("div");
  newBookCard.classList.add("bookCard");

  const newTitle = document.createElement("h2");
  const newAuthor = document.createElement("P");
  const newPages = document.createElement("p");
  const newGenre = document.createElement("p");

  const newRead = document.createElement("button");
  newRead.classList.add("reading");

  const newRemove = document.createElement("button");
  newRemove.classList.add("remove");

  myLibrary.forEach((book, index) => {
    newTitle.textContent = book.title;
    newBookCard?.appendChild(newTitle);

    newAuthor.textContent = `Author: ${book.author}`;
    newBookCard?.appendChild(newAuthor);

    newPages.textContent = `Pages: ${book.pages}`;
    newBookCard?.appendChild(newPages);

    newGenre.textContent = `Genre: ${book.genre}`;
    newBookCard?.appendChild(newGenre);

    newRead.textContent = readStatus.checked ? "Read" : "Not read";
    newBookCard?.appendChild(newRead);
    newRead.addEventListener("click", () => {
      book.readStatus = !book.readStatus;
      readStatus.checked = book.readStatus;
      newRead.textContent = readStatus.checked ? "Read" : "Not read";
    });

    newRemove.textContent = "Remove";
    newBookCard.appendChild(newRemove);
    newRemove.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      bookList?.removeChild(newBookCard);
    });

    bookList?.appendChild(newBookCard);
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
