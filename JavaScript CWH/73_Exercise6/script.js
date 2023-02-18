// Create a TODO list app capable of storing your Todos in localStorage. Add an option to create, delete and access all the Todos. Try to make UI as good as possible


submit.addEventListener("click", (e) => {
    // preventDefault -> if the page reloads after clicking, then it won't 
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    console.log(e)
    todo.innerHTML = `
    <h1>${titlec} </h1>
    <p> ${descc}</p>
    `
    title.value = ""
    desc.value = ""
  })
  
  
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML = ""
  })