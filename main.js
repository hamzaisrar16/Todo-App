

function renderTodo() {
    ol.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `
        <li> ${arr[i]}
        
        <button class = "btn-02" onclick="deleteTodo(${i})">delete</button>
         <button class = "btn-03" onclick="editTodo(${i})">edit</button>
        </li>
        `
    }
}


const todoInput = document.querySelector('#todo');
const ol = document.querySelector('ol');

const arr = [];

function addTodo() {
    arr.push(todoInput.value);
    renderTodo()
    todoInput.value = ''
}



function deleteTodo(index) {
    arr.splice(index, 1);
    renderTodo()
}

function editTodo(index) {
    const updatedVal = prompt('enter updated value');
    arr.splice(index , 1 , updatedVal);
    renderTodo()
}









































