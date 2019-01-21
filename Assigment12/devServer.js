const http = require("http");
const fs = require("fs");
const path = require("path");
const publicPath = path.resolve("./public");
const server = http.createServer((req, res) => {
  if (req.url.endsWith(".js")) {
    fs.readFile(publicPath + "/bundle.js", (err, data) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/javascript");
      res.end(data);
    });
  } else {
    fs.readFile(publicPath + "/index.html", (err, data) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  }
});

server.listen(4000, () => console.log("React app started at port 4000"));
