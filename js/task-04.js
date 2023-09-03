const counterValue = document.querySelector("#value");
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');

let value = 0;

decrBtn.addEventListener("click", function () {
  counterValue.textContent -= 1;
});

incrBtn.addEventListener("click", function () {
  value += 1;
  counterValue.textContent = value;
});
