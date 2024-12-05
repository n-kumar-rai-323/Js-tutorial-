// function calculateCardPrice(...num1){
//     return num1
// }

// console.log(calculateCardPrice(32,23,23,11))


// function calculateCardPrice(val1, val2,...num1){
//     return num1
// }

// console.log(calculateCardPrice(32,23,23,11))


// function calculateCardPrice(num1){
//     return num1
// }

// console.log(calculateCardPrice(32,23,23,11))


const user = {
    username : "nishan",
    price:99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);


}
handleObject(user)
handleObject({
    username:"EM",
    price:42989
})


const myNameArray = [333,44,22,34]


function returSecondValue(getArray){
    return getArray[1]

}

console.log(returSecondValue(myNameArray))
console.log(returSecondValue([33,444,55,66]))