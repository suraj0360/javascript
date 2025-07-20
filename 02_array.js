const marvel_heros=["thor","ironman","spidarman"]
const dc_heros=["batman","suparman","flash"]

// marvel_heros.push(dc_heros)  
// console.log(marvel_heros)

const allheros=marvel_heros.concat(dc_heros)        //here we can use only 1 variable 
console.log(allheros)
////or
const all_new_heros=[...marvel_heros,...dc_heros]    //here unlimited varaiable
console.log(all_new_heros)


 const another_array=[1,2,3,[4,5],6,7,[7,8,[3,4]]]
console.log(another_array.flat(3))


console.log(Array.isArray("suraj"))   //to ask
console.log(Array.from("suraj"))    //to convert into array


const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3))






