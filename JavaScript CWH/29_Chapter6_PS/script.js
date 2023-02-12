
const func = (age) =>{
    if(age<0){
        // document.write("Invalid age");
        alert("Invalid age");
        console.error("Invalid age");
    }else if(age<18){
        alert("U cannot drive without a driving license");
    }else{
        alert("You can drive with a driving license");
    }
}

let age = prompt("Enter your age");
func(age);

let cnf = confirm("Do you want to see the prompt again: ");

if(cnf){
    func(age);
}