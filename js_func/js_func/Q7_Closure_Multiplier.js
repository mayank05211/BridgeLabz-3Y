// Q7: Closure - Multiplier Factory

function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier variable
    // from this outer function's lexical scope.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure explanation:
// makeMultiplier finishes running, but the returned inner function
// retains access to the multiplier value captured when it was created.
