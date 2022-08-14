function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document
  .querySelector("[data-destroy]")
  .addEventListener(`click`, destroyBoxes);
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", (createButtonClick) => {
  createButtonClick.preventDefault();
  let size = 20;
  for (let i = 0; i < input.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${(size += 10)}px`;
    box.style.height = `${(size += 10)}px`;
    box.style.background = `${getRandomHexColor()}`;
    boxes.append(box);
  }
  input.value = "";
});
function destroyBoxes() {
  boxes.innerHTML = "";
}
