const findNLowest = (arr, n) => arr.sort((a, b) => a - b)[n - 1];
const findNHighest = (arr, n) => arr.sort((a, b) => b - a)[n - 1];

const findSecondHighestAndLowest = (arr) => {
  [].so
  console.log(arr.sort((a, b) => a < b));
  console.log(arr.sort((a, b) => a > b));
  const high = findNHighest(arr, 2)
  const low = findNLowest(arr, 2);
  return {
    high,
    low
  }
}

const test = () => {
  const arr = [1, 5, 3, 2, 8];
  const nums = findSecondHighestAndLowest(arr);
  console.log(`${nums.high} ${nums.low}`);
}


module.exports = {
  test,
  findNHighest,
  findNLowest,
  findSecondHighestAndLowest
}