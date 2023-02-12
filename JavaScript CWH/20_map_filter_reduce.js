const prompt = require("prompt-sync")({ signint: true });

let arr = [45, 23, 21]
console.log("Array is:",arr);

// Array map method
// creates a new array by performing a operation on each element of the given array
console.log("Array Map Method");
let a = arr.map((value, index, array) => {
//   console.log(value, index,array)
  return value*value
})
console.log("New Array is:",a);
console.log("");


// Array filter method
// creates a new array containing the values that pass the test case
console.log("Array filter method");
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
console.log("Array is:",arr2);
console.log("New Array is:",a2);
console.log("");


// Array reduce method
// reduces the array to a single value according to the given condition
console.log("Array Reduce Method");
let arr3 = [1, 2, 3, 5, 2, 1]
console.log("Array is:", arr3);

const reduce_func = (h1, h2) => {
  return h1 * h2
}
let newVal = arr3.reduce(reduce_func)
console.log("New after multiplication is:",newVal)

 
let newVal2 = arr3.reduce((h1,h2)=> {
    return h1 + h2
})
console.log("New after Addition is:",newVal2)

console.log("");