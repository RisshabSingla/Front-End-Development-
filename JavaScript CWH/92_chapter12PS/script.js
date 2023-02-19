

// Problem 1

const a = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 1000 * n)
    })
}

(async () => {
        let text = await a("Hello")
        console.log(text)
        text = await a("World")
        console.log(text)
    }
)()


// Problem 2

function sum(a, b, c) {
    return a + b + c
}

let x = [1, 3, 5]
console.log(sum(...x));


(async () => {
    let text = await a("I am resolving after 1 second", 1)
    console.log(text)
    text = await a("I am resolving after 4 seconds", 4)
    console.log(text)
  }
)()





