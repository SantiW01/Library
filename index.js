let mylibrary = [];
const button = document.createElement("button");

function Book(name, author, pages, alreadyRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.alreadyRead = alreadyRead;
}

function addBookToLibrary(book) {
  mylibrary.push(book);
  displayBooks(mylibrary);
}

function displayBooks(arrayBook) {
  const table = document.querySelector("tbody");
  for (let i = 0; i < arrayBook.length; i++) {
    const newTr = document.createElement("tr");
    table.appendChild(newTr);
    const thName = document.createElement("th");
    thName.innerHTML = `${arrayBook[i].name}`;
    newTr.appendChild(thName);
    const thAuthor = document.createElement("th");
    thAuthor.innerHTML = `${arrayBook[i].author}`;
    newTr.appendChild(thAuthor);
    const thPages = document.createElement("th");
    thPages.innerHTML = `${arrayBook[i].pages}`;
    newTr.appendChild(thPages);
    const thRead = document.createElement("th");
    button.setAttribute("class", "read_status");
    button.innerHTML = `${arrayBook[i].alreadyRead}`;
    thRead.appendChild(button);
    newTr.appendChild(thRead);
    document
      .querySelector(".read_status")
      .addEventListener("click", function () {
        changeReadStatus();
      });
  }
  mylibrary.splice(0, mylibrary.length);
}

document.querySelector(".appearForm").addEventListener("click", function () {
  if (document.querySelector(".form").childNodes.length === 0) {
    const inputBookName = document.createElement("input");
    const inputBookAuthor = document.createElement("input");
    const inputBookPages = document.createElement("input");
    const inputFalseButton = document.createElement("input");
    const inputTrueButton = document.createElement("input");
    const inputSubmit = document.createElement("input");
    const falseLabel = document.createElement("label");
    const trueLabel = document.createElement("label");
    inputBookName.type = "text";
    inputBookName.setAttribute("id", "book_name");
    inputBookName.setAttribute("placeholder", "Enter book name");
    inputBookAuthor.type = "text";
    inputBookAuthor.setAttribute("id", "book_author");
    inputBookAuthor.setAttribute("placeholder", "Enter book author");
    inputBookPages.type = "number";
    inputBookPages.setAttribute("id", "book_pages");
    inputBookPages.setAttribute("placeholder", "How many page does have?");
    inputFalseButton.type = "radio";
    inputFalseButton.name = "true_falseInput";
    inputFalseButton.value = "False";
    inputTrueButton.type = "radio";
    inputTrueButton.name = "true_falseInput";
    inputTrueButton.value = "True";
    falseLabel.innerText = "False";
    trueLabel.innerText = "True";
    inputSubmit.type = "submit";
    inputSubmit.classList.add("submit_form");
    document.querySelector(".form").appendChild(inputBookName);
    document.querySelector(".form").appendChild(inputBookAuthor);
    document.querySelector(".form").appendChild(inputBookPages);
    document.querySelector(".form").appendChild(falseLabel);
    document.querySelector(".form").appendChild(inputFalseButton);
    document.querySelector(".form").appendChild(trueLabel);
    document.querySelector(".form").appendChild(inputTrueButton);
    document.querySelector(".form").appendChild(inputSubmit);
    document
      .querySelector(".submit_form")
      .addEventListener("click", SubmitForm());
  }
});

function SubmitForm() {
  let newBook;
  document.querySelector(".submit_form").addEventListener("click", function () {
    let bookName = document.querySelector("#book_name").value;
    let bookAuthor = document.querySelector("#book_author").value;
    let bookPages = document.querySelector("#book_pages").value;
    let alreadyRead = document.getElementsByName("true_falseInput");
    for (let radio of alreadyRead) {
      if (radio.checked) {
        newBook = new Book(bookName, bookAuthor, bookPages, radio.value);
      }
    }
    addBookToLibrary(newBook);
  });
}

function changeReadStatus() {
  if (button.innerHTML == "False") {
    button.innerHTML = "True";
    button.classList.add("read_button");
    button.classList.remove("notRead_button");
  } else if (button.innerHTML == "True") {
    button.innerHTML = "False";
    button.classList.remove("read_button");
    button.classList.add("notRead_button");
  }
}
