const input = document.getElementById("validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", onInputFocus);

function onInputFocus(event) {
  if (input.value.length === inputLength) {
    input.style.borderColor = "#4caf50";
  } else if (
    input.value.length > inputLength ||
    input.value.length < inputLength
  ) {
    input.style.borderColor = "#f44336";
  } else {
    input.style.borderColor = "bdbdbd";
  }
}
