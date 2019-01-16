const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
const PORT = 4000;

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(__dirname + "/public"));

app.use(bodyParser({ extended: true }));

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/form", (req, res) => {
  res.status(200);
  res.render("form");
});

app.get("/formdata", (req, res) => {
  res.render("formdata", req.query);
});

app.post("/jsondata", (req, res) => {
  res.render("jsondata", req.body);
});

app.listen(PORT, () => console.log(`Server listens at ${PORT}`));
