// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

const marks = [78, 92, 35, 88, 40, 67];

// 1. filter() marks ≥ 40 (pass marks)
const passedStudents = marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedStudents);

// 2. map() to add 5 grace marks to each student
const graceMarks = marks.map(mark => mark + 5);
console.log("After Grace Marks:", graceMarks);

// 3. reduce() to find highest mark
const highestMark = marks.reduce((max, mark) => {
    return mark > max ? mark : max;
}, marks[0]);
console.log("Highest Mark:", highestMark);

// 4. find() first mark below 40
const firstFail = marks.find(mark => mark < 40);
console.log("First Fail Mark:", firstFail);

// 5. findIndex() of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of 92:", indexOf92);