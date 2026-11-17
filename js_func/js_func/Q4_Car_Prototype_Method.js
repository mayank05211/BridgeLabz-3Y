// Q4: Constructor Function and Prototype Method

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Define the method once on Car.prototype so all Car objects can share it.
Car.prototype.getDetails = function () {
    return `Car: ${this.brand} ${this.model}`;
};

const firstCar = new Car("Toyota", "Camry");
const secondCar = new Car("Honda", "City");

console.log(firstCar.getDetails());
console.log(secondCar.getDetails());

// Both objects use the same shared prototype method.
console.log(
    "Method shared through prototype:",
    firstCar.getDetails === secondCar.getDetails
);
