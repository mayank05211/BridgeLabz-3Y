// Q7: Login Form Validation using RegExp
// Link this file to Q7_Login_Form_Validation.html and open it in a browser.

const loginForm = document.getElementById("loginForm");
const usernamePattern = /^.{5,}$/;
const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;
    const errors = [];

    if (!usernamePattern.test(username)) {
        errors.push("Username must be at least 5 characters long.");
    }

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must include at least one number.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must include at least one special character.");
    }

    const message = document.getElementById("loginMessage");

    if (errors.length === 0) {
        message.className = "success";
        message.textContent = "Login validation successful!";
    } else {
        message.className = "error";
        message.textContent = errors.join("\\n");
    }
});
