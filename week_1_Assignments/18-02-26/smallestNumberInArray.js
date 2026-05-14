
// 4. find the smallest element in marks array
let marks = [98, 75, 65, 90, 19];

// initially first element is assumed as minimum element
let min = marks[0];

// loop to iterate through the array and find smallest element
for (let index = 0; index < marks.length; index++){
    //comparing min with next element of the array
    if (marks[index] < min){
        min = marks[index]
    }
}
console.log("minimum element is", min)