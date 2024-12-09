const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = num.filter((num) => num > 4)

console.log(newNumber)



const again = []

num.forEach((num)=>{
    if(num> 4){
        again.push(num)
    }
})

console.log(again)