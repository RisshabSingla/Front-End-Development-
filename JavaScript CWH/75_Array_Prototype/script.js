// Special property of JavaScript Objects that is either null or refrences another object 
// When we try to read a property from an object and it's missing. JavaScript automatically takes it from the prototype -> called prototype inheritance

// Setting Prototype

// Using __proto__



let a = {
    name2: "Harry",
    language: "JavaScript",
}
console.log(a)
// a.run();
// a.run() -> error -> not function as run in object or in prototype


let p = {
    run: () => {
        alert("run")
    }
}

let q = {
    name2: "Harry",
    language: "JavaScript",
    run: () => {
        alert("self run")
    }
}

q.__proto__ = p;
q.run(); // this will take the self-run 


p.__proto__ = {
    name: "Jackie"
}

a.__proto__ = p
a.run()
console.log(a.name)