
// Problem 2
// document.getElementById("google").addEventListener('click', function(){
//     let url = "https://www.google.co.in";
//     window.location = url;

// })


// Problem 3
// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)

setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
  }, 300)