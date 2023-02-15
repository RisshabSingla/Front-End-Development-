

// Promise Chaining
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolved after 2 seconds");
        resolve(56);
    },2000)
})


p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve, reject)=>{
        resolve("Promise 2");
    })
    return p2;
}).then((value) =>{
    console.log("We are done"); 
    return 2 
    // we can return like this -> JS automatically converts it into a promise that is resolved with value 2
}).then((value)=>{
        console.log("Now we are pakka done")
        return new Promise((resolve, reject) =>{
            resolve("Final done");
        })
}).then((value)=>{
    console.log(value);
})

