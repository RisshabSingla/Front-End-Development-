

// POST Requests

// Inorder to make a POST Request -> need to use fetch options
// method -> HTTP method -> POST
// body -> the request body

// fetch("url" , { 
//     method: 'POST',
//     headers:{
//         'content type' : ''
//     },
//     body:'{"'a', 'harry'"}'
//    });
// 


// let options = {
//     method: "POST",
//     headers: {
//             "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
// }
// // stringify -> JS Object to String
// // parse -> String to JS Object 


// fetch('https://jsonplaceholder.typicode.com/posts', options)
// .then((response) => response.json())
// .then((json) => console.log(json));






const createTodo = async (todo) => {
    let options = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
            title: 'Harry2',
            body: 'bhai2',
            userId: 1100,
    }

    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(9))
}

mainFunc()