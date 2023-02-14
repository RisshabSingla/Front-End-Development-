
let x = function(e){
    console.log(e);
    // e -> Event Pointer -> Event Object 
    console.log("Target is:" + e.target)
    console.log("Hello1");
}

let y = function(e){
    console.log(e);
    console.log("Hello2");
}

// btn.addEventListener('click', function(e){
//     alert("Hello1");
// });

// This won't work because the reference to the function should be the same
// function object should be the same
// if(a == "2"){
//     btn.removeEventListener('click', function(e){
//         alert("Hello1");
//     })
// }

btn.addEventListener('click', x);

btn.addEventListener('click', y); 

let a = prompt("1 or 2");

if(a == "2"){
    btn.removeEventListener('click', x);
}



