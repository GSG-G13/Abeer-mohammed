let todoInput = document.querySelector(".todo-input");
const form = document.querySelector("form")
const addBtn = document.querySelector(".add i");
const todoList = document.querySelector(".list");
const toggleBtn = document.querySelector(".toggle-btn");
const bodyElement = document.querySelector('body');
const listTask = document.querySelector(".list-task .list");
const headerBg = document.querySelector('header');
const titleTask = document.querySelector('.content h2');
let todoArray = [];

addBtn.addEventListener("click", addTask);
document.addEventListener("DOMContentLoaded", getElementOnLoaded);
toggleBtn.addEventListener("click",swithTheme);


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

    editBtn.addEventListener("click", editTask);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.textContent = "Delete";
    buttonsDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteTask);

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

    editBtn.addEventListener("click", editTask);

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.textContent = "Delete";
    buttonsDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteTask);
  });
}

function editTask(e) {
  if(e.target.classList.contains("edit")) {
    let editBtn  = e.target;
    editBtn.setAttribute("hidden",null);
    let saveEdit = editBtn.parentElement.children[0];
    saveEdit.removeAttribute("hidden");
    saveEdit.addEventListener("click",saveEdits);
    let itemText = e.target.parentElement.parentElement.children[0].children[0];
    itemText.setAttribute("hidden",null)
    let itemText2 = e.target.parentElement.parentElement.children[0].children[1];
    itemText2.removeAttribute("hidden");
    itemText2.value = itemText.value;
    itemText2.focus();
  }
}

function saveEdits(e) {
  if(e.target.classList.contains("save")) {
    let saveBtn = e.target;
    saveBtn.setAttribute("hidden",null);
    let editBtn = e.target.parentElement.children[1];
    editBtn.removeAttribute("hidden");
    let itemText = e.target.parentElement.parentElement.children[0].children[0];
    let itemText2 =
    e.target.parentElement.parentElement.children[0].children[1];
    editToLocalStorage(itemText.value, itemText2.value);
    location.reload();
  }
}

function editToLocalStorage(item, item2) {
  todoArray = JSON.parse(localStorage.getItem("Items"));
  let index = todoArray.indexOf(item);
  todoArray.splice(index, 1, item2);
  todoArray.splice(index, 1, item2);
  localStorage.setItem("Items", JSON.stringify(todoArray));
}
function deleteTask(e) {
  if(e.target.classList.contains("delete")) {
    let item = e.target.parentElement.parentElement;
    item.remove();
    deleteToLocalStorage(item);
  }
}

function deleteToLocalStorage(element) {
  let item = element.children[0].children[0];
  todoArray = JSON.parse(localStorage.getItem("Items"));
  let index = todoArray.indexOf(item.value);
  todoArray.splice(index, 1);
  localStorage.setItem("Items", JSON.stringify(todoArray));
}



function setDarkTheme() {
 
 if (toggleBtn.getAttribute('alt') === 'moon') {
  toggleBtn.classList.remove('moon');
  form.style.backgroundColor = 'hsl(235, 24%, 19%)';
  todoInput.style.backgroundColor = 'hsl(235, 24%, 19%)';
  addBtn.style.color = '#fff';
  toggleBtn.src = '../img/icon-sun.svg';
  toggleBtn.alt = 'light';
  bodyElement.style.backgroundColor = 'hsl(235, 21%, 11%)';
  listTask.style.backgroundColor = 'hsl(235, 24%, 19%)';
  headerBg.style.backgroundImage = 'url("./img/bg-mobile-dark.jpg")';
  titleTask.style.color = '#fff';

} else {
  toggleBtn.classList.remove('light');
  form.style.backgroundColor = '#fff';
  todoInput.style.backgroundColor = '#fff';
  addBtn.style.color = 'hsl(235, 24%, 19%)';
  toggleBtn.src = '../img/icon-moon.svg';
  toggleBtn.alt = 'moon';
  bodyElement.style.backgroundColor = '#fff';
  listTask.style.backgroundColor = '#fff';
  headerBg.style.backgroundImage = 'url("./img/todoBg.jpg")';
  titleTask.style.color = '#333';
}
}

// Dark Mode

function swithTheme() {
  let darkMode = localStorage.getItem('dark');

  if (darkMode !== 'on') {
    setDarkTheme();
    darkMode = localStorage.setItem('dark', 'on');
  } else {
    setDarkTheme();
    darkMode = localStorage.setItem('dark', 'off');
  }
}

// Get the value of the "dark" item from the local storage
let darkMode = localStorage.getItem('dark');

// check dark mode is on or off on page reload
if (darkMode === 'on') {
  setDarkTheme();
}