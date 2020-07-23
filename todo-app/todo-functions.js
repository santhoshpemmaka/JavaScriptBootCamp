'use strict'

// Get the todoList from the sessionStorage
const getTodolist = () =>{
    const todoJSON = sessionStorage.getItem('todos')
    try{
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch(e){
        return [];
    }
}

// store Todolist to the sessionStorage

const storeTodolist = (todos) =>{
    sessionStorage.setItem('todos',JSON.stringify(todos))
}

// Remove TodoList

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id;
    })
    todoIndex > -1 ? todos.splice(todoIndex,1) : null;
}

//Check box handle todoList

const checkboxTodo = (id) => {
    todos.map((todo) => {
        if(todo.id === id){
            todo.completed = !todo.completed
        }
    })
    storeTodolist(todos)
    renderTodos(todos,filters)

}

// Generating the todoList

const generatingTodolist = (todo) => {

    const newPara = document.createElement('div')
    const todoChecked = document.createElement('input')
    todoChecked.setAttribute('type','checkbox')
    todoChecked.checked = todo.completed
    todoChecked.addEventListener("click",() => {
        checkboxTodo(todo.id)

    })
    newPara.appendChild(todoChecked)
    

    const todoText = document.createElement('span')
    if(todo.text.length){
        todoText.textContent = todo.text
    }
    else{
        todoText.textContent = 'No TodoList'
    }
    newPara.appendChild(todoText)

    const todoButton = document.createElement('button')
    todoButton.textContent = "X"
    todoButton.addEventListener('click',() => {
        removeTodo(todo.id)
        storeTodolist(todos)
        renderTodos(todos,filters)
    })

    newPara.appendChild(todoButton)
    return newPara;
}

// rendering of the applications

const renderTodos = (todos,filters) => {
    const newTodo = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText)
    })

    document.querySelector("#todos").innerHTML = ''
    document.querySelector('#todos').appendChild(getSummaryheading())
    newTodo.forEach((todo) => {
        const newPara = generatingTodolist(todo)
        document.querySelector('#todos').appendChild(newPara)
    })


}

const getSummaryheading = () => {
    let todo_left = 0
    todos.forEach((todo) => {
        if(todo.completed == false){
            todo_left++;
        }
    })

    const newParaTodo = document.createElement('h2')
    newParaTodo.textContent = `You have ${todo_left} todos left`
    return newParaTodo;
    
}