// const ulRef = Array.from(document.querySelector("#categories").children);

const categoriesRef = document.querySelector("#categories").children;

console.log(`Number of Categories: ${categoriesRef.length}`);

for (let category of categoriesRef) {
  let categoryName = category.firstElementChild.textContent;
  let quantityElem = category.lastElementChild.children.length;
  console.log(
    `Category: ${categoryName} \nQuantity of elements: ${quantityElem}`
  );
}
