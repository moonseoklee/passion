const express = require('express')
const app = express()
const path = require('path')


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/dist")));
  }

app.use(express.static('dist'))

app.get("/moon", (req, res) => {
    res.send({username:'moon'});
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT);