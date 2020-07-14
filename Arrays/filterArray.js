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

const filterArray = note1.filter((note,index) => {
    const isTitleMatch = note.title.toLowerCase().includes("ne")
    const isbodyMatch = note.body.toLowerCase().includes("mo")

    return isTitleMatch || isbodyMatch;

})

const findNotes = (notes,query) => {
    return ( 
        notes.filter((note,index) => {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isbodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    
        return isTitleMatch || isbodyMatch;
    
    })
    )

}

console.log(findNotes(note1,'ne'))
