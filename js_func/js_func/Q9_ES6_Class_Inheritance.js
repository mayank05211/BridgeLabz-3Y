// Q9: Person -> Student Inheritance using ES6 Classes

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the parent class constructor.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const classStudent = new Student("Aarav", "Computer Science");

classStudent.showName();   // Inherited from Person.
classStudent.showBranch(); // Defined in Student.

console.log(
    "Student is an instance of Person:",
    classStudent instanceof Person
);

// Comparison with the constructor/prototype version from Q5.
console.log(
    "Prototype version and class version both support inheritance."
);
