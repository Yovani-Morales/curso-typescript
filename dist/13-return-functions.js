"use strict";
(() => {
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach(num => total += num);
        return total.toString();
    };
    const printTotal = (prices) => {
        const rta = calcTotal(prices);
        console.log(`EL total es ${rta}`);
    };
    printTotal([1, 2, 3]);
})();
