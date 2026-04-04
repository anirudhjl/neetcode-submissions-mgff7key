class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return !!nums.filter(a => nums.indexOf(a) !== nums.lastIndexOf(a)).length
    }
}
