function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    delay: 10,
    autoStart: true,
    cursor: null,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  let userInput = document.querySelector("#subject").value;
  let poemElement = document.querySelector("#poem");
  let generatingElement = document.querySelector(".generating");
  generatingElement.innerHTML = `⏳ Generating your poem about ${userInput}...`;
  poemElement.classList.remove("hidden");

  let prompt = `Generate a poem about ${userInput}`;
  let context =
    "You are a poet specializing in all types of poetry. Follow user instructions. Only provide one poem per request. Give a different type of poem each time. Sign poem at the bottom with 'SheCodes AI";
  let apiKey = "ab845e08702fbc3c99tc4fo5b8bf92c3";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(generatePoem);
}

let submit = document.querySelector("#submit");
let subject = document.querySelector("#subject");
let poemForm = document.querySelector("#poem-form");

poemForm.addEventListener("submit", handleSubmit);
