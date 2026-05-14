// Q5. Wrtite num1 funtion that recives 3 number args and return the big number

// function to find largest amongn 3 numbers
function maxOfThree(num1, num2, num3) {
  // else if ladder to compare 3 numbers
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

// smallest retrieved through fuction call -> maxOfTree(10,20,30)
console.log("Big element is :", maxOfThree(10, 20, 30)); 