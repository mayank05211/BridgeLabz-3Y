// Q5: Person and Student Inheritance using Constructor Functions

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Call Person's constructor to initialize the inherited name property.
    Person.call(this, name);
    this.branch = branch;
}

// Link Student.prototype to Person.prototype to establish inheritance.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Aarav", "Computer Science");

student.showName();   // Inherited from Person.prototype.
student.showBranch(); // Defined on Student.prototype.

console.log(
    "Student inherits from Person:",
    Person.prototype.isPrototypeOf(student)
);
