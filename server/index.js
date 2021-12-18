const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const public = path.join(__dirname, "../client/dist");

const dbUtils = require('../database/utils');

// initialize an express instance
const app = express();

// declare middlware here
app.use(express.json())
app.use(express.static(public))

// Begin basic routes. Maybe use a router later on?
app.get('/test', (req, res) => {
  res.send(`${req.method} recieved at /test endpoint!`)
})

app.get('/pokemon', (req, res) => {
  dbUtils.getAll()
    .then(results => {
      res.send(results)
    })
    .catch(err => {
      res.status(401).send(err)
    })
})

app.post('/pokemon', (req, res) => {
  dbUtils.save(req.body)
    .then(res.status(200).send("Successful save"))
    .catch(err => {
      res.status(401).send(err)
    })
})

// Finally, tell server to start listening for incoming http to this machine on <PORT>.
app.listen(PORT, (err) => {
  console.log(err ? err : `Listening on ${PORT} and serving from ${public}`)
})