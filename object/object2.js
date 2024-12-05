// const tinderUser = new Object()
// console.log(tinderUser)

// const tinerusers = {}

// tinerusers.id = "123abc"
// tinerusers.name = "nishan"
// tinerusers.isLoggedIn = false


// const regularUser = {
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firsname : "Nishan",
//             lastname: "Rai"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firsname)


// const obj1 ={1: "a", 2:"b"}
// const obj2 = {3: "a", 4:"b"}

// const obj3=Object.assign({},obj1,obj2)

// console.log(obj3)

// const obj4 ={...obj1, ...obj2}
// console.log(obj4)





const users =[
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email:"ks@gmail.com"
    },
    {
        id:3,
        email:"kj@gmail.com"
    },
    {
        id:4,
        email:"kj@gmail.com"
    }
]

users[1].email
console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users))