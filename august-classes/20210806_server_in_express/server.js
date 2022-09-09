const express = require("express");
// old js syntax, importing
// import express from 'express';
// modern js only if you would install some extra stuff to your machine, because we use it at the node
const ourServer = express();
// putting all the logic of express in one var - creating an instance of express by invoking it
// it odestn create a server because it is not listening yet, to open a port

ourServer.listen(8000, () =>
  console.log("server up and running listening on port 8000")
);
ourServer.get("/", (request, response) => response.send("hello world!!!")); // controller
ourServer.get("test", (req, res) => res.send("testing...")); // second route

// send a response to the / root
// here our response is just a string of "hello world
// here we re gonna create our own json to post

/* from the client to the server communication like this: request (endpoint alsop knwen as route) consists of the following parts:
-the method : GET
- the path: '/'
/ the controller function: (req, res)=> response.json()- always req and res

*/

/*
We import express and create an instance that holds on all the logic of it.
Callback function - wo condition but with a value if you call first one the other function starts.
*/

// building the 'test' route: we give a path, a controller function within a callback with console.log f.e., or any other more complex stuff
// ourServer.get("/about", function (req, res) {
//   res.send("this is an introduction about expressjs");
// });

ourServer.get("/user/:userid", function (req, res) {
  res.send("your user ID is : " + req.params.userid);
});
// : meaning parametres params
