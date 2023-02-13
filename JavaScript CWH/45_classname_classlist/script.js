
// className -> inorder to change the class name
first.className = "red"

// classList.add -> Adds a class to the className
first.classList.add("purple")
first.classList.add("text-light")

// classList.remove -> removes a class to the className
first.classList.remove("text-light")

// // classList.contains -> returns whether the given class is present or not -> T/F
console.log(first.classList.contains("red"));

// classList.toggle -> does the opposite -> if there - removes and vice-versa 
first.classList.toggle("red")