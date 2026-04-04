class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0
        let minValue = prices[0]
        for (let i=1; i < prices.length; i++) {
            const price = prices[i]
            minValue = Math.min(price, minValue)
            maxP = Math.max(maxP, prices[i] - minValue)
        }
        return maxP
    }
}
