const book = document.querySelector("#book");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

book.addEventListener("click", () => {
  if (!paper1.classList.contains("flipped")) {
    openBook();
  } else {
    closeBook();
  }
});
function openBook() {
  paper1.classList.add("flipped");
  book.style.transform = "translateX(50%)";
}

function closeBook() {
  paper1.classList.remove("flipped");
  book.style.transform = "translateX(0%)";
}
