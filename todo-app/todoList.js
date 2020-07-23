let todos = getTodolist()

let filters = {
    searchText : ''
}

renderTodos(todos,filters)

document.querySelector('#todo-list').addEventListener('submit',(e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text : e.target.elements.todoList.value,
        completed: false
    })
    storeTodolist(todos)
    renderTodos(todos,filters)
    e.target.elements.todoList.value = ''
})

document.querySelector("#inputTodo").addEventListener('input',(e) => {
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

document.querySelector("#todoList").addEventListener('change',(e) => {
    if(e.target.checked){
        const newTodo = todos.filter((todo) => {
            return todo.completed == e.target.checked
        })
        renderTodos(newTodo,filters)
    }
    else{
        renderTodos(todos,filters)
    } 
    
    
})


// adding button addlistener

// document.querySelector('#addTodo').addEventListener('click',(e) => {
//     console.log("adding  to the todo...")
// })

// // input todo 

// params = document.querySelectorAll('p');

// params.forEach((para) => {
//     let result_para = para.textContent.includes('the')
//     if(result_para){
//         para.remove()
//     }
// })

