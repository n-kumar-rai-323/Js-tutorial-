// Primitive 
// 7 types : String , Number, Boolean, undefined, null, Symbol, BigInt

const score = 100
const socreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)
console.log( id === anotherId)
// Reference (Non primitive)

// Array, Object , function

const heros = ["Nishan", "iphone", "Samsung"]

let myObj = {
    name : "Nishan",
    age : 22,
}


const myFunction = function (){
    console.log("Hello world")
}

console.log(typeof(myFunction))