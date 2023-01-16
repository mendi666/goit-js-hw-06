const textREf = document.querySelector("#text");
const inputRef = document.querySelector("#font-size-control");
textREf.style.fontSize = "56px";
inputRef.addEventListener("input", onInputChange);
function onInputChange(event) {
  textREf.style.fontSize = event.target.value + "px";
}
