

// Syncronous programming 
// Actions that initiate now and finish one-by-one

// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");



// Asynchronous programming
// Actions that initiate now and will finish later 

// console.log("Start")
// setTimeout(function() {
//   console.log("Hey I am good");
// }, 3000)
// console.log("End")


// Callback Function
// Function passed into another function as an argument which is then invoked inside the outer function to complete an action

// default way -> function is fixed
// function loadScript(src){
//   let script = document.createElement("script");
//   script.src = src;
//   document.body.appendChild(script);
//   script.onload = function(){
//     console.log("Script Loaded")
//   }
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js") 




// when we can different functions -> decided afterwards 

// function hello(src) {
//   alert('Hello World!' + src);
// }

// function goodmorning(src) {
//   alert('Good morning' + src);
// }


// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = function () {
//     console.log("Script Loaded")
//     callback(src);
//   }
//   document.body.appendChild(script);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning);


// Error Handling 

function hello(error , src) {
  if(error){
    console.log(error);
    return
  }
  alert('Hello World!' + src);
}

function goodmorning(error , src) {
  if(error){
    console.log(error);
    return
  }
  alert('Good morning' + src);
}

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Script Loaded")
    callback(null , src);
  }

  script.onerror = function(){
    console.log("Error loading script ")
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

loadScript("https://cdn.jsddelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning);


