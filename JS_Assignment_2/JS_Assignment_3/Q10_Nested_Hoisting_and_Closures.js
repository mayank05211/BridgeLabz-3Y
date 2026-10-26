"use strict";

// Q10 – Nested Hoisting and Closures
function outer() {
    console.log("outer before assignment:", count); // undefined: var is hoisted in outer()
    var count = 5;

    function inner() {
        console.log("inner before assignment:", count); // undefined: inner's own var shadows outer count
        var count = 10;
        console.log("inner after assignment:", count); // 10
    }

    inner();
    console.log("outer after inner:", count); // 5
}

outer();

// Arrow-function version. The arrow has its own local `count` because it declares one;
// removing `var count` inside the arrow would make it read outer's count (lexical scope).
function outerWithArrow() {
    var count = 5;
    const inner = () => {
        console.log("arrow reads outer count:", count);
    };
    inner();
}
outerWithArrow();

// Call stack walkthrough in VS Code:
// Set breakpoints at outer(), inner(), and the arrow call. Start debugging (F5).
// Step into (F11) to enter inner; the Call Stack shows inner above outer.
// Step out (Shift+F11) to return to outer. The Scope panel shows each function's local bindings.
