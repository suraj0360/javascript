///dates


let mydates=new Date()
// console.log(mydates);
// console.log(mydates.toDateString());
// console.log(mydates.toISOString());
// console.log(mydates.toLocaleString());         //   29/6/2025,  9:25:37
// console.log(mydates.toLocaleDateString());     // 29/6/2025
// console.log(mydates.toString());               // Sun Jun 29 2025 21:28:05 GMT+0530 (India Standard Time)
// console.log(mydates.toTimeString());           //  21:30:46 GMT+0530 (India Standard Time)
// console.log(mydates.toUTCString())             //   Sun, 29 Jun 2025 16:01:50 GMT


// let myCreatedDate=new Date(2025,0,29)
// let myCreatedDate=new Date(2025,0,29,5,8,50)
let myCreatedDate=new Date("06-29-2025")
// console.log(myCreatedDate.toLocaleString())

// let MyTimeStamp=Date.now()

// console.log(MyTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getMinutes())
// console.log(newDate.getMonth())

console.log(newDate.toLocaleString('default',{
    weekday:"short",day:"numeric",
}))