let counterValue = 0;
const button = document.querySelector(".button");

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
});
