let stop

const printName = (name) => {
    console.log(`My name is ${name}`)
}

document.querySelector("#startBtn").addEventListener("click", function () {
    if (!stop) {
        stop = setInterval(printName, 2000,"Nishan")
    }
})


document.querySelector("#stopBtn").addEventListener("click", function () {
    clearInterval(stop);
    stop = null
    console.log("stop")
})
