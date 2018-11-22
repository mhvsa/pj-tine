'use strict';

// a

const convert = (cels) => cels * 1.8 + 32;
const converterResultDiv = document.getElementById("converterResult");
const converterInput = document.getElementById("converterInput");
const converterButton = document.getElementById("converterButton");
const handleConverterButtonClicked = () => {
  const val = converterInput.value;
  converterResultDiv.innerText = `${val}°C is ${convert(val)}°F`;
  converterInput.value = "";
  converterErrorDiv.innerText = null;
}

converterButton.onclick = handleConverterButtonClicked;

// b

window.onload = () => {
  setTimeout(() => {
    const p = document.createElement("p");
    const text = document.createTextNode("After 5 seconds!");
    p.appendChild(text);
    document.getElementById("App").appendChild(p);
  }, 5000);
};

// c

let formValid = false;

const inputNum = document.getElementById("inputNum");
const inputEmail = document.getElementById("inputEmail");
const addButton = document.getElementById("addButton");
const requiredError = document.getElementById("RequiredError");
const emailError = document.getElementById("EmailError");

addButton.disabled = true;

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

inputNum.validate = () => inputNum.value ? true : false;
inputEmail.validate = () => inputEmail.value.match(emailRegex) ? true : false;

const checkFormValidity = () => {
  formValid = inputNum.valid && inputEmail.valid;
  addButton.disabled = !formValid;
}

const validate = (input, element, errorText) => () => {
  const valid = input.validate();
  input.valid = valid;
  input.className = valid ? "" : "Invalid";
  element.innerText = valid ? null : errorText;
  checkFormValidity();
}

inputEmail.addEventListener("focusout", validate(inputEmail, emailError, "fill email"));
inputNum.addEventListener("focusout", validate(inputNum, requiredError, "required"));

// d

const table = document.getElementById("table");

addButton.onclick = () => {
  const row = document.createElement("tr");
  const colNum = document.createElement("td");
  const colEmail = document.createElement("td");
  const num = document.createTextNode(inputNum.value);
  const email = document.createTextNode(inputEmail.value);
  row.appendChild(colNum);
  row.appendChild(colEmail);
  colNum.appendChild(num);
  colEmail.appendChild(email);
  inputEmail.value = "";
  inputNum.value = "";
  table.appendChild(row);
}