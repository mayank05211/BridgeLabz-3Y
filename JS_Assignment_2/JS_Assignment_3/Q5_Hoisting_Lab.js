"use strict";

// Q5 – Hoisting Lab: The Sequence Trap
// Original order is intentionally not used because console.log(score) prints undefined,
// announce() works because function declarations are hoisted, and reading status before
// its let declaration would throw ReferenceError (temporal dead zone).

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

var score = 50;
let status = "ready";

console.log("Score:", score);
announce();
startGame();

// Arrow-function comparison:
// Function declarations can be called before their declaration.
// Arrow functions assigned to const/let are not usable before initialization.
const announceArrow = () => console.log("Game started (arrow)");
announceArrow();

// Debug note: set breakpoints on the declarations and calls; inspect score/status in Scope.
// Hoisting creates the bindings before execution, but var starts as undefined while let/const
// remain uninitialized in the temporal dead zone until their declaration executes.
