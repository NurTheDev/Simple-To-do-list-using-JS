const input = document.getElementById("input");
const ul = document.querySelector("ul");
const li = document.getElementsByClassName("li");
const button = document.getElementsByTagName("button")[0];
let data = "";
input.addEventListener("input", (e) => {
  data = e.target.value;
});
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.classList.add("li");
  li.innerText = data;
  ul.appendChild(li);
  input.value = "";
});
ul.addEventListener("click", (e) => {
  e.target.style.textDecoration = "line-through";
  e.target.innerText = e.target.innerText + "  (Done)";
});
ul.addEventListener("dblclick", (e) => {
  ul.removeChild(e.target);
});
