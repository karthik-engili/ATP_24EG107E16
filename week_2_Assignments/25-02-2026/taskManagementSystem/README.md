# Task Management System

## Overview

A modular JavaScript application for managing tasks with validation. The system demonstrates ES6 modules, function imports/exports, and input validation patterns.

## Project Structure

- `app.js` - Entry point that imports and tests task management functions
- `task.js` - Task management module with core functions:
  - `addTask(title, priority, date)` - Adds a new task with validation
  - `getAllTasks()` - Retrieves all tasks
  - `completeTask(taskId)` - Marks a task as complete
- `validator.js` - Validation module with utility functions:
  - `validateTitle(title)` - Validates task title (minimum 3 characters)
  - `validatePriority(priority)` - Validates priority is one of: low, medium, high
  - `validateDueDate(date)` - Validates due date is in the future (YYYY-MM-DD format)

## Features

- Modular code organization using ES6 exports
- Input validation for task properties
- Task management operations (add, retrieve, complete)
- Priority levels: low, medium, high
- Due date validation

## Usage

```js
import { addTask, getAllTasks, completeTask } from './task.js';

// Add a task
const result = addTask('Complete project', 'High', '2026-12-12');

// Get all tasks
const tasks = getAllTasks();
console.log(tasks);
```

## Notes

- Tasks are stored in memory and will be lost on process restart
- Date format must be YYYY-MM-DD
- Validation is performed before adding tasks to ensure data integrity