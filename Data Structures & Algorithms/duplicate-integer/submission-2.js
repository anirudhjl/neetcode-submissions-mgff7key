class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // JS friendly
    // hasDuplicate(nums) {
    //     return !!nums.filter(a => nums.indexOf(a) !== nums.lastIndexOf(a)).length
    // }

    // algorithmic friendly
    hasDuplicate(nums) {
        const seen = new Set()
        for (const n of nums) {
            if (seen.has(n)) return true
            seen.add(n)
        }
        return false
    }
}
