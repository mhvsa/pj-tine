const NOT_FOUND = -1;

const binSearch = (arr, find, low = 0, high = arr.length - 1) => {
  if (high < low) return NOT_FOUND;
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] > find) return binSearch(arr, find, low, mid - 1);
  else if (arr[mid] < find) return binSearch(arr, find, mid + 1, high);
  else return mid;
}

const test = () => {
  let arr = [1, 2, 3, 5, 7];
  let find = 7;
  let index = binSearch(arr, find);
  console.log(`Array: ${arr}, finding: ${find}, found index: ${index}`);
  find = 2;
  index = binSearch(arr, find);
  console.log(`Array: ${arr}, finding: ${find}, found index: ${index}`);
}

module.exports = {
  binSearch,
  test,
}