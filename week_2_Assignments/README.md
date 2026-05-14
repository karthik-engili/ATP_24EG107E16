# Week 2 Assignments: Advanced JavaScript & Backend Introduction

## Overview

This week dives into advanced JavaScript concepts including modular programming, functional patterns, object-oriented design, asynchronous operations, and introduces backend development with Node.js and Express. The assignments bridge frontend mastery with server-side fundamentals.

## Folder Structure & Contents

### 25-02-2026

Three comprehensive projects demonstrating modular design and real-world patterns:

#### **E-Commerce System (ECS)**
- Modular e-commerce implementation with separate modules for products, cart, discounts, and payments
- Features: Product search, cart management, coupon system, payment processing
- **Files**: `product.js`, `cart.js`, `discount.js`, `payment.js`, `app.js`
- **Concepts**: ES6 modules, separation of concerns, inventory management

#### **JavaScript Assignments (JSAssignments)**
Eight practical assignments using higher-order array methods (`filter`, `map`, `reduce`, `find`, `findIndex`):
- `bankTransactionAnalyzer.js` - Bank statement analysis
- `studentPerfDashboard.js` - College result analysis with grading
- `studentMarksList.js` - Student performance tracking
- `onlineCourse.js` - Course list processing
- `movieStreamingPlatform.js` - Movie catalog management
- `employeePayroll.js` - Payroll system
- `eCommerceCart.js` - Shopping cart operations
- `TemperatureAnalyser.js` - Weather temperature analysis
- **Concepts**: Functional programming, immutable operations, real-world problem solving

#### **Task Management System**
- Modular task management with validation
- **Files**: `app.js`, `task.js`, `validator.js`, `README.md`
- **Features**: Add tasks, retrieve all tasks, complete tasks, validate inputs
- **Concepts**: Module imports/exports, input validation, task state management

---

### 26-02-2026

Two projects exploring object manipulation and OOP concepts:

#### **Library Book Management System**
- Object-oriented library management using classes
- **File**: `Book.js`
- **Features**: Borrow/return books, view book info, identify long books, list available books
- **Concepts**: Classes, instance methods, filtering, state management

#### **Cloning Assignments**
Understanding shallow vs deep copy patterns:
- `shallowCopy.js` - Shallow copy with spread operator (shows reference mutation)
- `deepCopy.js` - Deep copy with `structuredClone()` (complete isolation)
- `exccercise1.js` - Array spreading and copying
- `excersise2.js` - Object spreading and property extension
- **Concepts**: Memory references, immutability, spread operator, copy strategies

---

### 28-02-2026

Backend introduction and advanced async patterns:

#### **Asynchronous JavaScript**
Comprehensive async operations exploration:
- `promise.js` - Promise fundamentals, producer/consumer pattern
- `AysnchronousFuntions.js` - Timer-based async functions
- `otpCountdownSimulator.js` - OTP countdown timer (real-world app simulation)
- `examPortalSimulator.js` - Exam portal with time management
- **Concepts**: Promises, async/await, setTimeout, real-world simulators

#### **Rest Parameters**
Flexible function arguments:
- `sum.js` - Variable-length function arguments using `...rest`
- **Concepts**: Rest syntax, variadic functions, array methods on rest parameters

#### **Backend-1: Express.js Server**
First backend project with HTTP server setup:
- **Files**: `server.js`, `package.json`, `APIs/userAPI.js`, `APIs/productAPI.js`, `req.http`
- **Features**: Middleware pipeline, JSON body parsing, modular API routes, HTTP request testing
- **Concepts**: HTTP servers, middleware, routing, ES6 modules in Node.js
- **Port**: 3000

---

## Technology Stack

### Frontend JavaScript
- **ES6+ Features**: Modules, spread operator, arrow functions, destructuring
- **Functional Programming**: filter, map, reduce, find, findIndex
- **OOP**: Classes, instance methods, encapsulation
- **Async**: Promises, setTimeout, async/await

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Architecture**: Modular API design, middleware pattern

## Learning Path

1. **Start**: JavaScript fundamentals in JSAssignments
2. **Continue**: Understand module patterns (Task Management, E-Commerce)
3. **Progress**: Master object patterns (Library, Cloning)
4. **Advanced**: Learn async patterns (Promises, Timers)
5. **Integrate**: REST Parameters and function flexibility
6. **Backend**: Build server with Express.js

## Key Concepts Covered

-  Modular JavaScript architecture
-  Functional programming patterns
-  Object-oriented design with classes
-  Asynchronous operations and promises
-  REST API fundamentals
-  Middleware pattern
-  Real-world problem solving
-  Time-based operations and simulators

## File Naming Convention

All JavaScript files follow **camelCase** naming convention for consistency:
- `studentPerfDashboard.js` (not `Student_Perf_dashboard.js`)
- `bankTransactionAnalyzer.js` (not `Bank_Transaction_Analyzer.js`)
- `otpCountdownSimulator.js` (not `OTP Countdown_Simulator.js`)

## Running Projects

### E-Commerce System
```bash
node app.js
```

### JavaScript Assignments
```bash
node bankTransactionAnalyzer.js
node studentPerfDashboard.js 
### etc...

### Task Management
```bash
node app.js

### Backend Server
```bash
cd 28-02-2026/Backened(basicProject)
npm install
node server.js
```

## Additional Notes

- All projects can be executed in Node.js environment
- Express.js backend runs on `http://localhost:3000`
- Use REST client extensions to test HTTP endpoints
- Each folder contains detailed README with specific instructions
- Real-world simulators demonstrate practical applications of learned concepts

## Summary

Week 2 progresses from pure functional JavaScript through module patterns, OOP, and async operations, culminating in backend development fundamentals. Students gain comprehensive full-stack JavaScript knowledge applicable to real-world applications.
