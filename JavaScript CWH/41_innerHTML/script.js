

let x = document.getElementsByTagName('span')[0]
console.log(x)
// shows the element DOM Tree
let y = document.getElementsByTagName('span')[0]
console.dir(y)
// shows the element as an object with it's properties


console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)


// innerHTML -> allows to get the HTML inside the element as a string 
// works for element nodes only 
first.innerHTML 
first.innerHTML = "<i>hey I am italic</i>" 


// outerHTML -> contains the full HTML, innerHTML + the element itself. 
first.outerHTML 
first.outerHTML = "<div>hey</div>"


document.body.firstChild.data 
console.log(document.body.textContent)
h1.hidden = false