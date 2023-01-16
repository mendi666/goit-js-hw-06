const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    const message = "Fill all your fields";
    return alert(message);
  }

  const valuesObject = {
    email: email.value,
    password: password.value,
  };

  console.log(valuesObject);

  event.currentTarget.reset();
}
