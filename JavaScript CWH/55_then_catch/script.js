// Both the promises run parallelly -> both will be executed in 5 seconds not in 10 seconds 

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
          console.log("I am a promise and I am resolved")
          resolve(true)
  }, 5000)
})

console.log(p1);

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
          console.log("I am a promise and I am rejected")
          reject(new Error("I am an error"))
  }, 5000)
})


// If the promise fulfills 
p1.then((value) =>{
  console.log("Value is: " + value)
})


// If the promise fails 
p2.catch((error) =>{
  console.log("Error is: " + error)
})


// Both 


let p3 = new Promise((resolve, reject) => {
  // console.log("Promise is pending")
  setTimeout(() => {
          console.log("3rd Rejected ")
          reject(new Error("Error in 3"))
  }, 5000)
})



p3.then((value) =>{
  console.log("Value is: " + value)
},((error)=>{
  console.log("Error is: " + error)
}))


// Used to perform general cleanups
p3.finally(()=>{
  console.log("P3 is done")
})

