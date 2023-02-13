

let first = document.getElementById("first");
let frst = document.getElementById("first");

// getAttribute -> used to get the value of the given attribute
let a = first.getAttribute("class")  // first can be used without the declaration also -> not a good practice

console.log(a)

// hasAttribute -> return true or false depending on whether the attribute is present or not
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))




// setAttribute -> inorder to set the value of an attribute
frst.setAttribute("hidden", "true")
frst.setAttribute("class", "true sachin")
console.log(frst.getAttribute("class"));


// removeAttribute -> inorder to remove the attribute
frst.removeAttribute("class")
console.log(frst.getAttribute("class"));


// attributes -> gets the collection of all attributes
console.log(Array.from(frst.attributes))

// inorder to create custom attributes -> use data- before the name 
// inorder to avoid future confusion -> attribute with the same name
// dataset -> contains all the custom attributes
console.log(frst.dataset)
console.log(frst.dataset.game)
console.log(frst.dataset.player)