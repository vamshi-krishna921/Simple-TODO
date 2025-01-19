let input = document.getElementById("Input");
let add = document.getElementById("add");
let todoBox = document.getElementById("todoBox");
let todoItem = document.getElementById("todoItem");

//* Local storage set data
function localSetData() {
  arr.push(input.value);
  arr = [...new Set(arr)];
  let jsonString = JSON.stringify(arr);
  localStorage.setItem("inputData", jsonString);
}

//* Local storage Get data
function localGetData() {
  return JSON.parse(localStorage.getItem("inputData"));
}

//* Show Local todo
function showTodoList() {
  arr.forEach((curElem) => {
    let todoItem = document.createElement("div");
    todoItem.classList = "todoItem r-flex";
    todoItem.innerHTML = `<li>${curElem}</li>
      <button id="delete">Delete</button>`;
    todoBox.append(todoItem);
  });
}

let arr = localGetData() || [];

showTodoList(); //* Show Local todo

add.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = input.value.trim();
  if (!arr.includes(inputValue) && inputValue != "") {
    localSetData(); //* Local storage set data
    let todoItem = document.createElement("div");
    todoItem.classList = "todoItem r-flex";
    todoItem.innerHTML = `<li>${input.value}</li>
      <button id="delete">Delete</button>`;
    todoBox.append(todoItem);
  }
  input.value = "";
});
