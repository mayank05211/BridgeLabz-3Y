// Q2: Student Form Validator (Forms + RegExp)
// Link this file to Q2_Student_Form_Validator.html and open the HTML file in a browser.

const studentForm = document.getElementById("studentForm");

const validationRules = {
    name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const errorMessages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone number must contain exactly 10 digits.",
    password: "Password needs an uppercase letter, a number, and a special character."
};

function validateField(input) {
    const fieldName = input.name;
    const isValid = validationRules[fieldName].test(input.value.trim());
    const errorElement = document.getElementById(`${fieldName}Error`);

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    errorElement.textContent = isValid ? "" : errorMessages[fieldName];

    return isValid;
}

Object.keys(validationRules).forEach(fieldName => {
    const input = studentForm.elements[fieldName];
    input.addEventListener("input", () => validateField(input));
});

studentForm.addEventListener("submit", event => {
    event.preventDefault();

    const inputs = Object.keys(validationRules).map(name => studentForm.elements[name]);
    const allValid = inputs.map(validateField).every(Boolean);

    if (allValid) {
        document.getElementById("studentMessage").textContent =
            "Student registration details are valid!";
    } else {
        document.getElementById("studentMessage").textContent =
            "Please correct the highlighted fields.";
    }
});
