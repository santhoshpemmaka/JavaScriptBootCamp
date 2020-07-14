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



const sortNotes = (notes) => {
    notes.sort((a,b) => {
        if(a.title.toLowerCase() < b.title.toLowerCase() ){
            return -1;
        }
        else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        else{
            return 0;
        }
    })
}

sortNotes(note1)
console.log(note1)