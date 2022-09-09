const express = require("express");
// import statement
const myServer = express();
// hey listen for incoming connections

myServer.listen(3000, () => console.log("server is running"));
// now the server is on the computer and client is on the computer as well. I ve added a callback here- with anonymous function which just giving a string
// function listening() {
//   console.log("listening...");
// }
// myServer.listen(8000, listening);

// method.GET + path ./ + controller function
myServer.get("/", (req, res) => res.send("Hi!"));

myServer.get("/test", (req, res) => res.send("10, 9, 8, 7.."));

myServer.get("/user/:id", function (req, res) {
  //   const usArr = ["noone", "someone", "nobody", "somebody"];
  res.send("user ID: " + req.params(id);
});
