

let p1 = new Promise((resolve, reject) => {
    // alert("Hey I am not resolved")
    setTimeout(() => {
            resolve(1);
    }, 2000)
})


// Both the then will run simultaneously -> the first one in code will be printed first 

p1.then(() => {
    console.log("Hurray")
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(4)
            }, 6000)
    })
}).then((value) => { console.log(value) })



p1.then(() => {
    console.log("Congratulations this promise is now resolved")
})
