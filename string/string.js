let value =-3
let negValue = -value
console.log(negValue)



let str1 = "hello"
let str2 = " Nishan"
let str3 = str1 + str2
console.log(str3)


console.log("1" + 2)
console.log(1 + "2")
console.log("1"  + 2 +2)
console.log(1 + 2 +"2")

console.log(+true)
console.log(+"");


const gameName = new String('hiteshhc')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toLocaleLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "     nishan           "
console.log(newStringOne.trim())

console.log(gameName.split('-'))
