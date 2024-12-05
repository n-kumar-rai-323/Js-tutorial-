///Dates 

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(typeof(myDate))

//Date create
let myCreateDate = new Date("2024-11-14")
console.log(myCreateDate.toDateString())

// Date timestamp 

let myTimeStamp =new  Date()
console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());
console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate)
console.log(newDate.getTime())
console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.getMonth())

// newDate.toLocaleString('default', {
//     weekday: "long",
//     timeZone: '',
// })

let myTimeStampp = new Date(); // Current date and time

console.log(myTimeStampp.getTime()); // Logs the time in milliseconds