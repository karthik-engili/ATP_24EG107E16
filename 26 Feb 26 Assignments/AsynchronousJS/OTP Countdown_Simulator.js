// OTP Countdown Simulator (Console App)
        
//Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

console.log("OTP Sent Successfully");

let sec=6

let intervalId = setInterval(()=>{
    sec--;
    console.log(`Otp can resend after ${sec} secs`);

    if(sec===1){
        console.log("Resend OTP");
        clearInterval(intervalId);
    }
},1000);
