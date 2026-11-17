// Q3: Arrow Function and the Value of `this`

const user = {
    name: "Mayank",

    // Arrow functions do not create their own `this`.
    // They use `this` from the surrounding lexical scope.
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();

// Fix: use a normal method function, which receives `this` from the caller.
user.showName = function () {
    console.log("Normal function this.name:", this.name);
};

user.showName();

// Explanation:
// Calling user.showName() as a normal method sets `this` to `user`.
// An arrow function keeps the surrounding `this`, so it does not refer to `user`.
// In a Node.js CommonJS file, the surrounding top-level `this` is not the user object,
// therefore `this.name` is undefined.
