

// <button onmouseenter="console.log('container ke andar mouse gaya')"
// onclick="console.log('container me click hua')" 
// >Click me</button>


// Instead of this we can write

let elem = document.getElementsByClassName("container")[0];

elem.onclick = ()=>{
    console.log('JS se container me click hua')
}

elem.onmouseenter = () =>{
    console.log('JS se container ke andar mouse gaya');
}


