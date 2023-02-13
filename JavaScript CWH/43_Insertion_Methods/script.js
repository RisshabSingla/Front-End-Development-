

let a = document.getElementsByTagName("div")[0];
console.log(a);

a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';


let div = document.createElement("div");
div.innerHTML = '<h1>Hello World2!</h1>';


let b = document.getElementsByTagName("div")[1];
// append -> inorder to insert after the node
// b.append(div);
//  prepend -> inorde to insert before the node
b.prepend(div);

let c = document.getElementsByTagName("div")[3];

let div2 = document.createElement("div");
div2.innerHTML = '<h1>Hello World3!</h1>';

// before -> Insert before the node
// c.before(div2);

// after -> Insert after the node 
c.after(div2);


// replaceWith -> replace the node with the given node
a.replaceWith(div2);