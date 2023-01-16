const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (input.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
