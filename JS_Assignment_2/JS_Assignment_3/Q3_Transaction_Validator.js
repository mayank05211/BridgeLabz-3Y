"use strict";

// Q3 – Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

class NegativeAmountError extends Error {}
class MissingFieldError extends Error {}
class NullTransactionError extends Error {}

console.log("Q3: TRANSACTION VALIDATOR");

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        if (transaction === null) {
            throw new NullTransactionError("Transaction entry is null");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingFieldError("Transaction is missing id or amount");
        }
        if (transaction.amount < 0) {
            throw new NegativeAmountError("Transaction amount cannot be negative");
        }

        valid.push(transaction);
        console.log(`Row ${index + 1}: VALID`, transaction);
        // Debug tip: set a breakpoint on valid.push(...) and inspect index, transaction, valid.
    } catch (error) {
        invalid.push({ row: index + 1, transaction, type: error.constructor.name, message: error.message });
        console.log(`Row ${index + 1}: INVALID [${error.constructor.name}] ${error.message}`);
        // Debug tip: set a breakpoint here to inspect the caught error and invalid array.
    }
}

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}; Failed: ${invalid.length}`);
