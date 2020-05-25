const express = require('express')
const app = express()


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
  }

app.use(express.static('dist'))

const PORT = process.env.PORT || 5000;

app.listen(PORT);