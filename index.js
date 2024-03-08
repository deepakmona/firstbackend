const express = require('express')
require('dotenv').config();
const app = express()
const port = 4000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send("Hello , This is about page format so let's go to start this")
})

app.get('/me', (req, res) => {
  res.send('This is about page format so let go to start this')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

