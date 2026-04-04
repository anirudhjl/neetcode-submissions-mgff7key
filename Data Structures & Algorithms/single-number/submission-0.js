class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        return nums.filter(a => nums.indexOf(a) === nums.lastIndexOf(a))[0]
    }
}
