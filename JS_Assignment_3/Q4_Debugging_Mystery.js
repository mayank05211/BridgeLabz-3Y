"use strict";

// Q4 – Debugging Mystery
function showMessage() {
    // In strict mode, assigning to an undeclared variable throws ReferenceError.
    const greeting = "Welcome"; // Fixed: declare the variable.
    console.log(greeting);
}

showMessage();

// VS Code debugging:
// 1. Click left of the const greeting line to set a breakpoint.
// 2. Start "Run and Debug" (F5), then step over with F10.
// 3. Add greeting to WATCH. Inspect the Call Stack panel: showMessage is active,
//    then the global/script frame appears beneath it.
