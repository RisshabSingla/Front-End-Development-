const prompt = require("prompt-sync")({ signint: true });

let num1 = [1, 2, 3, 4]
let num_more = [11, 12, 13, 14, 15]
let num_even_more = [211, 212, 213, 214]


// Delete Method
console.log("Delete Method")
console.log("Length of num1 before deleting:" ,num1.length)
console.log("Array is: ", num1);
delete num1[0] // deletes the element but the length remains same
console.log("Length of num1 after deleting:", num1.length)
console.log("Array is: ", num1);
console.log("")


// Concat Function 
console.log("Concat Function") // returns new array 
let newArray = num1.concat(num_more,num_even_more)
console.log("Num1 is:",num1)
console.log("Num_more is:",num_more);
console.log("Num_even_more is:", num_even_more)
console.log("New array is:",newArray)
console.log("")


// sort method -> modifies the original array
console.log("Sort Method")
let compare = (a, b)=>{
  return b - a // for descending order
}

let num = [551, 22, 3, 14, 5]
console.log("Num is: ", num);
num.sort(); // sorts alphabetically 
console.log("Num after sort(alphabetically) is: ", num)

num.sort(compare) // comparator function
console.log("Num after sort(descending): " ,num);
num.reverse() // reverses the array
console.log("Num after reverse: ",num)
console.log("")


// Splice -> inorder to add new items to the array
// takes 4 arguments -> (position, no.of elements to be removed, elements to be addded)
console.log("Splice Function")
num = [551, 22, 3, 14, 5, 6, 7, 8, 229] 
let deletedValues = num.splice( 2,        4,         1021, 1022, 1023, 1024, 1025);
//                            start , no to be deleted , numbers to be added
//  returns the array of deleted elements 
console.log("The array is:", num)
console.log("Deleted values are:",deletedValues)
console.log("")


// Slice Function
console.log("Slice Function");
console.log("Num is: ", num);
let newNum = num.slice(3)
console.log("newNum is:",newNum);

let newNum2 = num.slice(3, 5)
console.log("newNum2 is:",newNum2)
console.log("")
