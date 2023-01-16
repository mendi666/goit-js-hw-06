function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const bgColorRef = document.querySelector(".color");
const targetBtn = document.querySelector(".change-color");

targetBtn.addEventListener("click", onTargetButtonClick);

function onTargetButtonClick() {
  let currentColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor;
  bgColorRef.textContent = currentColor;

  // bgColorRef.textContent = colorName;
}
