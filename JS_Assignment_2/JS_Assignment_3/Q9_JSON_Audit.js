"use strict";

// Q9 – JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

console.log("Q9: JSON AUDIT");

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        const parsed = JSON.parse(rawData[i]);

        if (!Object.prototype.hasOwnProperty.call(parsed, "user") ||
            !Object.prototype.hasOwnProperty.call(parsed, "age")) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }

        const record = { ...parsed, age };
        clean.push(record);
        if (age < 18) under18.push(record);

        console.log(`Line ${lineNumber}: valid JSON and required fields`, record);
        // Debug: breakpoint here to inspect parsed, record, clean, and under18.
    } catch (error) {
        errors.push({ line: lineNumber, message: error.message });
        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
        // Debug: breakpoint here to see how catch handles parse/validation errors.
    }
}

console.log("\nClean entries:", clean);
console.log("Errors:", errors);
console.log("Under-18 users:", under18);
console.log(`Valid: ${clean.length}; Failed: ${errors.length}`);
