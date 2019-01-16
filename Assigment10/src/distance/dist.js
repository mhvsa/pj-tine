const styles = require("./dist.scss");

const kmToMiles = km => km * 0.621371192;
const milesToKm = miles => miles * 1.609344;

const dist = document.createElement("div");
dist.className = styles.dist;

const title = document.createElement("p");
title.innerText = "Distance converter";

const kmInput = document.createElement("input");
kmInput.type = "number";
kmInput.placeholder = "km";

const milInput = document.createElement("input");
milInput.type = "number";
milInput.placeholder = "mil";

kmInput.oninput = event => (milInput.value = kmToMiles(event.target.value));
milInput.oninput = event => (kmInput.value = milesToKm(event.target.value));

dist.appendChild(title);
dist.appendChild(kmInput);
dist.appendChild(milInput);

module.exports = dist;
