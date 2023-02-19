

// Hoisting refers to the process wherby the interpreter appears to move the declarations to the top of the code before execution.
// Variables can thus be referenced before they are declared in JS

// let a;
// Following two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()


// Not hoisted -> function expression
var greet = function() {
  console.log("Good morning")
}

// Cannot be called -> not a function expression -> not hoisted 
// var greet =()=>{
//         console.log("Good morning")
// }

// Cannot be called before
// const greet =()=>{
//     console.log("Good morning")
// }

// can be called before 
// function greet(){
//     console.log("Good morning")
// }

// if a is let -> then error-> cannot use a before initialization
// let a = 9;

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)