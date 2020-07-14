notes = ["note1","note2","note3","note4"]

console.log(notes.indexOf("note1")) // dispaly positive number means element present in the array
console.log(notes.indexOf("note"))  // display negative number means element not present in the array

// Array of the objects.

const note1 = [{
    title: 'My next trip',
    body: 'I would like to go to Spin'

},
{   
    title: 'habbitis to  work on',
    body : "execrise, Eating, Sleeping"

},
{
    title: "to workout",
    body: "to ruuning daily"
},{
    title : "watch movie",
    body : "action movies "
}]

console.log(notes.length)
console.log(notes)
console.log(notes.indexOf({}))

let someObject = {}
otherObject = someObject;

console.log(someObject === otherObject) // returns the true because of the same memory

console.log({} === {}) // returns the flase because of the different memory

// findIndex used to the array of the objects.

const index = note1.findIndex((note,index)=>{
    console.log(note)
    return note.title == 'to workout';
})
console.log(index)