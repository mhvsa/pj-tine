const alphOrder = string => string.split("")
  .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  .join("");

const test = () => {
  const stringToOrder = "dddbbbcccaaa";
  console.log(`alphOrder(${stringToOrder}) = ${alphOrder(stringToOrder)}`);
}

module.exports = {
  alphOrder,
  test
}