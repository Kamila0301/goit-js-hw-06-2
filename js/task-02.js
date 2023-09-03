const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

let liEl;

ingredients.forEach((el) => {
  let liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.innerHTML = el;
  ingredientsList.append(liEl);
});
