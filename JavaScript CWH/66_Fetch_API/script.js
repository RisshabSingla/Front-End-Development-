


// JS can be used to send and fetch information from the network when needed (AJAX)

// Fetch -> Used to get data over the network
// Syntax : fetch("url" , {options object})

// Fetch is a two stage process
// First -> Object of Response class -> Status and OK properties
// Status -> HTTP Status Code
// Ok -> Boolean if HTTP code is in 200-299

// Second -> Inorder to access the body 

// Response Headers 
// Headers that we get along with the response

// Request Headers
// Headers that we pass along with our request -> authentication
// Syntax: fetch("url" , { headers: { Authentication : "" } } ); 



let p = fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((response) => {
    console.log(response)
})

