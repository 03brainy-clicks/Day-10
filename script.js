// global variables
const input = document.getElementById("input");
const save = document.getElementById("save");
const list = document.getElementById("links");
const del = document.getElementById("delete");
let myleads = [];
// global variables

// condition for local render
if (localStorage.getItem("myleads")) {
  render();
}
// condition for local render

// saving function
save.addEventListener("click", () => {
  if (input.value !== "") {
    myleads.push(input.value);
    localStorage.clear();
    localStorage.setItem("myleads", JSON.stringify(myleads));
    input.value = "";
    render();
  }
});
// saving function

// render function
function render() {
  list.innerHTML = "";
  myleads = JSON.parse(localStorage.getItem("myleads"));
  for (let i of myleads) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="${i}" target="_black">${i}</a>`;
    list.appendChild(li);
  }
}
// render function

// delete all function
del.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
// delete all function
