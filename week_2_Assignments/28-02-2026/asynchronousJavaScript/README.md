# Asynchronous JavaScript

## Overview

Comprehensive exploration of asynchronous JavaScript patterns including Promises, async/await, and real-world simulator applications. Essential for understanding how JavaScript handles operations that take time.

## Files

### promise.js

**Concept**: Promise fundamentals and patterns

**What is a Promise?**
A Promise represents the eventual completion (or failure) of an asynchronous operation.

**Promise States**:
- **Pending**: Operation hasn't completed yet
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

**Structure**:
```js
const promise = new Promise((resolve, reject) => {
  // Producer code
  // Call resolve() on success
  // Call reject() on failure
});

// Consumer code
promise
  .then(result => console.log(result))   // Handle success
  .catch(error => console.log(error));   // Handle error
```

**Example**: Bank transaction
```js
console.log("I will send you $10000 tomorrow");

const promiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (futureCondition === true) {
      resolve("Sent $10000 to you");
    } else {
      reject("There was a technical issue at Bank server");
    }
  }, 5000);
});

promiseObj
  .then(message => console.log("Message:", message))
  .catch(error => console.log("Error:", error));
```

**Key Points**:
- Delays execution by 5 seconds
- Demonstrates producer/consumer pattern
- Shows conditional success/failure handling

---

### AysnchronousFuntions.js

**Concept**: Timer-based asynchronous functions

**Purpose**: Foundation for understanding async operations with time delays

---

### otpCountdownSimulator.js

**Scenario**: Two-Factor Authentication OTP Countdown

**Real-World Use Case**:
- User requests OTP for login
- System sends OTP valid for limited time
- Countdown timer shows remaining validity
- After timeout, OTP expires

**Implementation Pattern**:
- Simulates OTP generation
- Implements countdown timer
- Handles OTP expiration
- Demonstrates time-based async operations

---

### examPortalSimulator.js

**Scenario**: Online Exam Portal

**Real-World Use Case**:
- Student logs into exam
- Exam has time limit
- System manages exam duration
- Auto-submits when time expires

**Features Simulated**:
- Exam start/end logic
- Time management
- Auto-submission
- Session handling

## Promise Chain vs Async/Await

### Promise Chain (Callback Style)
```js
promise
  .then(result => doSomething(result))
  .then(result2 => doMore(result2))
  .catch(error => handleError(error));
```

### Async/Await (Modern Approach)
```js
async function main() {
  try {
    const result = await promise;
    const result2 = await doSomething(result);
    console.log(result2);
  } catch (error) {
    handleError(error);
  }
}
```

## Common Patterns

### 1. setTimeout (Delayed Execution)
```js
setTimeout(() => {
  console.log('After 5 seconds');
}, 5000);
```

### 2. Promise with Timeout
```js
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Timeout');
  }, 5000);
});
```

### 3. OTP Countdown Pattern
```js
let otpValid = true;

setTimeout(() => {
  otpValid = false;
  console.log('OTP Expired');
}, 60000); // 60 seconds
```

### 4. Exam Timer Pattern
```js
const examEndTime = Date.now() + 3600000; // 1 hour from now

const timer = setInterval(() => {
  const remaining = examEndTime - Date.now();
  if (remaining <= 0) {
    submitExam();
    clearInterval(timer);
  }
}, 1000); // Update every second
```

## Timing Methods in JavaScript

| Method | Purpose | Returns |
|--------|---------|---------|
| `setTimeout()` | Execute once after delay | ID (can cancel) |
| `setInterval()` | Execute repeatedly | ID (can cancel) |
| `clearTimeout()` | Cancel setTimeout | void |
| `clearInterval()` | Cancel setInterval | void |
| `Date.now()` | Current timestamp | Milliseconds |

## Execution Flow

```
Script Start
    ↓
Console.log "I will send $10000 tomorrow"
    ↓
Promise created (pending state)
    ↓
Consumer registered (.then/.catch)
    ↓
setTimeout starts (5 second wait)
    ↓
After 5 seconds:
    - Executor checks condition
    - Calls resolve() or reject()
    - Promise state changes
    - Consumer .then() or .catch() executes
```

## Error Handling

### Promise Error Handling
```js
promise
  .then(result => process(result))
  .catch(error => console.log('Error:', error));
```

### Async/Await Error Handling
```js
try {
  const result = await promise;
  console.log(result);
} catch (error) {
  console.log('Error:', error);
}
```

## Practical Applications

### Real-World Scenario 1: API Call
```js
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Failed:', error));
```

### Real-World Scenario 2: Multiple Promises
```js
Promise.all([promise1, promise2, promise3])
  .then(results => console.log('All done:', results))
  .catch(error => console.log('One failed:', error));
```

## Learning Objectives

- Understand Promise states and transitions
- Implement producer/consumer pattern
- Handle success and error cases
- Use setTimeout for delayed operations
- Build time-based simulators
- Recognize real-world async patterns

## Key Concepts

1. **Asynchronous**: Operations that don't block execution
2. **Non-blocking**: Main thread continues while async waits
3. **Event Loop**: JavaScript mechanism that handles async operations
4. **Microtask Queue**: Promises execute before setTimeout
5. **Callback Hell**: Avoiding deeply nested callbacks with promises

## Execution Order Example

```js
console.log('1. Start');

setTimeout(() => console.log('2. Timeout'), 0);

Promise.resolve().then(() => console.log('3. Promise'));

console.log('4. End');

// Output:
// 1. Start
// 4. End
// 3. Promise     (Microtask - runs before setTimeout)
// 2. Timeout     (Macrotask - runs last)
```

## Notes

- Promises are essential for modern JavaScript
- Understanding async is crucial for API calls, timers, and simulators
- Always handle both success (.then) and failure (.catch) cases
- Async/await is syntactic sugar over Promises - both are equivalent