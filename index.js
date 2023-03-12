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
