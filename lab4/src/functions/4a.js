const RecursiveFactorial = function (n, sum = 1) {
  if (n === 0) {
    return sum;
  } else {
    sum *= n;
    return RecursiveFactorial(n - 1, sum);
  }
};

function IterativeFactorial(n) {
  sum = 1;
  for (let i = n; i > 0; --i) {
    sum *= i;
  }
  return sum;
}

const test = () => {
  for (let i = 0; i < 10; i++) {
    const recursiveResult = RecursiveFactorial(i);
    const iterativeResult = IterativeFactorial(i);
    console.log(`RecursiveFactorial(${i}) returns ${recursiveResult}`);
    console.log(`IterativeFactorial(${i}) returns ${iterativeResult}`);
  }
}


module.exports = {
  test,
  RecursiveFactorial,
  IterativeFactorial,
}