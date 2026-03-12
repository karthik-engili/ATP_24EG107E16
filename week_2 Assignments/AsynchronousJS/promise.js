
// // Call in 5 min
//    // Pending
//    // Fulfilled / Rejected

//    // Call you in 5 sec

//    console.log("Friend is waiting for a call in 5 secs")
//    let futureCondition=true;
// // Promise producer ( creates promise )
// const promiseObj=new Promise((a,b)=>{

//     setTimeout(()=>{
//         if(futureCondition===true){
//             a("Hello frnd how are you?..")
//         }
//         else{
//             b("Busy... Call you later")
//         }
//     },5000);
// })
// // Promise consumer
// promiseObj
//  .then((message)=>console.log("Message in then:",message));
//  .catch((errorMessage)=>console.log("Error is:",errorMessage));

// console.log("hello");
// });


// I will send 10,000 rupees on tomorrow with 10 sec delay


// Call in 5 min
   // Pending
   // Fulfilled / Rejected

   // Call you in 5 sec

console.log("I will send you $10000 tomorrow")
let futureCondition=true;
// Promise producer ( creates promise )
const promiseObj=new Promise((a,b)=>{

    setTimeout(()=>{
        if(futureCondition===true){
            a("Sent $10000 to you")
        }
        else{
            b("There was an technical issue at Bank server")
        }
    },5000);
})
// Promise consumer
promiseObj
 .then((message)=>console.log("Message in then:",message))
 .catch((errorMessage)=>console.log("Error: ",errorMessage));



