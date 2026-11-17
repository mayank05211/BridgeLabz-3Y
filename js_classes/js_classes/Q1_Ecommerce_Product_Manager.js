// Q1: E-Commerce Product Manager (Classes + Objects)
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Reduce the product price by the supplied percentage.
    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error("Discount must be between 0 and 100.");
        }

        this.price -= this.price * (percent / 100);
    }

    // Return product information in a readable format.
    displayDetails() {
        return `ID: ${this.id} | ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
    }
}

// Create multiple product objects and store them in an array.
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1800, "Electronics"),
    new Product(3, "Notebook", 120, "Stationery"),
    new Product(4, "Office Chair", 4500, "Furniture")
];

// Apply a 10% discount to the headphones.
products[1].applyDiscount(10);

// Display all products.
console.log("All products:");
products.forEach(product => console.log(product.displayDetails()));

// Filter and display products whose price is greater than ₹1,000.
const expensiveProducts = products.filter(product => product.price > 1000);
console.log("\\nProducts priced above ₹1,000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));
