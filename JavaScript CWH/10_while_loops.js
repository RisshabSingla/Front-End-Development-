const prompt = require("prompt-sync")({ signint: true });

// while loop

let n = prompt("Enter the value of n: ")
n = Number.parseInt(n)

let i = 0;
while(i<n){
  console.log(i)
  i++;
}

// do while loop
let n1 = prompt("Enter the value of n: ")
n1 = Number.parseInt(n1)

let i1 = 10;
do{
  console.log(i1)
  i1++;
}while (i1 < n1) 
