const prompt = require("prompt-sync")({ signint: true });

// Array Methods
let num = [1, 2, 3, 34, 4]
console.log("Original Array is: ", num);
console.log("");


// toString Function 
let b = num.toString() // b is now a string 
console.log("toString Function ");
console.log(b); // by default joined using ,
console.log(typeof b);
console.log("");


// Join Function
let c = num.join(" and ") // joins the array using the separator given 
console.log("Join Function");
console.log("The array after joining with and is:",c); 
console.log(typeof c);
console.log("");


// Pop Function
console.log("Pop Function");
let r1 = num.pop() // pop returns the popped element -> modifies the original array
console.log("Array is: ",num);
console.log("Popped is ",r1);
console.log("");


// Push Function
console.log("Push Function");
let r2 = num.push(56) // push returns the new array length -> modifies the original array
console.log("Array is:" ,num);
console.log("New array length is:", r2);
console.log("");


// Shift Function
console.log("Shift Function");
let r3 = num.shift()  // Removes an element from the start of the array -> modifies the original array
console.log("The first element was: ",r3);
console.log("Array is:" ,num);
console.log("");


// UnShift Function
console.log("UnShift Function");
let r = num.unshift(78) // returns the new length of the array
// Adds an element from the start of the array -> modifies the original array
console.log("New array length is:" ,r)
console.log("New array is :" ,num)