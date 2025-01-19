let input = document.getElementById("Input");
let add = document.getElementById("add");
let todoBox = document.getElementById("todoBox");
let todoItem = document.querySelector(".todoItem");

//* Set data in localStorage
function localSetData() {
  arr.push(input.value);
  arr = [...new Set(arr)];
  let jsonString = JSON.stringify(arr);
  localStorage.setItem("inputData", jsonString);
}

//* Get data from localStorage
function localGetData() {
  return JSON.parse(localStorage.getItem("inputData"));
}

//* Show Local todo
function showTodoList() {
  arr.forEach((curElem) => {
    let todoItem = document.createElement("div");
    todoItem.classList = "todoItem r-flex";
    todoItem.innerHTML = `<li>${curElem}</li>
      <button class="delete">Delete</button>`;
    todoBox.append(todoItem);
  });
}

let arr = localGetData() || [];

showTodoList(); //* Show Local todo

add.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = input.value.trim();
  if (!arr.includes(inputValue) && inputValue != "") {
    localSetData(); //* Set data in localStorage
    let todoItem = document.createElement("div");
    todoItem.classList = "todoItem r-flex";
    todoItem.innerHTML = `<li>${input.value}</li>
      <button class="delete">Delete</button>`;
    todoBox.append(todoItem);
  }
  input.value = "";
});

//* Deleting and setItem after deleting
function removeSetData(arr) {
  let jsonString = JSON.stringify(arr);
  localStorage.setItem("inputData", jsonString);
}
todoBox.addEventListener("click", function (e) {
  let rmText = e.target;
  if (rmText.classList.contains("delete")) {
    let removeText = rmText.previousElementSibling.textContent;
    arr = arr.filter((curElem) => {
      return curElem != removeText;
    });
    removeSetData(arr);
    let parentElem = rmText.parentElement;
    parentElem.remove();
  }
});
