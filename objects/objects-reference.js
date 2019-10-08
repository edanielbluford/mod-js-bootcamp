let myAccount = {
  name: "Watson",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses += amount;
};

//challenge
//add income
//resetaccount
//get account summary

let addIncome = function(account, amount) {
  account.income += amount;
};
let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `${account.name}'s account currently has a balance of: ${balance}. They have $${account.expenses} in expenses and has received $${account.income} in income.`;
};

// addIncome
addIncome(myAccount, 1000);
//addExpense
addExpense(myAccount, 2.5);
//addExpense
addExpense(myAccount, 100.5);
//get
console.log(getAccountSummary(myAccount));
//reset
resetAccount(myAccount);
//get
console.log(getAccountSummary(myAccount));
