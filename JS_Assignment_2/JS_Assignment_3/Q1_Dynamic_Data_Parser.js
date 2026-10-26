"use strict";

// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

console.log("Q1: DYNAMIC DATA PARSER");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nItem ${i + 1}: original=${stringValue}`);
    console.log(`  Number: ${numberValue}, Boolean: ${booleanValue}, String: "${stringValue}"`);

    // Number("true"), Number("false"), Number("NaN"), Number(" "), and Number("100px")
    // do not represent the intended numeric input. Whitespace is explicitly invalid here.
    const isExplicitlyInvalid = value === "NaN" || value === " " || value === "100px";
    if (isExplicitlyInvalid || (typeof value === "string" && value.trim() !== "" && Number.isNaN(numberValue))) {
        invalidNumbers.push(value);
        console.log("  Status: INVALID numeric data");
    } else if (typeof value === "number" || (typeof value === "string" && value.trim() !== "" && !Number.isNaN(numberValue))) {
        validNumbers.push(numberValue);
        console.log("  Status: valid numeric data");
    } else {
        console.log("  Status: not treated as numeric data");
    }
}

console.log("\nValid numeric values:", validNumbers);
console.log("Invalid numeric values:", invalidNumbers);
console.log(`Valid count: ${validNumbers.length}; Invalid count: ${invalidNumbers.length}`);
