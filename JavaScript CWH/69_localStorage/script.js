
// Local Storage 
// Web-Storage Object -> not sent to the server with each request
// Survives full-page restart and even full-browser restart

// Methods 
// setItem(key, value); -> inorder to set 
// getItem(key) -> inorder to get the value corresponding to the key
// removeItem(key); -> inorder to remove the key-value pair
// clear() -> deletes everything
// key(index) -> get the key on the given position
// length -> number of pairs

// Both the key and value should be strings



let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
