//there zre two types of data type
// primkitive (number,string,boolean,symbol,null,undefined,bigint)a
//non primitive(object,function,array)

const bigNumber = 12345678996544565n
const  id = Symbol('123')
let myName = "Ganesh"
let temperature = null 
let score = undefined
let isloggedIn = true
let teleNumber = 56489

console.log(typeof bigNumber);
console.log(typeof id);
console.log(typeof myName );
console.log(typeof score);
console.log(typeof isloggedIn);
console.log(typeof teleNumber);
console.log(typeof temperature);

//non primitive datatype
let studentsName = [ "joe","mark","jenny","jennifer" ]
console.log(studentsName);

let myobject = {
    name: "ganesh",
    height : '5.8 foot',
  
     

}
console.log(typeof myobject);

const myfunction = function (){  
    console.log("Hello Javascript")
}
console.log(typeof myfunction);
