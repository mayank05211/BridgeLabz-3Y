// Q3: Monthly Expense Tracker
// Store expenses for the five required categories.
const expenses = {
    food: 4500,
    travel: 1800,
    rent: 9000,
    bills: 2200,
    leisure: 1500
};

// Add each category to the total using the addition assignment operator.
let totalExpenses = 0;
totalExpenses += expenses.food;
totalExpenses += expenses.travel;
totalExpenses += expenses.rent;
totalExpenses += expenses.bills;
totalExpenses += expenses.leisure;

const categoryCount = Object.keys(expenses).length;
const averageExpense = totalExpenses / categoryCount;

// Add 10% tax to the total.
const taxRate = 0.10;
const taxAmount = totalExpenses * taxRate;
let finalAmount = totalExpenses;
finalAmount += taxAmount;

console.log("Monthly Expenses");
console.table([
    ...Object.entries(expenses).map(([category, amount]) => ({
        category,
        amount: amount.toFixed(2)
    })),
    { category: "Total", amount: totalExpenses.toFixed(2) },
    { category: "Average", amount: averageExpense.toFixed(2) },
    { category: "Tax (10%)", amount: taxAmount.toFixed(2) },
    { category: "Final amount", amount: finalAmount.toFixed(2) }
]);
