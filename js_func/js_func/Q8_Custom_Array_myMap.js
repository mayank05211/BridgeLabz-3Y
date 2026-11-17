// Q8: Add a custom myMap() method to Array.prototype

// Define a non-enumerable method so it does not appear in normal array iteration.
Object.defineProperty(Array.prototype, "myMap", {
    value: function (callback, thisArg) {
        if (this === null || this === undefined) {
            throw new TypeError("myMap called on null or undefined");
        }

        if (typeof callback !== "function") {
            throw new TypeError("Callback must be a function");
        }

        const sourceArray = Object(this);
        const length = sourceArray.length >>> 0;
        const result = new Array(length);

        // Match map() behavior by skipping array indexes that do not exist.
        for (let index = 0; index < length; index++) {
            if (index in sourceArray) {
                result[index] = callback.call(
                    thisArg,
                    sourceArray[index],
                    index,
                    sourceArray
                );
            }
        }

        return result;
    },
    writable: true,
    configurable: true
});

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(number => number * 2);
console.log("Original:", numbers);
console.log("Using myMap():", doubledNumbers);

// Another example showing index and original array arguments.
const descriptions = numbers.myMap(
    (number, index) => `Item ${index + 1}: ${number}`
);
console.log(descriptions);
