// ***** Provision Server Here ***** //
const express = require('express');
const path = require('path');
const dbUtils = require('../database/utils');

// +++++ QoL imports / Global declarations +++++ //
const PORT = process.env.PORT || 3000;
const public = path.join(__dirname, "../client/dist");
const logger = require('cowsay');

// ***** Initialize Express instance ***** //
const app = express();

// ***** Initialize any middleware ***** //
app.use(express.json())
app.use(express.static(public))

// ***** Start Bare Routes Here ***** //
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

// +++++ Spin Up Server, my many tentacled friend! +++++ ///
app.listen(PORT, (err) => {
  console.log(path.join(__dirname, ".."))
  console.log(logger.think({
    text: err ? err : `Listening on ${PORT} and serving from ${public.replace(path.join(__dirname, '../'), "")}`, f: 'octopus'}))
})