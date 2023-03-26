let mylibrary = [];
const table = document.querySelector("tbody");
function Book(name, author, pages, alreadyRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.alreadyRead = alreadyRead;
}

function addBookToLibrary(book) {
  mylibrary.push(book);
  console.log(mylibrary);
  displayBooks();
}

function displayBooks() {
  const newTr = document.createElement("tr");
  newTr.setAttribute("id", "information");
  table.appendChild(newTr);
  const thName = document.createElement("td");
  newTr.appendChild(thName);
  const thAuthor = document.createElement("td");
  newTr.appendChild(thAuthor);
  const thPages = document.createElement("td");
  newTr.appendChild(thPages);
  const thRead = document.createElement("td");
  const readStatus = document.createElement("button");
  readStatus.setAttribute("class", `read_status`);
  readStatus.addEventListener("click", (e) => {
    changeReadStatus(e.target);
  });
  thRead.appendChild(readStatus);
  newTr.appendChild(thRead);
  const thRemove = document.createElement("td");
  newTr.appendChild(thRemove);
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  thRemove.append(removeButton);
  removeButton.setAttribute("class", `remove_button`);
  removeButton.setAttribute("onclick", "deleteRow(this);");
  /*removeButton.addEventListener("click", (e) => {
    removeBook(e);
  });*/
  mylibrary.forEach((element, i) => {
    thName.textContent = `${element.name}`;
    thAuthor.textContent = `${element.author}`;
    thPages.textContent = `${element.pages}`;
    readStatus.textContent = `${element.alreadyRead}`;
  });
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

function changeReadStatus(e) {
  if (e.textContent == "False") {
    e.textContent = "True";
    e.classList.add("read");
    e.classList.remove("unread");
  } else if (e.textContent == "True") {
    e.textContent = "False";
    e.classList.add("unread");
    e.classList.remove("read");
  }
}

/*function removeBook(e) {
  if (mylibrary.length > 0) {
    mylibrary.splice(e, 1);
    console.log(e);
    //document.querySelector("table").remove(e.parentNode.rowIndex);
  }
}*/

function deleteRow(el) {
  if (mylibrary.length > 0) {
    mylibrary.splice(el, 1);
    let tbl = el.parentNode.parentNode.parentNode.parentNode;
    let row = el.parentNode.parentNode.rowIndex;
    tbl.deleteRow(row);
  }
}
