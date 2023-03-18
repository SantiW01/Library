let mylibrary = [];
const table = document.querySelector("tbody");
const div = document.createElement("div");
div.setAttribute("class", "information_group");
table.appendChild(div);
div.appendChild(document.querySelector(".table_header"));
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
  const newTr = document.createElement("tr");
  newTr.setAttribute("id", "information");
  div.appendChild(newTr);
  const thName = document.createElement("th");
  newTr.appendChild(thName);
  const thAuthor = document.createElement("th");
  newTr.appendChild(thAuthor);
  const thPages = document.createElement("th");
  newTr.appendChild(thPages);
  const thRead = document.createElement("th");
  const button = document.createElement("button");
  thRead.appendChild(button);
  newTr.appendChild(thRead);
  const thRemove = document.createElement("th");
  newTr.appendChild(thRemove);
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  thRemove.append(removeButton);
  removeButton.setAttribute("class", `remove_button`);
  button.setAttribute("class", `read_status`);
  document.querySelectorAll(".read_status").forEach((e) =>
    e.addEventListener("click", function () {
      changeReadStatus();
    })
  );
  document.querySelectorAll(".remove_button").forEach((e) =>
    e.addEventListener("click", function () {
      removeBook(arrayBook);
    })
  );
  arrayBook.map((element) => {
    thName.innerHTML = `${element.name}`;
    thAuthor.innerHTML = `${element.author}`;
    thPages.innerHTML = `${element.pages}`;
    button.innerHTML = `${element.alreadyRead}`;
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

function changeReadStatus() {
  if (document.querySelector(".read_status").innerHTML == "False") {
    document.querySelector(".read_status").innerHTML = "True";
    document.querySelector(".read_status").classList.add("read_button");
    document.querySelector(".read_status").classList.remove("notRead_button");
  } else if (document.querySelector(".read_status").innerHTML == "True") {
    document.querySelector(".read_status").innerHTML = "False";
    document.querySelector(".read_status").classList.remove("read_button");
    document.querySelector(".read_status").classList.add("notRead_button");
  }
}

function DeleteBookInformation() {
  document.querySelector(".information_group > .information").remove();
}

function removeBook(mylibrary) {
  mylibrary.filter((i) => (i == i ? console.log(i) : ""));
}
