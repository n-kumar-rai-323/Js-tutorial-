const arr =[1,2,3,4,5]
for(const num of arr){
    console.log(num)
}

const text = "Nishan-Kumar-Rai"


for (const text2 of  text){
    if (text2 === "-"){
        console.log(`you find ${text2}`)
        break;
    }
    console.log(text2)
}