const colorOfBackground = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changingColor() {
  const randomColor = `${getRandomHexColor()}`;
  colorOfBackground.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
const button = document
  .querySelector(".change-color")
  .addEventListener("click", changingColor);
