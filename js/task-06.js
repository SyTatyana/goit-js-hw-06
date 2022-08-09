const input = document.querySelector("#validation-input");
function checkInput() {
    if (input.value.length !== Number(input.getAttribute("data-length"))) {
      input.classList.add("invalid");
    } else {
      input.classList.remove("invalid");
      input.classList.add("valid");
    }
  }
  input.addEventListener("blur", checkInput);

