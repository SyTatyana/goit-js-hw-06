
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
function changingColor(){
  const colorOfBackground = document.querySelector(".color");
  colorOfBackground.textContent = (getRandomHexColor(''));
  document.body.style.backgroundColor=(getRandomHexColor(""));
}
const button = document.querySelector(".change-color").addEventListener('click', changingColor );
  
  