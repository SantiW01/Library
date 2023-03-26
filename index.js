//exportada e importada la funcion createForm para claridad en el codigo
import createForm from "./createForm.js";
createForm(SubmitForm);

const mylibrary = [];
//el tbody parece ser un elemento que se crea AUTOMATICAMENTE Y SIN QUE NADIE SE LO PIDA
const table = document.querySelector("tbody");
const table_header = document.querySelector(".table_header");

//recomendado por vscode que book sea una clase y no una funcion
class Book {
  constructor(name, author, pages, alreadyRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.alreadyRead = alreadyRead;
  }
}
//cada vez que se llama a addBook se renderiza la biblioteca
function addBookToLibrary(book) {
  mylibrary.push(book);
  console.log(mylibrary);
  displayBooks();
}

function displayBooks() {
  //borra todo para renderizar de nuevo en limpio
  table.replaceChildren();
  //le pone una vez la table_header que de otra manera desapareceria
  table.append(table_header);
  //recorre la biblioteca y por cada libro crea un elemento html con sus respectivos atributos y los de cada libro
  mylibrary.forEach((book, i) => {
    const newTr = document.createElement("tr");
    newTr.setAttribute("id", "information");
    const thName = document.createElement("th");
    const thAuthor = document.createElement("th");
    const thPages = document.createElement("th");
    const thRead = document.createElement("th");
    const readStatus = document.createElement("button");
    const thRemove = document.createElement("th");
    const removeButton = document.createElement("button");
    readStatus.setAttribute("class", `read_status`);
    readStatus.addEventListener("click", (e) => {
      changeReadStatus(e.target);
    });
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", `remove_button`);
    //creé un atributo llamado book-index para poder utilizarlo en la funcion removebook
    removeButton.setAttribute("book-index", i);
    removeButton.addEventListener("click", (e) => {
      removeBook(e.target.getAttribute("book-index"));
    });
    thRead.appendChild(readStatus);
    thRemove.append(removeButton);
    thName.textContent = `${book.name}`;
    thAuthor.textContent = `${book.author}`;
    thPages.textContent = `${book.pages}`;
    readStatus.textContent = `${book.alreadyRead}`;
    //en una linea usando append para mas claridad
    newTr.append(thName, thAuthor, thPages, thRead, thRemove);
    table.append(newTr);
  });
}

function SubmitForm() {
  //esto no lo cambié
  document.querySelector(".submit_form").addEventListener("click", () => {
    const bookName = document.querySelector("#book_name").value;
    const bookAuthor = document.querySelector("#book_author").value;
    const bookPages = document.querySelector("#book_pages").value;
    const alreadyRead = document.getElementsByName("true_falseInput");
    //creé una variable para saber si entre las dos opciones (verdadero y falso) hay alguna chequeada y cuál
    let readOrNot = undefined;
    if (alreadyRead[0].checked) {
      readOrNot = alreadyRead[0].defaultValue;
    } else if (alreadyRead[1].checked) {
      readOrNot = alreadyRead[1].defaultValue;
    }
    //si la variable fue chequeada se crea el libro y se agrega a la biblioteca
    if (readOrNot != undefined) {
      const newBook = new Book(
        bookName,
        bookAuthor,
        bookPages,
        alreadyRead[0].checked || alreadyRead[1].checked
      );
      addBookToLibrary(newBook);
    } else {
      console.log("must check if read or not first");
    }
  });
}
//no andaba porque había un error entre el False y True con mayúsculas acá y con minúsculas en el elemento
function changeReadStatus(e) {
  if (e.textContent == "false") {
    e.textContent = "true";
    e.classList.add("read");
    e.classList.remove("unread");
  } else if (e.textContent == "true") {
    e.textContent = "false";
    e.classList.add("unread");
    e.classList.remove("read");
  }
}

function removeBook(index) {
  if (mylibrary.length >= 0) {
    mylibrary.splice(index, 1);
    console.log(mylibrary);
    displayBooks();
  }
}
