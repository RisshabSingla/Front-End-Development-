


const func = ()=> {
    let a = new Date()
    hour.innerHTML = a.getHours()
    min.innerHTML = a.getMinutes()
    second.innerHTML = a.getSeconds()
    date.innerHTML = a.getDate()
} 


setInterval(func, 1000);


