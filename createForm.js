//a esta funcion le tuve que poner un parámetro para agregar la submitform que esta en el otro archivo.js
export default function createForm(submitForm) {
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
      //lo mismo que en el otro cambiar appendchild por append
      document
        .querySelector(".form")
        .append(
          inputBookName,
          inputBookAuthor,
          inputBookPages,
          falseLabel,
          inputFalseButton,
          trueLabel,
          inputTrueButton,
          inputSubmit
        );
      document
        .querySelector(".submit_form")
        .addEventListener("click", submitForm());
    }
  });
}
