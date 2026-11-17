// Q8: Employee Salary Projection
const currentSalary = 40000;
const annualIncrementRate = 8; // Percentage increase each year.
let projectedSalary = currentSalary;

const yearlyProjection = [];

for (let year = 1; year <= 5; year++) {
    // Increase the salary by the annual percentage.
    projectedSalary *= 1 + annualIncrementRate / 100;

    yearlyProjection.push({
        year,
        salary: Math.round(projectedSalary).toLocaleString("en-IN")
    });
}

console.table(yearlyProjection);
