"use strict";

// Q6 – Pyramid Pattern Generator
// In VS Code, change the value of rowLimit below to test a different outer-loop limit.
// Default is 5; the first four rows match the assignment's example.
const userInput = ""; // Optional: type a number here, e.g. "7". Empty means default.
const parsedLimit = userInput.trim() === "" ? 5 : Number(userInput);
const rowLimit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 5;

console.log(`Q6: PYRAMID (${rowLimit} rows)`);

for (let row = 1; row <= rowLimit; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += "* ";
    }
    console.log(line.trimEnd());
}

// var comparison: replacing let row/col with var makes them function-scoped rather than
// block-scoped. This simple synchronous loop still prints the same pattern, but the variables
// remain available outside the loop in the surrounding function/global script scope.
// "use strict" catches assignments to undeclared variables, such as: rowCount = 5;
// Debug: set a breakpoint inside the inner loop and watch row, col, and line.
