const prompt = require("prompt-sync")({ signint: true });

let num = [3, 5, 1, 2, 4]
// classical for loop
for(let i=0; i<num.length;i++){
  console.log(num[i])
}
console.log("")


// ForEach Loop
num.forEach((element) => {
  console.log(element * element)
})
console.log("")


// Array.from 
let name = "Harry"
let arr = Array.from(name)
console.log(arr)
console.log("")


// for...of 
for (let item of num){
  console.log(item)
}
console.log("")


// for...in
for (let i in num){
  console.log(num[i])
}
console.log("")