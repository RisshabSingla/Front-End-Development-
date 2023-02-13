let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)

// matches -> checks if the element matches the given CSS Selector
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))


// closest -> looks for the nearest ancestor that matches the given CSS Selector
console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))

// contains -> returns true if the element is present inside(or in descendant) else false
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))