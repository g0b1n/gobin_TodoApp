

const input = document.querySelector('#frnd-name');
const todoList = document.querySelector('#todo-list'); 

todoList.addEventListener('click', function(event){
if(event.target.tagName === 'BUTTON'){
   event.target.parentElement.remove();
} else if (
   event.target.tagName = 'li')
   // console.log("you clicked li");
   event.target.style.textDecoration = "line-through";
   
   let text = event.target.parentElement.innerText.replace("Done", "");
    console.log("trying to remove from local stroage: " +text);
    removeItemFromLocalStorage(text);
})

window.onload = function() {
   populateFromLocalStorage();
   // console.log("trying to populate from local stroage");
}

const form = document.querySelector('#addTodo');
// this function listens to submit button on Add and creates a new todo item // and it appends it to the dom

  // this function also need to store the todo item in the localstorage
form.addEventListener('submit', function(event){ event.preventDefault(); addNewListItemtoUI(input.value);
addItemToLocalStorage(input.value);
input.value = "";
})

function addNewListItemtoUI(item) {
    const newTodo = document.createElement('li');
    newTodo.innerText = item;
    todoList.appendChild(newTodo);

    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    newTodo.appendChild(doneBtn);
}

// create a function to store todo list new item
function addItemToLocalStorage(item) {
// read the current array
// local storage only stores strings
// we convert string into array using JSON pare
console.log(item)
var currentList = JSON.parse(localStorage.getItem("todo-list")); if (currentList === null) {
       currentList = new Array();
   }
// add item to the array
currentList.push(item);
// set array to the local storage
// we use JSON Stringigy to convert array back to string
localStorage.setItem("todo-list", JSON.stringify(currentList));
console.log(localStorage);
}

// create a function to read all the todo items from local storage // and create a list item for each and display
function populateFromLocalStorage() {
// read the current array from local storage, loop through it and create a list item for each
var currentList = JSON.parse(localStorage.getItem("todo-list"));
    if (currentList === null) {
         currentList = new Array();
    }
    for (var i = 0; i < currentList.length; i++) {
            addNewListItemtoUI(currentList[i]);
        }

}

// remove item from local storage when done
function removeItemFromLocalStorage(item) {
// read the current array from local storage, loop through it and create a list item for each
var currentList = JSON.parse(localStorage.getItem("todo-list"));
    if (currentList === null) {
            currentList = new Array();
        }
    for (var i = 0; i < currentList.length; i++) {
            if (currentList[i] === item) {
                    currentList.splice(i, 1);
                }
        }
    localStorage.setItem("todo-list", JSON.stringify(currentList));
}