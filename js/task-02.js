const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.querySelector("ul");

const listContent = ingredients
  .map((ingridient) => `<li>${ingridient}</li>`)
  .join("");

ulElem.insertAdjacentHTML("beforeend", listContent);
