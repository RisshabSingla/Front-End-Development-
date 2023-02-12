const prompt = require("prompt-sync")({ signint: true });

// Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.

// 100 – (no of guesses) is the score of the user. The program is expected to terminate once the number is guesses. Number should be between 1 – 100.

let a = 100*Math.random();
a = Math.round(a);
// console.log("Number is: ", a); // not required

let chances = 0;
let num = -1;

do{
    num = prompt("Enter a number: ");
    num = Number.parseInt(num);
    chances++;
    if(num<a){
        console.log("The number is higher than ", num);
    }else if(num>a){
        console.log("The number is lesser than ", num);
    }
}while(num!= a);

console.log("The guess was right");

console.log("Score is: ", (100-chances));