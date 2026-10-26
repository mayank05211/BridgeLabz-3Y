"use strict";

// Q2 – Employee Bonus Calculator
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("Q2: EMPLOYEE BONUS CALCULATOR");

for (const employee of employees) {
    try {
        if (!employee || !("name" in employee) || !("salary" in employee) || !("years" in employee)) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Salary or years could not be converted to a valid number");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;

        console.log(`${employee.name}: Salary = ₹${salary.toFixed(2)}, Years = ${years}, Bonus rate = ${(bonusRate * 100).toFixed(0)}%, Bonus = ₹${bonus.toFixed(2)}, Total = ₹${(salary + bonus).toFixed(2)}`);
    } catch (error) {
        console.log(`Employee error: ${error.message}`);
    }
}
