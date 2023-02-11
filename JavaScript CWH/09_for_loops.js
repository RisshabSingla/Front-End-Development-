const prompt = require("prompt-sync")({ signint: true }); 

// Program to add first n natural numbers
let sum = 0
let n = prompt("Enter the value of n: ")
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
// console.log(i) -> i is of type let -> block scope 

console.log("");
console.log("");

let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

console.log("");
console.log("");

// For of loop
for (let b of "Harry") {
  console.log(b)
}
