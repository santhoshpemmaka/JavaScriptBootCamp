let myAccount = {
    name : 'santhosh',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount;
otherAccount.expenses = 1000;
console.log(myAccount)
const addExpense = (account,amount) => {
    account.expenses = account.expenses + amount
    account = {}  // doesn't work operation
}

addExpense(myAccount,100);
console.log(myAccount)