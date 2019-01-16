const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const required = value =>
  value === null || value === undefined || value === "" ? false : true;
export const minLen = (minLen, value) => (value.length > minLen ? true : false);
export const maxLen = (maxLen, value) => (value.length < maxLen ? true : false);
export const isEmail = value => emailRegex.test(value);
