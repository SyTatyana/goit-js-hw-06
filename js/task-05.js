const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (newInput) => {
  output.textContent = newInput.currentTarget.value;

  if (newInput.currentTarget.value === "") {
    output.textContent = "Anonymus";
  }
});
