const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("New promise is successfully ")
    }, 1000)
    resolve()
})

promiseOne.then(()=>{
console.log("Promise Consumed")
})