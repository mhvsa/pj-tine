const Fibonacci = (n) => {
  
  if(n == 0){
    return 0;
  }
  
  if(n == 1){
    return 1;
  }

  return Fibonacci(n-1) + Fibonacci(n-2);
}

const test = () => {
  for (let i = 0; i < 10; i++) {
    const result = Fibonacci(i);
    console.log(`Fibonacci(${i}) = ${result}`);
  }
}

module.exports = {
  Fibonacci,
  test
}