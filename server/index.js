const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const public = path.join(__dirname, "../client/dist");

const app = express();

app.use(express.json())
app.use(express.static(public))

app.get('/test', (req, res) => {
  res.send(`${req.method} recieved at /test endpoint!`)
})

app.listen(PORT, (err) => {
  console.log(err ? err : `Listening on ${PORT} and serving from ${public}`)
})