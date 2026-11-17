// Q1: Callback Greeting
// A callback is a function passed to another function to be called later.

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // Execute the callback after greeting the user.
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Pass showEndMessage as a callback (do not call it here).
greetUser("Mayank", showEndMessage);
