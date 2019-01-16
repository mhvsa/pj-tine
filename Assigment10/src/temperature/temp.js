const styles = require("./temp.scss");

const fahrToCelcius = fahr => ((fahr - 32) * 5) / 9;
const celciusToFahr = celc => (celc * 9) / 5 + 32;

const temp = document.createElement("div");
temp.className = styles.temp;

const title = document.createElement("p");
title.innerText = "Temperature converter";

const fahrInput = document.createElement("input");
fahrInput.type = "number";
fahrInput.placeholder = "fahrenheit";

const celcInput = document.createElement("input");
celcInput.type = "number";
celcInput.placeholder =  "celcius";

fahrInput.oninput = event =>
  (celcInput.value = fahrToCelcius(event.target.value));
celcInput.oninput = event =>
  (fahrInput.value = celciusToFahr(event.target.value));

temp.appendChild(title);
temp.appendChild(fahrInput);
temp.appendChild(celcInput);

module.exports = temp;
