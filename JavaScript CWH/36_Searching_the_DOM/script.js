

// getElementById -> returns the element corresponding to the id -> only one element
let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "blue"


// getElementsByClassName -> returns the element corresponding to the class name -> returns a list of elements 

ctitle = document.getElementsByClassName("card-title");
// ctitle.style.color = "brown";

for (elem of ctitle) // inorder to iterate over the list 
{
    elem.style.color = "pink"
}

// for class . is used
// for id # is used

// querySelectorAll -> returns a node list of elements matching to the given CSS Selector
let ctitles = document.querySelectorAll(".card-title")

console.log(ctitles);
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"

// querySelector -> returns the firt element that matches to the given CSS Selector 
document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "red"



console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))



