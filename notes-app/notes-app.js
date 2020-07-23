
let note1 = getSavedNotes();
const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

render(note1,filters)

document.querySelector('#createNote').addEventListener('click', (e) =>{
    id = uuidv4()
    const timeStamp = moment().valueOf()

    note1.push({
        id:id,
        title: '',
        body: '',
        createAt: timeStamp,
        updateAt: timeStamp
    })
    savedNotes(note1)

    location.assign(`file:///home/santhosh/Documents/javaScript/notes-app/edit.html#${id}`)
})


document.querySelector('#inputText').addEventListener('input',(e) => {
    filters.searchText = e.target.value;
    render(note1,filters)
})

document.querySelector("#filterId").addEventListener('change',(e) => {
    filters.sortBy = e.target.value
    render(note1,filters)
})


 



// const birthDay = moment()
// birthDay.year(1995).month(6).date(1)
// console.log(birthDay.format('MMM D, YYYY'))



// const now = moment()
// console.log(now.toString())
// now.subtract(2,'year').subtract(20,'days')
// console.log(now.toString())
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestrap = now.valueOf()
// console.log(moment(nowTimestrap).format('MM DD YY')) 


// const now = new Date();
// console.log(now.toString())

// console.log(`year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`date: ${now.getDate()}`)
// console.log(`hours: ${now.getHours()}`)
// console.log(`year: ${now.getMinutes()}`)
// console.log(`year: ${now.getSeconds()}`)


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

// sessionStorage.setItem('location','AndraPrasad')

// console.log(sessionStorage.getItem('location'))

// sessionStorage.removeItem('location')
// sessionStorage.clear() // sessionStorage clear all the data


// const user  = {
//     name: 'SanthoshPemmaka',
//     age:27
// }
// const userJSON = JSON.stringify(user)
// sessionStorage.setItem('user',userJSON)

// const userJson = JSON.parse(sessionStorage.getItem('user'))

// console.log(`${userJson.name} is the ${userJson.age}`)