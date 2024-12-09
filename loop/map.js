const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)


for(const [key, value] of map){
    console.log(key, ":=", value)
}



const myObj ={
    name: "Nishan",
    email: "infonkumarrai323@gmail.com"
}

for (key in myObj){
    console.log(`${key}  full name is ${myObj[key]}`)
}



const data =["a","b","c","d"]

for (d in data){
console.log(d)
}