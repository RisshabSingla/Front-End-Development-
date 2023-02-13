const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red"
}

// first Child -> the first tag after the given tag -> mostly text tag due to given spaces in code
// firdt ElementChild -> the first element tag after the given tag -> text tag is not considered

let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)

