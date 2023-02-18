// Write a javascript program to pretend to look like a hacker
// Try to emulate a terminal using javascript logic and it should look to others as if you are hacking a system
// Try to display messages like:
// Initializing Network
// Connecting to service...
// Retreiving username...
// Username found....
// Trying a combination of 4.5 Trillion passwords...
// Password found...
// Connecting to Facebook...


let a = [
        "Initializing Hack tool...",
        "Connecting to Facebook...",
        "Connecting to server 1...",
        "Connection failed. Retrying...",
        "Connecting to server 2",
        "Connected Successfully...",
        "Username iamharry...",
        "Trying Brute Force...",
        "200K passwords tried...",
        "Match not found",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match not found...",
        "Another 200K passwords tried...",
        "Match found...",
        "Accessing Account...",
        "Hack Successful..."
]

const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve(true) }, seconds * 1000)
        })
}

const showHack = async (message) => {
        await sleep(0.5)
        // console.log(message)
        text.innerHTML = text.innerHTML + message + "<br>"
}

//  Immediately Invoked Async Function Expression -> immediately invoked
(async () => {
        for (let i = 0; i < a.length; i++) {
                await showHack(a[i])
        }
})()

