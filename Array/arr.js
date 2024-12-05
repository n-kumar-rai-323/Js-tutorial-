// Array 
const myArr = [3,453,5,35,3,5,3,true, "nishan"]

console.log(myArr[4])

// method 

const myherios = ["laptop","Desktop", "iphone"]

myherios.push("Pen")
console.log(myherios)

myherios.pop()
console.log(myherios)

myherios.unshift('Earphone')
console.log(myherios)

myherios.shift()
console.log(myherios)

console.log(myherios.includes("Desktop"))
console.log(myherios.indexOf("laptop"))

const newArr = myArr.join()
console.log(newArr)
console.log(typeof(newArr))


// slice, slice different 
let number =[1,2,3,4,5,6,7,8]
console.log("A", number);

const myn1 = number.slice(1,3)
console.log(myn1);

console.log("B", number)

const myn2 = number.splice(1,3)
console.log("C", number)
console.log(myn2)