# Object & Array Cloning Assignments

## Overview

This folder contains hands-on exercises exploring the differences between shallow copy and deep copy in JavaScript, along with spread operator and destructuring techniques.

## Files & Concepts

### Shallow Copy

- `shallowCopy.js` - Demonstrates shallow copy behavior:
  - Creates a shallow copy of a user object using spread operator `{...user}`
  - Shows how modifying nested objects affects both original and copy
  - Illustrates the difference between primitive and reference values
  - Use case: When you only need to modify top-level properties

### Deep Copy

- `deepCopy.js` - Demonstrates deep copy using `structuredClone()`:
  - Creates a completely independent copy of a nested order object
  - Modifications to the copy do NOT affect the original
  - Properly handles deeply nested objects and arrays
  - Use case: When you need complete isolation between objects

### Spread Operator Exercises

- `exccercise1.js` - Array spread and copying:
  - Uses spread operator to copy array elements: `[...fruits]`
  - Demonstrates immutability principles
  - Shows how to create new arrays without modifying originals

- `excersise2.js` - Object spread and property extension:
  - Spreads object properties and adds new properties in one operation: `{...user, age: 25}`
  - Demonstrates merging objects and adding fields
  - Shows immutable object updates

## Key Differences

 Feature | Shallow Copy | Deep Copy |
 Top-level | Copied ✓ | Copied ✓ |
 Nested objects | Referenced ✗ | Copied ✓ |
 Modifications affect original | Yes (nested) | No |
 Method | `{...obj}` or `Object.assign()` | `structuredClone()` or JSON methods |
 Use case | Quick copies, top-level changes | Complete isolation |

## Learning Objectives

- Understand reference vs value in JavaScript
- Master shallow copy vs deep copy patterns
- Use spread operator for immutable operations
- Recognize when each technique is appropriate

## Notes

- Shallow copy is faster but not suitable for complex nested structures
- `structuredClone()` is the modern standard for deep copying
- Spread operator `{...}` is a shallow copy mechanism