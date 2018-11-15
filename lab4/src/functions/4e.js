const findLongestWord = string => string.split(" ")
  .reduce((prev, curr) => prev.length > curr.length ? prev : curr);

const test = () => {
  const words = "a bb ccc dddd ee f";
  console.log(`Longest word from ${words} is ${findLongestWord(words)}`);
}
module.exports = {
  test,
  findLongestWord
}