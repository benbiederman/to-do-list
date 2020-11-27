const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', checkDelete);
filterOption.addEventListener('click', filterTodo)

//Functions
function addToDo(event){
    event.preventDefault();

    //Create new div
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');

    //Create new todo
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newDiv.appendChild(newTodo);

    //Completed Button
    const completedButton = document.createElement('button');
    completedButton.textContent = 'O';
    completedButton.classList.add('completed-button')
    newDiv.appendChild(completedButton);

    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button')
    newDiv.appendChild(deleteButton);

    todoInput.value = '';
    todoList.appendChild(newDiv);
}

function checkDelete(e) {
    const items = e.target;

    //Completed Button 
    if(items.classList == 'completed-button'){
        items.parentNode.classList.add('completed');
    }

    //Deleted Button
    if(items.classList == 'delete-button'){
        items.parentNode.classList.add('delete');
        setTimeout(() => {items.parentNode.remove();}, 300);
    }
    
}

function filterTodo(e){
    const todos = todoList.childNodes;

    todos.forEach((todo) => {
        switch(filterOption.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;

            case 'uncompleted':
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}
