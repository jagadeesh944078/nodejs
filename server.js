/* here you can import http module in 2 diffrent ways you can write node: or default it will take node: only */
// const http = require("node:http");
const http = require("http");

/* here create server method will give the instance of the server */
/* i have created the server which is able to listen to the response */
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecreateData") {
    res.end("there is no secret data");
  }
  res.end("hello world!");
});

/* so now my server is ready to listen to the incoming requests */
server.listen(7777);
