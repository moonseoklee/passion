const express = require('express');
const path = require('path');
const app = express()

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
  }
  
  app.get("/api/greeting", (req, res) => {
    res.send("Hello World!");
  });
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
    //forgit
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT);