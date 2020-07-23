// Read exists notes form the SessionStorage
'use strict'

const getSavedNotes = () => {
    const noteJSON = sessionStorage.getItem('notes')
    try{
        return noteJSON ?  JSON.parse(noteJSON) : [];
    } catch(e){
        return []
    }
}

// Stored the data

const savedNotes = (note1) => {
    sessionStorage.setItem('notes',JSON.stringify(note1))
}


// Remove Notes

const removeNotes = (notes,id) => {
    console.log("reached to the remove notes")
    const noteIndex = notes.findIndex((note) => {
        return note.id === id;
    })
    console.log(noteIndex)
    if(noteIndex >-1){
        notes.splice(noteIndex,1);
    }
} 

// Generated the DOM Structure for a note

const generatedDOM = (filter) => {

    const noteEl = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')
    button.addEventListener('click',() => {
        removeNotes(filter.id)
        savedNotes(note1)
        render(note1,filters)
    })


    // setup the note title text
    button.textContent = "X";
    noteEl.appendChild(button)
    if(filter.title.length >0 ){
        textElement.textContent = filter.title
    }
    else{
        textElement.textContent = "Unknown Title"
    }
    textElement.setAttribute('href',`file:///home/santhosh/Documents/javaScript/notes-app/edit.html#${filter.id}`)
    noteEl.appendChild(textElement)
    return noteEl;
}

// Sort your notes one of three ways

const sortNotes = (notes, sortBy) =>{
    if(sortBy == 'byEdited'){
        return notes && notes.sort((a,b) =>{
            if(a.updateAt > b.updateAt){
                return -1
            }
            else if(a.updateAt < b.updateAt){
                return 1
            }
            else{
                return 0
            }
        } )
    }
    else if(sortBy == 'byCreated'){
        return notes && notes.sort((a,b) =>{
            if(a.createAt > b.createAt){
                return -1
            }
            else if(a.createAt < b.createAt){
                return 1
            }
            else{
                return 0
            }
        })
    }
    else{
        return notes
    }


}

// render applications notes

const render = (notes,filters) =>{
    notes = sortNotes(notes,filters.sortBy)
    const filterNotes = notes && notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())

    })
    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach((filter) => {
        
        const noteEl = generatedDOM(filter);
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}
