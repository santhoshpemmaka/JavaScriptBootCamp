// DOM - Document object model
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

const filters = {
    searchText: ''
}

const render = (notes,filters) =>{
    const filterNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())

    })
    
    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach((filter) => {
        const noteEl = document.createElement('p')
        noteEl.textContent = filter.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

render(note1,filters)

document.querySelector('#createNote').addEventListener('click', (e) =>{
    e.target.textContent = "The button Clicked"
})


document.querySelector('#inputText').addEventListener('input',(e) => {
    filters.searchText = e.target.value;
    render(note1,filters)
})

document.querySelector("#filterId").addEventListener('change',(e) => {
    console.log(e.target.value)
})

// document.querySelector('#name-form').addEventListener('submit',(e) => {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })



// query remove
// const param = document.querySelector('p')
// param.remove()

// // query all and remove

// const params = document.querySelectorAll('p')

// params.forEach((par) =>{
//     par.textContent ="This is overwritten text"
//     // console.log(par.textContent)
//     // par.remove()
// })

// const newParagraphy = document.createElement('p')
// newParagraphy.textContent = "This is the new element from javaScript"
// document.querySelector('body').appendChild(newParagraphy)



