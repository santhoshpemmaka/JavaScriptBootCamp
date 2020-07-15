params = document.querySelectorAll('p');

params.forEach((para) => {
    let result_para = para.textContent.includes('the')
    if(result_para){
        para.remove()
    }
})

