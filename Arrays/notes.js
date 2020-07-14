const notes = ['Note 1', 12,4];
notes.push("My new note")
console.log(notes)
notes.pop()

// // shift operation remove of the starting array

console.log(notes.shift())

// // unshift operation added of the starting array

console.log(notes.unshift("My first note"))

// splice operation of the array
// first argument will be the index value and second argument will be the no of items will be  removed after the index value.


notes.splice(1,1)

// adding of the element in the paticular index value

notes.splice(2,0,"the will be second note")

notes.splice(1,1,"the will be first note")

notes[2] = "This is the new note";


console.log(notes)

