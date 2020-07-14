notes = ['note1','note2','note3','note4','note5']

// forEach looping first argument will be indivial element and second argument index value

notes.forEach((note,key)=> {
    console.log(note,key)
})

// for looping 

for(let i=0;i<notes.length;i++){
    console.log(`The listing of the ${notes[i]}`)
}