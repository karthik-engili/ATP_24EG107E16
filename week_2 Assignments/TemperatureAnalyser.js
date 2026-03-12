// daily temperature analyser 

// test data
const temp=[32,35,28,40,38,30,42]

//1.filter temp above 35
let r1=temp.filter((element)=>element>35)
console.log("Temperature Grater Than 35:")
console.log(r1)

//2.celsius to farenheit 
console.log("Temperatures after converting from celsius to farenheit")
let r2=temp.map((ele)=>(ele*(9/5))+32)
console.log(r2)

//3.reduce() to calculate average temperature
let r3=temp.reduce((acc,ele)=>acc+ele)
console.log("Average temperature")
console.log(r3/temp.length)

//4.find() the temperature above 40
let r4=temp.find(ele=>ele>40)
console.log("Temp grater than 40")
console.log(r4)

//5.findIndex() of temperature 28
let r5=temp.findIndex(i=>i==28)
console.log("Index of temperature 28")
console.log(r5)