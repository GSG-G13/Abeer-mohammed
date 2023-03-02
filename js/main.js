let todoInput = document.querySelector(".todo-input");
let addBtn = document.querySelector(".add");
let todoList = document.querySelector(".list");
let todoArray = [];

addBtn.addEventListener("click", addTask);
document.addEventListener("DOMContentLoaded", getElementOnLoaded);

function addTask(e) {
  e.preventDefault();

  if (todoInput.value !== "") {
    let todoItem = document.createElement("li");
    todoItem.setAttribute("class", "item");
    todoList.appendChild(todoItem);

    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "text");
    todoItem.appendChild(textDiv);

    let itemText = document.createElement("input");
    itemText.setAttribute("type", "text");
    itemText.setAttribute("class", "item-text");
    itemText.setAttribute("value", todoInput.value);
    itemText.setAttribute("readonly", null);
    textDiv.appendChild(itemText);

    let itemText2 = document.createElement("input");
    itemText2.setAttribute("type", "text");
    itemText2.setAttribute("class", "item-text");
    itemText2.setAttribute("value", todoInput.value);
    itemText2.setAttribute("hidden", null);
    textDiv.appendChild(itemText2);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "buttons");
    todoItem.appendChild(buttonsDiv);

    let saveBtn = document.createElement("button");
    saveBtn.setAttribute("class", "save");
    saveBtn.setAttribute("hidden", null);
    saveBtn.textContent = "Save";
    buttonsDiv.appendChild(saveBtn);

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit");
    editBtn.textContent = "Edit";
    buttonsDiv.appendChild(editBtn);

    // editBtn.addEventListener("click", editTask);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.textContent = "Delete";
    buttonsDiv.appendChild(deleteBtn);

    // deleteBtn.addEventListener("click", deleteTask);

    saveToLocalStorage(todoInput.value);
  }
  todoInput.value = "";
  todoInput.focus();
}

function saveToLocalStorage(item) {
  todoArray.push(item);
  localStorage.setItem("Items", JSON.stringify(todoArray));
}

function getElementOnLoaded() {
  if (localStorage.getItem("Items")) {
    todoArray = JSON.parse(localStorage.getItem("Items"));
  }
  todoArray.forEach((element) => {
    let todoItem = document.createElement("li");
    todoItem.setAttribute("class", "item");
    todoList.appendChild(todoItem);

    let textDiv = document.createElement("div");
    textDiv.setAttribute("class", "text");
    todoItem.appendChild(textDiv);

    let itemText = document.createElement("input");
    itemText.setAttribute("type", "text");
    itemText.setAttribute("class", "item-text");
    itemText.setAttribute("value", element);
    itemText.setAttribute("readonly", null);
    textDiv.appendChild(itemText);

    let itemText2 = document.createElement("input");
    itemText2.setAttribute("type", "text");
    itemText2.setAttribute("class", "item-text");
    itemText2.setAttribute("value", todoInput.value);
    itemText2.setAttribute("hidden", null);
    textDiv.appendChild(itemText2);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "buttons");
    todoItem.appendChild(buttonsDiv);

    let saveBtn = document.createElement("button");
    saveBtn.setAttribute("class", "save");
    saveBtn.setAttribute("hidden", null);
    saveBtn.textContent = "Save";
    buttonsDiv.appendChild(saveBtn);

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit");
    editBtn.textContent = "Edit";
    buttonsDiv.appendChild(editBtn);

    // editBtn.addEventListener("click", editTask);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.textContent = "Delete";
    buttonsDiv.appendChild(deleteBtn);

    // deleteBtn.addEventListener("click", deleteTask);
  });
}