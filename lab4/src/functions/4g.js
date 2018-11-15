const getType = any => typeof any;

const test = () => {
  const string = "Hello";
  const obj = {};
  const func = () => { }
  const num = 2;
  const array = [1,2,3];
  const all = [string, obj, func, num,array];
  all.forEach(el => console.log(`${el} is type of ${getType(el)}`));
}
module.exports = {
  test,
  getType
}