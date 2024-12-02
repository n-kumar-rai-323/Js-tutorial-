// Stack (Primitive) heap (Non-Primitive)

let myName = "Nishan Rai"
let myName2 = myName
    myName = "Rai Kanxa "

console.log(myName)
console.log(myName2)


const user = {
    email : "infonkumar@gmail.com",
    isActive : true
}

const user2 = user
user2.email = "changeuser@gmail.com"

console.log(user.email)
console.log(user2.email)