console.log("Cookies are:",document.cookie)
document.cookie = "name=harry1122334400"
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"  // changes the name of the first cookie

console.log(document.cookie)


let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// This is a set call
console.log(document.cookie)


// we used encodeURIComponent because the prompt will not be able to store all types of types -> we encode the values and store them 
// Inorder to decode them -> decodeURIComponent