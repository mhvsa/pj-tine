/* eslint-env browser */

const handleClicked = () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const operation = document.getElementById("operation").value;
  const req = new XMLHttpRequest();
  req.open("POST", `/api/${operation}`, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.send(JSON.stringify({ a, b }));
  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
      document.getElementById("result").innerText = JSON.parse(req.response).result;
    }
  };
};