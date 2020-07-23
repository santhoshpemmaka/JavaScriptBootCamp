'use strict'


const inputElement = document.querySelector("#note-title")
const inputBody = document.querySelector("#note-body")
const removeButton = document.querySelector("#note-button")
const dateElement = document.querySelector('#note-span')

const noteid = location.hash.substring(1)
const notes = getSavedNotes()

const note = notes.find((note) => {
    return note.id == noteid;
})

if(note == undefined){
    location.assign('file:///home/santhosh/Documents/javaScript/notes-app/index.html')
}

inputElement.value = note.title
inputBody.value = note.body
dateElement.textContent = `Last edited ${moment(note.updateAt).fromNow()}`

inputElement.addEventListener("input",(e) => {
    note.title = e.target.value
    note.updateAt = moment().valueOf()
    savedNotes(notes)
})

inputBody.addEventListener("input",(e) => {
    note.body = e.target.value
    note.updateAt = moment().valueOf()
    savedNotes(notes)
})

removeButton.addEventListener("click",(e) => {
    removeNotes(notes,note.id)
    savedNotes(notes)
    location.assign('file:///home/santhosh/Documents/javaScript/notes-app/index.html')
})


