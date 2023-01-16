const textREf = document.querySelector("#text");
const inputRef = document.querySelector("#font-size-control");
// textREf.style.fontSize = "56px";
//inputRef.value = 16;
textREf.style.fontSize = inputRef.value + "px";
inputRef.addEventListener("input", onInputChange);
function onInputChange(event) {
  textREf.style.fontSize = event.target.value + "px";
}
