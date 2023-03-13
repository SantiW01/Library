let mylibrary = [];

function Book(name, author, pages, alreadyRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.alreadyRead = alreadyRead;
}

function addBookToLibrary(book) {
  mylibrary.push(book);
}

function displayBooks(arrayBook) {
  const table = document.querySelector("tbody");
  for (let i = 0; i < arrayBook.length; i++) {
    const newTr = document.createElement("tr");
    table.appendChild(newTr);
    const thName = document.createElement("th");
    thName.innerHTML = `${arrayBook[i].author}`;
    newTr.appendChild(thName);
    const thAuthor = document.createElement("th");
    thAuthor.innerHTML = `${arrayBook[i].author}`;
    newTr.appendChild(thAuthor);
    const thPages = document.createElement("th");
    thPages.innerHTML = `${arrayBook[i].pages}`;
    newTr.appendChild(thPages);
    const thRead = document.createElement("th");
    thRead.innerHTML = `${arrayBook[i].alreadyRead}`;
    newTr.appendChild(thRead);
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
    inputBookName.type = "text";
    inputBookAuthor.type = "text";
    inputBookPages.type = "number";
    inputFalseButton.type = "radio";
    inputFalseButton.name = "true_falseInput";
    inputTrueButton.type = "radio";
    inputTrueButton.name = "true_falseInput";
    inputSubmit.type = "submit";
    inputSubmit.classList.add("submit_form");
    document.querySelector(".form").appendChild(inputBookName);
    document.querySelector(".form").appendChild(inputBookAuthor);
    document.querySelector(".form").appendChild(inputBookPages);
    document.querySelector(".form").appendChild(inputFalseButton);
    document.querySelector(".form").appendChild(inputTrueButton);
    document.querySelector(".form").appendChild(inputSubmit);
  }
});
