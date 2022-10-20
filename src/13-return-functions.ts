(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`Total:  ${rta}`);
  };

  const rta = printTotal([1, 2, 3, 5, 4]);

  const greater = (a: number, b: number): number | string => {
    if (a > b) {
      // Return number
      return a;
    } else if (b > a) {
      // Return number
      return b;
    } else {
      // Return string
      return `The numbers ${a} and ${b} are the same`;
    }
  };
})();
