class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxValue = 0
        let minValue = prices[0]
        for (let i=1; i < prices.length; i++) {
            const price = prices[i]
            minValue = Math.min(price, minValue)
            maxValue = Math.max(maxValue, prices[i] - minValue)
        }
        return maxValue
    }
}
