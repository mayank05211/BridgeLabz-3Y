"use strict";

// Q8 – Strict Mode Showdown
// The original function is a SyntaxError in strict mode because duplicate parameter names
// are forbidden. `total = 10` would also cause ReferenceError, and `delete total` is illegal
// for an unqualified identifier in strict mode.

function demo(a, b) {
    let total = 10; // Correctly declared local variable.
    console.log(`a=${a}, b=${b}, total=${total}`);
}

demo(5, 10);

// To compare without strict mode, copy this into a separate file and remove "use strict":
// function demoLoose(a, a) { total = 10; delete total; console.log(a, total); }
// demoLoose(5, 10);
// In non-strict mode duplicate parameters are permitted in ordinary functions, and assignment
// to total may create a global in classic non-module scripts. `delete total` returns false
// rather than deleting that binding. Exact behavior can differ in modules/environments.
