const db = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 5000;

db.dbInit();
app.use(cors());

app.use(bodyParser({ extended: false }));
app.use(router);

app.listen(PORT, () => console.log(`Server listens at ${PORT}`));
