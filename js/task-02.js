const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector('#ingredients');
const list = document.createElement("li");
console.log(list.textContent = `${ingredients}`);
list.classList.add('item');
console.log(list.classList);
allIngredients.append(list);








