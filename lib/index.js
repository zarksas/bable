"use strict";

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = document.querySelector("button");
var block = document.createElement("p");
var img = document.createElement("img");
button.addEventListener("click", function () {
  img.src = "../mem.png";
  block.classList.add("block");
  block.textContent = "Выполнено!";
  document.body.append(block, img);
});