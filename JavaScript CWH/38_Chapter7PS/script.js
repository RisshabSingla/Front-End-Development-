
// Problem1 
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"


// Problem 3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";

document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"


// Problem 4

let lis = document.getElementsByTagName("li");
console.log(lis);
lis = Array.from(lis);

lis.forEach(elem => {
    elem.style.backgroundColor = "cyan";
});

// for (const elem of lis) {
//     elem.style.backgroundColor = "cyan";
// }
