/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const creditTransactions = transactions.filter(
  t => t.type === "credit"
);

const transactionAmounts = transactions.map(
  t => t.amount
);

const finalBalance = transactions.reduce(
  (acc, t) => t.type === "credit"
    ? acc + t.amount
    : acc - t.amount,
  0
);

const firstDebit = transactions.find(
  t => t.type === "debit"
);

const indexOf10000 = transactions.findIndex(
  t => t.amount === 10000
);

console.log(creditTransactions);
console.log(transactionAmounts);
console.log(finalBalance);
console.log(firstDebit);
console.log(indexOf10000);