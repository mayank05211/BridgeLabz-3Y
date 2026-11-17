// Q6: Employee Management System (Classes + Object Methods)
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary.
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new Error("Bonus percentage cannot be negative.");
        }

        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(1, "Aarav", "IT", 50000),
    new Employee(2, "Diya", "HR", 42000),
    new Employee(3, "Kabir", "Sales", 46000),
    new Employee(4, "Meera", "Finance", 55000),
    new Employee(5, "Rohan", "Marketing", 40000)
];

// Apply a 5% bonus to each employee before calculating annual salary.
employees.forEach(employee => employee.applyBonus(5));

const salaryReport = employees.map(employee => ({
    id: employee.id,
    name: employee.name,
    department: employee.department,
    annualSalary: employee.getAnnualSalary().toFixed(2)
}));

// reduce() calculates the company's total annual salary payout.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.table(salaryReport);
console.log(`Total annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
