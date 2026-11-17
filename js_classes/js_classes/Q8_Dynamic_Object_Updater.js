// Q8: Dynamic Object Updater
// Link this file to Q8_Dynamic_Object_Updater.html and open it in a browser.

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userDetails = document.getElementById("userDetails");

// Populate the form with the starting object values.
userForm.elements.name.value = user.name;
userForm.elements.email.value = user.email;
userForm.elements.age.value = user.age;

function displayUser() {
    userDetails.textContent = JSON.stringify(user, null, 2);
}

displayUser();

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the existing object from the current form values.
    user.name = userForm.elements.name.value.trim();
    user.email = userForm.elements.email.value.trim();
    user.age = Number(userForm.elements.age.value);

    displayUser();
});
