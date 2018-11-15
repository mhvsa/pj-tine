const isPrime = n => {
  if (n <= 1)
    return false
  else if (n <= 3)
    return true
  else if (n % 2 === 0 || n % 3 === 0)
    return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) === 0) return false;
  }
  return true;
}


const test = () => {
  console.log("Should all be true")
  const primes = [2, 3, 5, 7, 1777];
  primes.forEach(prime => console.log(isPrime(prime)));
  const notPrimes = [4, 8, 25, 100];
  console.log("Should all be false")
  notPrimes.forEach(num => console.log(isPrime(num)));
}

module.exports = {
  isPrime,
  test,
}