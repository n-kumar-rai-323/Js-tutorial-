// nested scope 

function one(){
    const username = "Nishan"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()


console.log(nepal("Nepal"))
function nepal(name){
    return name + "Sindhuli"
}

const nameOfCountry = function(name2){
    return name2 + " " + "Kathmandu" 
}
console.log(nameOfCountry("My country name is Nepal and biggest city of "))