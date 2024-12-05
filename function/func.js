function sayMyName(){
    console.log("Nishan")
}

sayMyName()



function addTwoNumber(num1, num2){
    console.log(num1 + num2)
}

addTwoNumber(3,4)


function loginUserMessage (name){
    if(!name){
        console.log("Please enter a username")
        return
    }
    return `${name} just logged in`
}

console.log(loginUserMessage("Nishan"))