// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];

const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
const filteredCourses = courses.filter(course => course.length > 5);
console.log("Filtered (length > 5):", filteredCourses);

// 2. map() to convert course names to uppercase
const upperCaseCourses = courses.map(course => course.toUpperCase());
console.log("Uppercase:", upperCaseCourses);

// 3. reduce() to generate a single string
const courseString = upperCaseCourses.reduce((acc, course, index) => {
    if (index === 0) return course;
    return acc + " | " + course;
}, "");

console.log("Reduced String:", courseString);

// 4. find() the course "react"
const foundCourse = courses.find(course => course === "react");
console.log("Found course:", foundCourse);

// 5. findIndex() of "node"
const nodeIndex = courses.findIndex(course => course === "node");
console.log("Index of node:", nodeIndex);