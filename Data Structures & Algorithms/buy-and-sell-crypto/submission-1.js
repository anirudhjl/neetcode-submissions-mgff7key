class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxValue = 0
        let minValue = prices[0]
        for (let sell of prices) {
            maxValue = Math.max(maxValue, sell - minValue)
            minValue = Math.min(sell, minValue)
        }
        return maxValue
    }
}
