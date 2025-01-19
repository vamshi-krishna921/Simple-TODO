let input = document.getElementById("Input");
let add = document.getElementById("add");
let todoBox = document.getElementById("todoBox");
let todoItem = document.getElementById("todoItem");
let arr = [];
add.addEventListener("click", () => {
  if (input.value.trim() != "") {
    let todoItem = document.createElement('div');
    todoItem.classList = "todoItem r-flex";
    todoItem.innerHTML = `<li>${input.value}</li>
    <button id="delete">Delete</button>`
    todoBox.append(todoItem);
  }
});
