
// const sayHello = (name) => {
//     console.log("greeting" + " " + name)
//     console.log("hi")
// }

// same thing for only one parameter
const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hi")
}

const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function () {
        // console.log(`The name is ${this.name}\nThe role is ${this.role}`) -> works fine
        // let that = this
        // console.log(this)

        setTimeout(function () {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000) // would not give the right answer -> window object 

        // Inorder to solve this problem -> arrow function 
        // setTimeout( function() {
        //     console.log(`The name is ${that.name}\nThe role is ${that.role}`)
        // }, 2000) -> works but old


        // Arrow function
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000)

    }
}
// sayHello("Harry", "Good Afternoon")
  // console.log(x.name, x.exp)
  // x.show()