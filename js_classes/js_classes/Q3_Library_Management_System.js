// Q3: Library Management System (Classes + Objects)
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return `${this.title} is already issued.`;
        }

        this.isIssued = true;
        return `${this.title} has been issued successfully.`;
    }

    returnBook() {
        if (!this.isIssued) {
            return `${this.title} was not issued.`;
        }

        this.isIssued = false;
        return `${this.title} has been returned successfully.`;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Atomic Habits", "James Clear", "ISBN002"),
    new Book("Clean Code", "Robert C. Martin", "ISBN003", true),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN004")
];

// Display all books that are currently available.
function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("\\nAvailable books:");
    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }

    availableBooks.forEach(book => {
        console.log(`${book.title} by ${book.author} | ISBN: ${book.isbn}`);
    });
}

displayAvailableBooks();

// Issue a book by entering its ISBN.
// In Node.js, provide the ISBN as a command-line argument:
// node Q3_Library_Management_System.js ISBN002
const requestedIsbn = process.argv[2];

if (requestedIsbn) {
    const selectedBook = books.find(book => book.isbn === requestedIsbn);

    if (selectedBook) {
        console.log(selectedBook.issueBook());
    } else {
        console.log("No book was found with that ISBN.");
    }

    displayAvailableBooks();
} else {
    console.log("\\nTo issue a book, run this file with an ISBN argument, for example:");
    console.log("node Q3_Library_Management_System.js ISBN002");
}
