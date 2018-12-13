const http = require("http");

const PORT = 4444;

const parseParams = (req, res) => {
  const url = req.url;
  const index = url.indexOf("?") + 1;
  const paramsArray = url.slice(index).split("&");
  const params = {};
  for (const pair of paramsArray) {
    const keyValue = pair.split("=");
    params[keyValue[0]] = keyValue[1];
  }
  req.params = params;
};

const parsePath = (req, res) => {
  req.path = req.url.slice(0, req.url.indexOf("?"));
};

const handlerFactory = (path, handler) => (req, res) => {
  if (req.path === path) handler(req, res);
};

const handleAdd = handlerFactory("/add", (req, res) => {
  const result =
    Number.parseFloat(req.params.a) + Number.parseFloat(req.params.b);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      params: req.params,
      result
    })
  );
});

const handleSubstract = handlerFactory("/sub", (req, res) => {
  const result =
    Number.parseFloat(req.params.a) - Number.parseFloat(req.params.b);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      params: req.params,
      result
    })
  );
});

const handleDivide = handlerFactory("/div", (req, res) => {
  const result =
    Number.parseFloat(req.params.a) / Number.parseFloat(req.params.b);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      params: req.params,
      result
    })
  );
});

const handleMultiply = handlerFactory("/mul", (req, res) => {
  const result =
    Number.parseFloat(req.params.a) * Number.parseFloat(req.params.b);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      params: req.params,
      result
    })
  );
});

const middlewares = [
  parseParams,
  parsePath,
  handleAdd,
  handleSubstract,
  handleMultiply,
  handleDivide
];

http
  .createServer((req, res) => {
    for (const middleware of middlewares) {
      middleware(req, res);
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("I don't understand the command");
  })
  .listen(PORT, "127.0.0.1");
