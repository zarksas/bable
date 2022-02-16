import File from "./style";

const button = document.querySelector("button");
const block = document.createElement("p");
const img = document.createElement("img");

button.addEventListener("click", () => {
  img.src = "../mem.png";
  block.classList.add("block");
  block.textContent = "Выполнено!";
  document.body.append(block, img);
});
