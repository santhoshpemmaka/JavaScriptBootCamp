const todos = [{
    text:"order dinner",
    completed: false
},
{
    text:"Go to the movie",
    completed: true
},
{
    text:"Watching the tv show",
    completed: false
},
{
    text:"Learn the JavaScript",
    completed: false
},
{
    text:"Go to the outing",
    completed: true
},
{
    text:"Eat the breakfast",
    completed: false
}]

let filters = {
    searchText : ''
}

const renderTodos = (todos,filters) => {
    const newTodo = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText)
    })

    document.querySelector("#todos").innerHTML = ''
    let todo_left = 0
    todos.forEach((todo) => {
        if(todo.completed == false){
            todo_left++;
        }
    })

    const newParaTodo = document.createElement('h2')
    newParaTodo.textContent = `You have ${todo_left} todos left`
    document.querySelector('#todos').appendChild(newParaTodo)
    newTodo.forEach((todo) => {
        const newPara = document.createElement('p')
        newPara.textContent = todo.text
        document.querySelector('#todos').appendChild(newPara)
    })


}

renderTodos(todos,filters)

document.querySelector('#todo-list').addEventListener('submit',(e) => {
    e.preventDefault()
    todos.push({
        text : e.target.elements.todoList.value,
        completed: false
    })
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
            return !todo.completed == e.target.checked
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

