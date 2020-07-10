const gradeCalculations = (studentScore, totalScore) => {

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


console.log(gradeCalculations(50, 100))