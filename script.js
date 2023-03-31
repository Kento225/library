const btnModalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const btnAddBook = document.querySelector(".add-book");
const btnModalSubmit = document.querySelector(".modal-submit");
const bpages = document.querySelector("#bpages");
const bname = document.querySelector("#bname");
const bauthor = document.querySelector("#bauthor");
const textFields = document.querySelectorAll("input");
const cardContainer = document.querySelector(".card-container");
const checkbox = document.querySelector("#bread");

const closeModal = function () {
  modal.style.display = "none";
};
const openModal = function () {
  modal.style.display = "block";
};
const createBookCard = function (name, author, pages) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const bookName = document.createElement("p");
  bookName.classList.add("book-name");
  bookName.textContent = name;
  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = `Author - ${author}`;
  const bookPages = document.createElement("p");
  bookPages.classList.add("book-pages");
  bookPages.textContent = `Pages - ${pages}`;
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  const readButton = document.createElement("button");
  readButton.textContent = "Read";
  readButton.classList.add("read");
  buttons.append(readButton, deleteButton);
  bookCard.append(bookName, bookAuthor, bookPages, buttons);
  cardContainer.appendChild(bookCard);

  if (checkbox.checked) {
    readButton.style.backgroundColor = "green";
  } else {
    readButton.style.backgroundColor = "rgb(184, 11, 11)";
  }

  deleteButton.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.remove();
  });
  readButton.addEventListener("click", (e) => {
    console.log(e.target.style.backgroundColor);
    if (e.target.style.backgroundColor === "rgb(184, 11, 11)") {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "rgb(184, 11, 11)";
    }
  });
};

class Book {
  constructor(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
  }
}
btnModalSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const newBook = new Book(bname.value, bauthor.value, bpages.value);
  textFields.forEach((field) => (field.value = ""));
  createBookCard(newBook.name, newBook.author, newBook.pages);
  closeModal();
});
btnModalClose.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal();
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
btnAddBook.addEventListener("click", (e) => {
  openModal();
});
