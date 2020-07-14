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
    title : "sadfasd",
    body : "sdaf"
}]


const findNote = (notes, noteTitle) => {
    
    const index = notes.findIndex((note,index) => {
        return note.title == noteTitle
    })

    return notes[index]

}

const findNote1 = (notes, noteTitle) => {
    const index = notes.find((note,index) => {  // find return undefined element not present in the array. 
        return note.title == noteTitle
    })

    return index;

}

const result_note = findNote1(note1,"to workout")

console.log(result_note)