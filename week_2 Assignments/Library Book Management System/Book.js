/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library. */

// Requirements:
//   Create a Book class with the following:

// Book Class
class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been borrowed.`);
    } else {
      console.log(`${this.title} is already borrowed.`);
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} has been returned.`);
  }

  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  isLongBook() {
    return this.pages > 300;
  }
}

// Create 5 Book Objects
const book1 = new Book("Harry Potter", "J.K. Rowling", 500);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book4 = new Book("Atomic Habits", "James Clear", 280);
const book5 = new Book("The Alchemist", "Paulo Coelho", 197);

// Store in array (Library)
const library = [book1, book2, book3, book4, book5];

// i. Display info of all books
console.log("All Books:");
library.forEach(book => console.log(book.getInfo()));

// ii. Borrow 2 books
book1.borrow();
book3.borrow();

console.log("\nAvailability after borrowing:");
console.log(book1.title, book1.isAvailable);
console.log(book3.title, book3.isAvailable);

// iii. Return 1 book
book1.returnBook();

console.log("\nAvailability after returning:");
console.log(book1.title, book1.isAvailable);

// iv. Count long books (>300 pages)
const longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("\nNumber of long books:", longBooksCount);

// v. List all available books
const availableBooks = library.filter(book => book.isAvailable);

console.log("\nAvailable Books:");
availableBooks.forEach(book => console.log(book.getInfo()));