(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;

    prices.forEach(num => total += num);
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`EL total es ${rta}`);
  }

  printTotal([1,2,3]);
})();
