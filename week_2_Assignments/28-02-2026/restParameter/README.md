# Rest Parameters

## Overview

Demonstrating JavaScript rest parameters (`...`) for handling variable-length function arguments. This pattern allows functions to accept any number of arguments without defining them individually.

## Files

### sum.js

A practical example of rest parameters in action.

**Concept**: Rest Parameter Syntax
```js
function sumAll(...numbers) {
  // numbers is an array containing all arguments
  return numbers.reduce((total, num) => total + num, 0);
}
```

**Advantages**:
- Flexible function signature - accepts any number of arguments
- Cleaner code - no need to use `arguments` object
- Type-safe - works seamlessly with array methods

**Examples**:
```js
sumAll(10, 20)              // 30
sumAll(5, 15, 25, 35)       // 80
sumAll(1, 2, 3, 4, 5)       // 15
```

## Rest vs Spread Operator

Both use `...` but in different contexts:

| Context | Name | Purpose |
|---------|------|---------|
| Function parameters | Rest | Collect arguments into array |
| Function call | Spread | Expand array into individual arguments |
| Array literal | Spread | Spread array elements |
| Object literal | Spread | Spread object properties |

## Use Cases

1. **Variable Arguments**: Functions that process any number of values
2. **Variadic Functions**: Mathematical operations (sum, max, min)
3. **Flexible APIs**: Functions that need optional arguments
4. **Array Concatenation**: Combining multiple arrays

## Syntax

### Basic Rest Parameter
```js
function func(...args) {
  // args is an array
}
```

### Multiple Parameters
```js
function func(first, second, ...rest) {
  // first and second are individual parameters
  // rest is an array of remaining arguments
}
```

### With Default Values
```js
function func(...numbers = []) {
  // Provides default empty array
}
```

## Comparison with arguments Object

### Using arguments (Old Way)
```js
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
```

### Using Rest Parameters (Modern Way)
```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

**Advantages of Rest Parameters**:
- Array methods available directly (map, filter, reduce)
- More readable and intuitive
- Better performance
- Works with arrow functions

## Practical Examples

### Example 1: Finding Maximum
```js
function findMax(...numbers) {
  return Math.max(...numbers);
}

findMax(10, 50, 30, 20);  // 50
```

### Example 2: String Concatenation
```js
function concatenate(...strings) {
  return strings.join(' ');
}

concatenate('Hello', 'World', 'from', 'JavaScript');
// 'Hello World from JavaScript'
```

### Example 3: Filter Arguments
```js
function filterPositive(...numbers) {
  return numbers.filter(num => num > 0);
}

filterPositive(-5, 10, -3, 20, 0);  // [10, 20]
```

## Learning Objectives

- Understand rest parameter syntax and purpose
- Use rest parameters for flexible functions
- Apply array methods to rest parameters
- Know when to use rest vs regular parameters

## Notes

- Rest parameter must be the last parameter
- Only one rest parameter allowed per function
- Works perfectly with functional programming patterns
- Complements higher-order array methods