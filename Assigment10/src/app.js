const dist = require("./distance/dist");
const temp = require("./temperature/temp");
const styles = require("./app.scss");

const app = document.getElementById("app");

app.className = styles.app;

const title = document.createTextNode("Super Converter 3000");

app.appendChild(title);
app.appendChild(dist);
app.appendChild(temp);