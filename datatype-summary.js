// # primitive 
 
//7 types: String, Number, BigInt, Boolean, symbol, null, undefined

// const score=100
// const scvorevalue=100.3

// const isLoggedIn=true
// let outsidetemp=null
// let city;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId);

// const bigNumber=832050024239n

// //reference(non primitive)

// //Array, object, funtion

// const heros=["shaktiman","naagraj","doga"];
// let myObj={
//     name:suraj,
//     age:20,
// }

// const myFunction=function(){
//     console.log("hello world");
// }


/////+++++++++++++++++++++++++++++++++++++++++++++++

//stack (jitne bhi primitive datatypes hai)
//heap (jitne bhi non primitive datatypes hai)

// let Myyoutubename="surajyadav@google.com"

// let anothername=Myyoutubename
// console.log(anothername);
// anothername="vfvfewipdshjbfckilko;8"
// console.log(anothername);
// console.log(Myyoutubename);

let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userone
 console.log(usertwo);

usertwo.email="userfglij@google.com"
console.log(usertwo);
console.log(userone);