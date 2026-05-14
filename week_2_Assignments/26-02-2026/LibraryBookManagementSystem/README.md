# Library Book Management System

## Overview

An object-oriented JavaScript implementation using classes to manage a library's book collection. Demonstrates class design, methods, and array operations.

## Project Structure

- `Book.js` - Complete library management system with a `Book` class and operations

## Book Class

The `Book` class represents a book with the following:

### Constructor
```js
Book(title, author, pages, isAvailable = true)
```

### Properties
- `title` - Book title
- `author` - Author name
- `pages` - Number of pages
- `isAvailable` - Availability status (default: true)

### Methods

- `borrow()` - Marks book as unavailable if available
- `returnBook()` - Marks book as available again
- `getInfo()` - Returns formatted book information
- `isLongBook()` - Returns true if book has more than 300 pages

## Features

- **Book Collection**: Maintains library of 5 sample books
- **Borrow/Return**: Check availability and update status
- **Book Information**: Display complete book details
- **Classification**: Identify long books (>300 pages)
- **Filtering**: List available and unavailable books

## Sample Books

1. Harry Potter by J.K. Rowling (500 pages)
2. 1984 by George Orwell (328 pages)
3. The Hobbit by J.R.R. Tolkien (310 pages)
4. Atomic Habits by James Clear (280 pages)
5. The Alchemist by Paulo Coelho (197 pages)

## Operations Demonstrated

1. Display information for all books using `forEach()`
2. Borrow books and update availability
3. Return borrowed books
4. Count long books using `filter()`
5. List available books using `filter()`

## Usage Example

```js
const book = new Book('The Hobbit', 'J.R.R. Tolkien', 310);

// Borrow a book
book.borrow();              // The Hobbit has been borrowed.

// Check if it's a long book
if (book.isLongBook()) {
    console.log('This is a long book');
}

// Return the book
book.returnBook();          // The Hobbit has been returned.

// Get book info
console.log(book.getInfo()); // The Hobbit by J.R.R. Tolkien (310 pages)
```

## Learning Objectives

- Class-based OOP in JavaScript
- Instance methods and properties
- Array filtering and iteration
- Object state management
- Real-world problem modeling