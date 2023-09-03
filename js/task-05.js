const inputName = document.getElementById("name-input");
const spanName = document.getElementById("name-output");

inputName.addEventListener("input", (event) => {
  const inputValue = inputName.value.trim();
  if (inputValue === "") {
    spanName.textContent = "Anonymous";
  } else {
    spanName.textContent = inputValue;
  }
});
