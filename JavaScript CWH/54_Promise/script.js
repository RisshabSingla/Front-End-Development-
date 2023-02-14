// It's the solution of callback hell

// A promise is a promise of code execution
// The user would be notified whether the code ran or not

let promise = new Promise(function(resolve, reject) {
  alert("Hello")
  resolve(56)
})

console.log(promise);

// Promise has 2 properties
// -> State -> Initially pending -> then either fulfilled or rejected
// -> Result -> Initially undefined -> then either resolve or error
// resolve(value) -> When done successfully
// reject(error) -> When failed