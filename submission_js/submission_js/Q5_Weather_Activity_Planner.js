// Q5: Weather Activity Planner
const temperature = 28;
const isRaining = false;
const windSpeed = 12;

let advice;

// Rain takes priority over all other weather conditions.
if (isRaining) {
    advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
} else {
    advice = "Perfect day for a walk.";
}

// Example of combining logical AND and OR operators.
const isComfortableOutside = !isRaining && (temperature >= 15 || windSpeed <= 20);
console.log(`Weather advice: ${advice}`);
console.log(`Comfortable outside: ${isComfortableOutside}`);
