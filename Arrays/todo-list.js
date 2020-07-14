todos = [
    "first",
    "second",
    "thrid",
    "fourth",
    "fiveth"
]
// Challenge area
// Deleted the third element

todos.splice(2,1);
console.log(todos)
// added element to the end of the array

todos.push("sixth")
console.log(todos)
// Remove the first element

todos.shift()
console.log(todos)

console.log(`you have to ${todos.length} todos`)
console.log(todos)
console.log(todos[todos.length -1])