

document.write("This is the first Hello\n");
// setTimeout -> allows us to run a function after an interval of time
let a = setTimeout(function(){
    document.write("This is the second Hello\n");
    // alert("I am inside set Timeout");
},5000)

document.write("Outside");
// clearTimeout -> inorder to cancel the execution of timeout incase we change out mind
clearTimeout(a);

console.log(a);
// a -> timer ID


const sum = (a,b,c=0) =>{
    console.log("Running sum " +(a+b+c));
    a+b;
}

setTimeout(sum,1000,1,2)
// setTimeout(<function>, delay, function parameters)

setTimeout(sum,1000,1,2,7)




// setInterval -> kind of infinite while loop
// runs continuously after every given time period
let number = 0;

let b = setInterval(function(){
    // alert("inside");
    console.log("Inside");
    number = number+1;
    // inorder to stop the execution
    if(number == 5){
        clearTimeout(b);
    }
},2000)








