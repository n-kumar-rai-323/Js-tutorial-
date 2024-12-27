const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise Consumed");
});


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task Two")
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 Resolved")
});


const promiseThird = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Nishan", Email: "infonkumarrai323@gmail.com" })
    }, 1000);
});
promiseThird.then((user) => {
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Nishan", password: "1234" })
        } else {
            reject("Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log("Promise Four")
    return user.username
}).then((myusername) => {
    console.log(myusername)
}).catch((e) => {
    console.log(`The error is ${e}`)
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Nishan", password: "12345" });
        } else {
            reject("The error is ")
        }
    }, 1000);
})
 

async function newMtd() {
    // Simulating an async operation
    const response = await Promise.resolve("This is the response");
    console.log(response);
}

// Call the function
newMtd();