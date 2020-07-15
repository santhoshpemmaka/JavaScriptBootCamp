// differnet ways define functions.

const square = (num) => {
    return num*num;
}

let square1 = function(num){
    return num*num*num;
}

function square2(num){
    return num*num*num*num;
}

console.log(square(3))
console.log(square1(3))
console.log(square2(3))

