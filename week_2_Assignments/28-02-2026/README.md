# Week 28-02-2026 Assignments

## Overview

This folder covers advanced asynchronous JavaScript patterns, functional programming concepts, and introduces backend development fundamentals.

## Folder Contents

### AsynchronousJS

Hands-on exercises with asynchronous JavaScript concepts:

- `promise.js` - Promise basics:
  - Creating promises with executor function (producer)
  - Consuming promises with `.then()` and `.catch()` (consumer)
  - Promise states: pending, fulfilled, rejected
  - Real-world example: Bank transaction with delay

- `AysnchronousFuntions.js` - Timer and async function patterns
  - Asynchronous function implementations
  - Timer-based operations

- `otpCountdownSimulator.js` - OTP Countdown:
  - Simulates OTP countdown timer
  - Demonstrates time-based operations
  - Real-world use case: Two-factor authentication

- `examPortalSimulator.js` - Exam Portal:
  - Simulates exam portal behavior
  - Demonstrates async operations in educational applications

### Rest_Parameter

Flexible function argument handling:

- `sum.js` - Rest parameter fundamentals:
  - Function that accepts variable number of arguments using `...numbers`
  - Uses `reduce()` to calculate sum of all arguments
  - Demonstrates flexibility in function parameters
  - Examples: `sumAll(10, 20)`, `sumAll(5, 15, 25, 35)`, `sumAll(1, 2, 3, 4, 5)`

## Key Concepts Covered

### Asynchronous JavaScript

- **Promises**: Producer/Consumer pattern, `.then()`, `.catch()`
- **Promise States**: Pending, Fulfilled, Rejected
- **Delayed Execution**: `setTimeout()` for async operations
- **Real-world Scenarios**: Simulating actual applications

### Rest Parameters

- **Syntax**: `function(...args)` captures multiple arguments as array
- **Use Cases**: Flexible function signatures
- **Advantages**: No need to know argument count in advance

## Learning Path

1. Start with Rest Parameters (`sum.js`) - basic concept
2. Move to Promises (`promise.js`) - understand async flow
3. Explore simulators for practical applications

## Notes

- Promises are fundamental to modern JavaScript async operations
- Rest parameters enable more flexible and cleaner APIs
- Both concepts are essential for backend and frontend development