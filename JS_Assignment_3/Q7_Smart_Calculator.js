"use strict";

// Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {}
class DivisionByZeroError extends Error {}
class NegativeRootError extends Error {}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "divide":
            if (b === 0) throw new DivisionByZeroError("Cannot divide by zero");
            return a / b;
        case "power":
            return a ** b;
        case "root":
            if (a < 0) throw new NegativeRootError("Cannot take the real square root of a negative number");
            return Math.sqrt(a);
        case "subtract":
            return a - b;
        default:
            throw new InvalidOperationError(`Unknown operation: ${operation}`);
    }
}

console.log("Q7: SMART CALCULATOR");
for (const operation of operations) {
    try {
        // For "root", the first operand is used; for other operations both operands are used.
        const result = operation === "root"
            ? calculate(operation, num1, num2)
            : calculate(operation, num1, num2);
        console.log(`${operation.toUpperCase()} (${num1}, ${num2}) => ${result}`);
    } catch (error) {
        console.log(`${operation.toUpperCase()} (${num1}, ${num2}) => ERROR [${error.constructor.name}]: ${error.message}`);
    }
}

// Try calculate("modulo", num1, num2) to test InvalidOperationError.
