const account = {
    name : 'SanthoshPemmaka',
    expenses:[],
    income:[],
    addExpenses : function(description,amount){
        this.expenses.push({
            description,
            amount
        })
    },
    addincome: function(description,amount){
        this.income.push({
            description,
            amount
        })

    },
    getAccountSummary : function(){
        let total_expenses = 0;
        let total_income = 0;
        // this.expenses.map((expense)=> {
        //     total_Amount += expense.amount;
        // })
        this.expenses.forEach((expense)=>{
            total_expenses = total_expenses + expense.amount
        })
        this.income.forEach((income)=> {
            total_income += income.amount
        })
        let balance_amount = total_income - total_expenses;
        return `${this.name} has a balance of $${balance_amount}. $${total_income} in income. $${total_expenses} in expenses.`
    } 

}

// Expenses -> description , amount
// addExpenses -> descrition, amount
// getAccountSummary -> total up all expenses 
// add income array to account
// addincome method -> description, amount
// getAccountSummary -- Santhosh has a balance of $10. $100 in income. $90 in expenses

account.addExpenses('Rent',950)
account.addExpenses('coffee',3)
account.addincome('salary',1500)
console.log(account.getAccountSummary())
console.log(account.expenses)
console.log(account.income)
