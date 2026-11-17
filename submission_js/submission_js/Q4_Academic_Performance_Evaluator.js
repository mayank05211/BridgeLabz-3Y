// Q4: Academic Performance Evaluator
// Enter marks for five subjects (each out of 100).
const marks = [88, 91, 76, 82, 90];

// Calculate the average and overall percentage.
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// A score below 35 in any subject results in automatic detention.
const hasFailedSubject = marks.some(mark => mark < 35);

let result;
if (hasFailedSubject) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
