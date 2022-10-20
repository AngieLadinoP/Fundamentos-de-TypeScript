(() => {
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total;
    };
    const printTotal = (prices) => {
        const rta = calcTotal(prices);
        console.log(`Total:  ${rta}`);
    };
    const rta = printTotal([1, 2, 3, 5, 4]);
})();
