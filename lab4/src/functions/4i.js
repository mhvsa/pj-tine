const amountToCoins = (amount, coins) => {
  const sorted = coins.sort((a, b) => b - a);
  let rest = amount;
  const result = [];
  sorted.forEach(coin => {
    let times = Math.floor(rest / coin);
    for (let i = 0; i < times; i++) {
      result.push(coin);
    }
    rest -= coin * times;
  });
  console.log(`Here ${amount} and ${coins} are coins`);
  console.log(`Output: ${result}`);
};

const test = () => {
  amountToCoins(46, [25, 10, 5, 2, 1]);
}


module.exports = {
  amountToCoins,
  test,
}