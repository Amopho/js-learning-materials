require("dotenv").config(); // package itself and make is as config and execute it

const http = require("http");

const PORT = process.env.PORT || 5000;
// protecting the port from crushing
// console.log(process.env.PORT);

const firstRes = function (req, res) {
  res.writeHead(200); //   happy state
  //   handle request and I want a response i want to notidfy a client what happend - 200- fregistration occured succesfuly
  res.end("Hey, I am the server :D ");
  // every response start it has to have an end, normally an object. You dont wont to stay opened connection between frnt and backend, because they will be staying and waiting for connection Response comes as
};
// receive a request and response from the same rfunction
const server = http.createServer(firstRes);
server.listen(PORT, () => console.log(`Sever is listening on port=${PORT}`));
