let myAccount = {
    name : 'santhosh',
    expenses: 0,
    income: 0
}

const addExpense = (account,amount) => {
    account.expenses = amount;
}

const addIncome = (account,amount) => {
    account.income = amount;
}


const resetAmount = (account) => {
    account.income = 0;
    account.expenses = 0;
}

const getSummary = (account) => {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}.$${account.income} in income. $${account.expenses} in expenses.` 
}

addExpense(myAccount,500)
addIncome(myAccount,1000)
console.log(getSummary(myAccount))
resetAmount(myAccount)
console.log(getSummary(myAccount))
