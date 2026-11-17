// Q2: Multi-Type Data Summary
// Sample values representing different JavaScript data types.
const userName = "Mayank";
const userAge = 21;
const isStudent = true;
const subjects = ["JavaScript", "HTML", "CSS"];
const userProfile = { city: "Aligarh", course: "Web Development" };
const middleName = null;
let alternateEmail;

// Build a report using typeof and Array.isArray().
const report = [
    { label: "User name", value: userName, type: typeof userName },
    { label: "User age", value: userAge, type: typeof userAge },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "User profile", value: JSON.stringify(userProfile), type: typeof userProfile },
    { label: "Middle name", value: String(middleName), type: middleName === null ? "null" : typeof middleName },
    { label: "Alternate email", value: String(alternateEmail), type: typeof alternateEmail }
];

// Print the complete report in one table statement.
console.table(report);
