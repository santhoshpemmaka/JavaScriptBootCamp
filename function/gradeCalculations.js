const gradeCalculations = (studentScore, totalScore) => {
   
    if(typeof(studentScore) =='number' && typeof(totalScore) == 'number'){

    let gradeAssign = (studentScore / totalScore) * 100;
    if(90 <= gradeAssign || gradeAssign <=100){
        return `You got a A {${gradeAssign}}`;
    }
    else if(80 <= gradeAssign || gradeAssign <=89){
        return `You got a B {${gradeAssign}}`;
    }
    else if(70 <= gradeAssign || gradeAssign <= 79){
        return `You got a C {${gradeAssign}}`;
    }
    else if(60 <= gradeAssign || gradeAssign <= 69){
        return `You got a D {${gradeAssign}}`;
    }
    else {
        return `You got a E {${gradeAssign}}`;
    }
}
else{
    // throw Error('Please provide numbers only')
    throw("please valid number")
}

}

try{
    console.log(gradeCalculations("50", "100"))
}catch(e){
    // console.log(e.message)
    console.log(e)
}