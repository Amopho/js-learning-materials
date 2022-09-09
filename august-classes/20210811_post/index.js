const express = require("express");
require("dotenv").config();
// Follow those steps to work on local server with node
// npm init -y
// echo "PORT=5000" > .env
// echo "node_modules" > .gitignore
// npm i express dotenv
// npm i  nodemon --save-dev
// json script "start": "nodemon index.js"
// initializing express
const app = express();

//  3 root / router at http://localhost:5000/
app.get("/", (req, res) => {
  console.log(req);
  res.send("<h2>Welcome to my first server<h2>");
});

// 4. about router http://localhost:5000/about
app.get("/about", (req, res) => {
  res.send("<h2>Do you like it?<h2>");
});

// 2. defyining the port
const PORT = process.env.POST || 5000;

// 1. starting the server run, Hadi likes to have it on the very end
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
