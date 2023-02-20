// Common JS Modules

const hello = ()=>{
    console.log("Hello Risshab")
}

const ahello = (name)=>{
    console.log("Hello " + name)
}

// module.exports = hello -> only one function 

module.exports = {hello, ahello};// same as below line
// module.exports = {hello: hello, ahello: ahello};
