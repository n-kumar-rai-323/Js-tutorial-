


// const changeText = ()=>{
// document.querySelector("#changeHi").innerHTML="Hi Alisha Gurung"
// }
// changeText()
// document.querySelector("stopBtn").addEventListener("click",()=>{
// clearTimeout(c)
// })
// const changeMe = setTimeout(changeText, 2000)



const sayNishan = function(){
    console.log("Nishan")
}
const changeText =function(){
    document.querySelector("#changeHi").innerHTML="Hi Alisha Welcome to Coding World!"
}

const changeMe= setTimeout(changeText,2000)

document.querySelector("#stopBtn").addEventListener("click",function(){
   clearTimeout(changeMe)
    console.log("Stop")
})


// setTimeout(sayNishan,2000)