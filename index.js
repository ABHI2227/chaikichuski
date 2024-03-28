require('dotenv').config()

const express = require('express')


const app = express()


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send(`abishekmalve27`)
})

app.get(`/login`,(req, res) =>{
    res.send(`<h1>"log in at abhishek malve"</h1>`)
})

 app.get(`/youtube`, (req, res) =>{
    res.send(`<h2>chai aur code</h2>`)
 })

 app.get(`/about`,(req, res) => {
  res.send(`<h1>Tell me about yourself</h3>`)
 })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})