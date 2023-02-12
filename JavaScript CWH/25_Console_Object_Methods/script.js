console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" != false) // inorder to assert a particular condition
console.assert("err" == false) // we can give true values 
                               // on giving false values -> error 

console.time("forLoop") // inorder to calculate the time between this instruction and the timeEnd instruction

for (let i = 0; i < 500; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")