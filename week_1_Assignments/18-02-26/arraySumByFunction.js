// Q6. Write a funtion that recives an array as args and return thier sum

function sumOfArr(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++){
        sum = sum + array[index]
    }
    return sum
}

console.log(sumOfArr([10, 20, 30]));