

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 1");
    }, 2500);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 2");
            // reject(new Error("Error"));
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 3");
    }, 3000);
});


// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })


// In order to print the data of all the 3 promises togother
// In real-world we don't know when one will be the last one to be executed 

// Therefore we use Promise API


let promise_all = Promise.all([p1,p2,p3]);
// promise_all is the array of values after all are executed

promise_all.then((value)=>{
    console.log(value);
})

// If any one doesn't resolve -> it turns to error ignoring all the rest


let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
            reject(new Error("Error loading p4 "));
    }, 1000);
});


let promise_all_2 = Promise.all([p1,p2,p3,p4]);

promise_all_2.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error)
})


// Inorder to avoid ignoring all the other values 
// We use allSettled


let promise_all_3 = Promise.allSettled([p1,p2,p3,p4]);
promise_all_3.then((value)=>{
    console.log(value);
});



// If we want the first promise that is executed -> If it's fulfilled -> fine else error 
let promise_race = Promise.race([p1,p2,p3,p4]);
promise_race.then((value)=>{
    console.log(value);
})


// If we want the first fulfilled promise 
// If none of the promises is fulfilled then it throws Aggregate error 

let promise_any = Promise.any([p1,p2,p3,p4]);
promise_any.then((value)=>{
    console.log(value);
})


let res = Promise.resolve(6);
res.then((value)=>{
    console.log(value)
})


let err = Promise.reject(-1);
err.catch((value)=>{
    console.log(value);
})