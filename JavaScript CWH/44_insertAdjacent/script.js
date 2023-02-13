
let first = document.getElementById("first");


// afterbegin -> insert just after the tag has started
first.insertAdjacentHTML("afterbegin" , "<h3> This is the inserted afterbegin text</h3>");

// afterend -> insert just after the tag has ended(the final tag)
first.insertAdjacentHTML("afterend" , "<h3> This is the inserted afterend text</h3>");

// beforebegin -> insert just before the tag has started
first.insertAdjacentHTML("beforebegin" , "<h3> This is the inserted beforebegin text</h3>");

// beforeend -> insert just after the tag will ended(the final tag)
first.insertAdjacentHTML("beforeend" , "<h3> This is the inserted beforeend text</h3>");

console.log(first);
// remove -> removes the entire node
first.remove();









