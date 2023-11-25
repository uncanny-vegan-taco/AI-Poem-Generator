function generatePoem(event) {
  let poemElement = document.querySelector("#poem");
  event.preventDefault();
  poemElement.innerHTML = "Hello I am a Poem";
}

let submit = document.querySelector("#submit");
let subject = document.querySelector("#subject");
let poemForm = document.querySelector("#poem-form");

poemForm.addEventListener("submit", generatePoem);
