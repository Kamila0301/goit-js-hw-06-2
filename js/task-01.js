const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((el) =>
console.log(
    `Category: ${el.firstElementChild.textContent}`,
    `\nElements: ${el.lastElementChild.children.length}`,
  ),
);