const tinderUser = new Object()
console.log(tinderUser)

const tinerusers = {}

tinerusers.id = "123abc"
tinerusers.name = "nishan"
tinerusers.isLoggedIn = false


const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firsname : "Nishan",
            lastname: "Rai"
        }
    }
}

console.log(regularUser.fullname.userfullname.firsname)


const obj1 ={1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3=Object.assign({},obj1,obj2)

console.log(obj3)