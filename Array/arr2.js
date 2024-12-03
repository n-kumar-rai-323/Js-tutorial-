const accessories = ["Watch", "Pen", "copy"]
const categorizesd = ["Stationary", "Eletorinec", "Other_Categorized"]

// accessories.push(categorizesd)
// console.log(accessories)
// console.log(categorizesd)

const allDetail = accessories.concat(categorizesd)
console.log(allDetail)

const allDetList = [...accessories, ...categorizesd]
console.log(allDetList)

console.log(Array.isArray("Nishan"))
console.log(Array.from("Nishan"))
console.log(Array.from({ name: "Nishan" })) //interesting 


let socre1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(socre1, score2, score3));

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const list = another_array.flat(Infinity)
console.log(list)