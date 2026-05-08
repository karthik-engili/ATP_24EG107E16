
// Create a function that receives any number of args as arguments and return their sum using REST parameter
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Example usage
console.log(sumAll(10, 20));          // 30
console.log(sumAll(5, 15, 25, 35));   // 80
console.log(sumAll(1, 2, 3, 4, 5)); 