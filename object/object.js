//Singleton 
const mySym = Symbol('key1')
const jsUser = {
    name : "Nishan",
    "full name":"Nishan kumar Rai",
    age:26,
    [mySym]: "key1",
    location: "Sindhuli",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Sunday"]

}
console.log(jsUser["email"])
console.log(jsUser.lastLoginDays)
console.log(jsUser["full name"])
console.log(jsUser[mySym])


Object.freeze(jsUser)
jsUser.email="nikita@gmail.com"
console.log(jsUser)