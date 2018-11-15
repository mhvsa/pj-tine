const reverse = (string) => string.split("").reverse().join("");
const isPalindrom = (string) => string === reverse(string);

const test = () => {
  const palindrom = "abba";
  const notPalindrom = "hello world!";

  console.log(`isPalindrom(${palindrom}) = ${isPalindrom(palindrom)}`);
  console.log(`isPalindrom(${notPalindrom}) = ${isPalindrom(notPalindrom)}`);
}

module.exports = {
  isPalindrom,
  test
}