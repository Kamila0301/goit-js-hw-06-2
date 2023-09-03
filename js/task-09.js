const spanText = document.querySelector(".color");
const bodyEl = document.querySelector(".widget");
const buttonEl = document.querySelector(".change-color");

bodyEl.addEventListener("click", colorElChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function colorElChange() {
  const colorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl;
  spanText.textContent = colorEl;
};
