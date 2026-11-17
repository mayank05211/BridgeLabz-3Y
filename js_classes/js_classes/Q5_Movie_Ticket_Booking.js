// Q5: Movie Ticket Booking (Objects + RegExp)
// Link this file to Q5_Movie_Ticket_Booking.html and open it in a browser.

const bookingForm = document.getElementById("bookingForm");
const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = bookingForm.elements.name.value.trim();
    const email = bookingForm.elements.email.value.trim();
    const seats = Number(bookingForm.elements.seats.value);

    const errors = [];

    if (!namePattern.test(name)) {
        errors.push("Name must contain alphabets only.");
    }

    if (!emailPattern.test(email)) {
        errors.push("Enter a valid email address.");
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        errors.push("Seats must be a whole number from 1 to 10.");
    }

    const output = document.getElementById("bookingOutput");

    if (errors.length > 0) {
        output.textContent = errors.join("\\n");
        return;
    }

    // Save validated booking details in an object.
    const booking = { name, email, seats };

    output.textContent =
        `Booking confirmed!\\nName: ${booking.name}\\nEmail: ${booking.email}\\nSeats: ${booking.seats}`;
});
