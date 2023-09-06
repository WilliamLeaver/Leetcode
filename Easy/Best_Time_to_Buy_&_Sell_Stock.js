/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //Variables
    let maxProfit = 0;
    let buyPosition = 0;
    let sellPosition = 1;
    // while sellPrice is not past the end
    while (sellPosition < prices.length){
        // if buyPrice less than sellPrice -> test profit 
        if (prices[buyPosition] < prices[sellPosition]) {
            let Profit = prices[sellPosition] - prices[buyPosition]
            // if maxProfit less than profit -> set new maxProfit
            if (maxProfit < Profit) {
                maxProfit = Profit;
            }
        }
        else {
            buyPosition = sellPosition; 
        }
        sellPosition++;
    }
    return maxProfit
};
