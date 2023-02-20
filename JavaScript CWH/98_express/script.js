// nodemon is used inorder to not restart server after every change 
// Automatically restarts the server

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("Query name is :" + req.query.name);
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
    // res.send('about')
})

app.get('/info', (req, res) => {
    res.send('info')
})
app.get('/contact', (req, res) => {
    res.send('contact')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})