const name="suraj"
const repocount=50

// // console.log(name+repocount);   //not recommended because it is outdated 

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gameName=new String("SurajY-yd")
console.log(gameName[0]);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("a"));


// console.log(gameName.substring(0,6));
// // //    //OR
const anotherString=gameName.substring(0,3)
console.log(anotherString);
console.log(gameName.substr(1));

const another=gameName.slice(-8,7);
console.log(another);

let newString="    suraj  "
console.log(newString);
console.log(newString.trim());

const url="https://suraj.com/suraj%20yadav"
console.log(url.replace('%20','-'));

console.log(url.includes('yadav'));

console.log(gameName.split('-'));         //it remove the sign 

let name1='warrior'
let name2='arcane'
let game='javascripe is a great is language'
console.log(name1.concat ('is a friend of ', name2));

console.log(name1.startsWith('was'));
console.log(name1.endsWith('rior'));        //it return boolean value
console.log(name1.search('rr'));
console.log(name1.search('g'));            //it returns index no if found otherwise -1
console.log(game.match(/is/g));             //it find all "is" from a variable and return in single String
console.log(game.lastIndexOf('is'));
console.log(game.charCodeAt(1));        //it return code from a given variable
console.log(gameName.repeat(5));
console.log(game.substr(1));             ///it print all character to what no given
let a=50
console.log(a.toString())
console.log(game.valueOf());
  
// // // ///////////////////////////revison///////////////////////////////////////////////////////////////////                               
// // console.log(name.length)
// // // // //
// // console.log(name.__proto__)
// // // // //
// // const variable=new String('suraj-Hc')
// // console.log(name.toUpperCase());
// // // // //

// // console.log(name.toLowerCase());
// // console.log(name.charAt(3));
// // //
// // console.log(name.trim())
// // //
// // console.log(name.replace('%20','-'))
// // //
// // console.log(name.substring(2,4))
// // console.log(name.substr(1,5))
// // console.log(name.match(/s/g))
// // console.log(name.indexOf('y'))
// // console.log(name.endsWith('is'))
// // console.log(name.startsWith('is'))
// // console.log(name.split('-'))
// // console.log(name.lastIndexOf('v'))
// // console.log(name.search('%20'))
// // let b=50
// // console.log(a.toString())
// // console.log(typeof(a))
// // console.log(name.valueOf())
// // console.log(name.charCodeAt(1))
// // console.log(name.repeat(2))


// // let name4='warrior'
// // let name5='arcane'
// // console.log(name4.concat(` is a friend of ${name5}`))
// // console.log(name.includes('y'))