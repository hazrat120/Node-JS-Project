//dependencies
const http = require("http");

//app object - module scaffolding
const app = {};

//configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to port ${app.config.port}`);
  });
};

//handle Request response
app.handleReqRes = (req, res) => {
  //response handle
  res.end("Hello Mr.Hazrat Ali. How are you? What are you doing!");
};

// start the server
app.createServer();
