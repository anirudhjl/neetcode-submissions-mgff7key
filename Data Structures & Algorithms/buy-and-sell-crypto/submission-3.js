class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0
        let minValue = prices[0]
        for (let sell of prices) {
            maxP = Math.max(maxP, sell - minValue)
            minValue = Math.min(sell, minValue)
        }
        return maxP
    }
}
