///array
//declaration of array
const MyArr=[1,2,3,4,5]
//or
const MyHeroes=["shaktiman","naagraj"]
//or
const Myarr2=new Array(1,2,3,4,5)
console.log(MyArr[0]);


// //Array methods
MyArr.push(7)
console.log(MyArr)
MyArr.pop()
console.log(MyArr)


MyArr.unshift(2)              //Adds a element in starting of array
console.log(MyArr)             
MyArr.shift()                //removes element 
console.log(MyArr)

console.log(MyArr.includes(9))
console.log(MyArr.indexOf(1))

const newArr=MyArr.join()
console.log(MyArr)
console.log(newArr)


        //slice , splice

        console.log("A ",MyArr)
        const Myn1=MyArr.slice(1,3)
        console.log(Myn1)

        console.log("B ",MyArr)
        const Myn2=MyArr.splice(1,3)
        console.log("c ",MyArr)
        console.log(Myn2)

