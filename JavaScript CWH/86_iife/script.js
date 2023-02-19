


let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 4000)
    })
}

// await function must be within async function 

// let f = async () => {
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// }

// f();

// Instead of this IIFE is used


// IIFE 
(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()


  // console.log(d) // Throws error