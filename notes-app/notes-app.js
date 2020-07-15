// DOM - Document object model

// query remove
const param = document.querySelector('p')
param.remove()

// query all and remove

const params = document.querySelectorAll('p')

params.forEach((par) =>{
    par.textContent ="This is overwritten text"
    console.log(par.textContent)
    par.remove()
})


