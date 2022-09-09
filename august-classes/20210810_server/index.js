// server
// https://digitalthinkerhelp.com/what-is-client-server-architecture-diagram-types-examples-components/
// request response cycle
// https://cascadingmedia.com/insites/2015/03/http-2.html
// The Hypertext Transfer Protocol (HTTP)
// HTTP status
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// HTTP Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome on Homepage");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

// at the end
app.listen(PORT, () => {
  console.log("Server is running...");
});
