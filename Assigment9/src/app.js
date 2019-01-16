const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = 4000 || process.env.PORT;

app.set("view engine", "pug");
app.use(bodyParser({ extended: true }));
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    func: () => console.log("Hello!")
  });
});

app.post("/api/add", (req, res) => {
  const response = {
    result: req.body.a + req.body.b
  };
  res.status(200).json(response);
});
app.post("/api/sub", (req, res) => {
  const response = {
    result: req.body.a - req.body.b
  };
  res.status(200).json(response);
});
app.post("/api/div", (req, res) => {
  const response = {
    result: req.body.a / req.body.b
  };
  res.status(200).json(response);
});
app.post("/api/mul", (req, res) => {
  const response = {
    result: req.body.a * req.body.b
  };
  res.status(200).json(response);
});

app.listen(PORT, () => console.log(`Server listens at ${PORT}`));
