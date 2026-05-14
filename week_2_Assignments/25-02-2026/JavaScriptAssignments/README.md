# JavaScript Array Methods Assignments

## Overview

Real-world scenario assignments demonstrating higher-order array methods: `filter()`, `map()`, `reduce()`, `find()`, and `findIndex()`. Each script solves practical problems using functional programming patterns.

## Assignments

### 1. bankTransactionAnalyzer.js

**Scenario**: Bank statement summary analysis

**Concepts**: filter, map, reduce, find, findIndex

**Tasks**:
- Filter all credit transactions
- Extract transaction amounts using map
- Calculate final account balance using reduce
- Find first debit transaction
- Find index of transaction with specific amount

**Sample Data**: Transaction objects with id, type (credit/debit), and amount

---

### 2. studentPerfDashboard.js

**Scenario**: College result analysis system

**Concepts**: filter, map, reduce, find, findIndex

**Tasks**:
- Filter students who passed (marks ≥ 40)
- Map students with grade assignment (A/B/C/D)
- Calculate average marks using reduce
- Find student who scored specific marks
- Find index of specific student by name

**Sample Data**: Student objects with id, name, and marks

---

### 3. onlineCourse.js

**Scenario**: Course list processor for website display

**Concepts**: filter, map, reduce, find, findIndex

**Tasks**:
- Filter courses with name length > 5
- Convert course names to uppercase using map
- Generate single formatted string using reduce
- Find specific course ("react")
- Find index of specific course ("node")

**Sample Data**: Array of course name strings

---

### 4. movieStreamingPlatform.js

**Scenario**: Movie catalog management

**Concepts**: Higher-order array methods for movie data manipulation

**Tasks**: Similar pattern - filtering, mapping, reducing movie data

---

### 5. employeePayroll.js

**Scenario**: Employee payroll system

**Concepts**: Array methods applied to employee salary data

**Tasks**: Calculate payroll, apply deductions, generate reports

---

### 6. eCommerceCart.js

**Scenario**: Shopping cart operations

**Concepts**: Array methods for cart management

**Tasks**:
- Filter items by category
- Calculate total price using reduce
- Find items by product name
- Update cart quantities
- Apply discount logic

---

### 7. studentMarksList.js

**Scenario**: Student marks analysis

**Concepts**: Array methods for educational data processing

**Tasks**:
- Filter high/low performers
- Calculate class statistics
- Find top performers
- Generate reports

---

### 8. TemperatureAnalyser.js

**Scenario**: Weather temperature analysis

**Concepts**: Array methods for numerical data processing

**Tasks**:
- Filter temperatures above 35°C
- Convert to Fahrenheit using map
- Calculate average temperature
- Find extreme temperatures
- Generate weather statistics

## Array Methods Reference

| Method | Purpose | Returns |
|--------|---------|---------|
| `filter()` | Select elements matching condition | New array |
| `map()` | Transform each element | New array |
| `reduce()` | Combine elements into single value | Single value |
| `find()` | Get first matching element | Element or undefined |
| `findIndex()` | Get index of first match | Index or -1 |

## Usage Pattern

```js
// Typical pattern in all assignments
const data = [...]; // Array of objects or values

// 1. Filter to get subset
const filtered = data.filter(item => condition);

// 2. Transform each item
const transformed = filtered.map(item => newValue);

// 3. Reduce to single value
const result = transformed.reduce((acc, val) => acc + val, initialValue);

// 4. Find specific item
const found = data.find(item => item.id === searchId);

// 5. Find position
const idx = data.findIndex(item => item.name === searchName);
```

## Learning Objectives

- Master higher-order array methods
- Apply functional programming patterns
- Solve real-world problems with immutable operations
- Chain methods for complex data processing
- Use reduce for aggregation and transformation

## Key Concepts

### Immutability
- Array methods don't modify original arrays
- Return new arrays or values
- Enables safer code and easier debugging

### Method Chaining
- Methods can be chained together
- Process data through pipeline
- More readable and concise

### Functional Approach
- Focus on "what" not "how"
- Express intent clearly
- Easier to test and maintain

## Notes

- All scripts are designed to run in Node.js
- Each script demonstrates practical use cases
- Method combinations solve complex problems
- Consider performance with large datasets