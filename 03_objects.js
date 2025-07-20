const Mysym=Symbol("key1")
const JsUser={
    name:"suraj",
    [Mysym]:"mykey1",
    age:18,
    email:"suraj@gmail.com",
    "full name":"suraj yadav",
}

console.log(JsUser.name)
    //OR
console.log(JsUser["full name"])   ///always use this mwthod only

console.log(JsUser[Mysym])

/////to change value
JsUser.email="surajyadav@gmail.com"

//////////to lock value
Object.freeze(JsUser)
JsUser.email="surajyadavchatgpt@gmail.com"
console.log(JsUser)

