let counterValue = 0;
const targetBtns = document.querySelectorAll("#counter button");
const text = document.querySelector("#value");

targetBtns.forEach((element) => {
  element.addEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  const action = this.dataset.action;
  if (action === "decrement") {
    counterValue--;
    text.textContent = counterValue;
  } else if (action === "increment") {
    counterValue++;
    text.textContent = counterValue;
  } else {
    return false;
  }
}
