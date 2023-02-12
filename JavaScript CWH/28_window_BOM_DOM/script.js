// everything comes under the window in javascript 
// window is a global object

window.console.log(window)
// console.log(window) -> same 


// DOM -> Document Object Model
// Represents the page content as HTML
console.log(document)
console.log(document.body)
document.body.style.background = "red";


// BOM -> Browser Object Model -> addtional objects provided by the browser for working with everything except the document
// alert/confirm/prompt -> part of BOM

location.href = "https://google.co.in"
// part of BOM