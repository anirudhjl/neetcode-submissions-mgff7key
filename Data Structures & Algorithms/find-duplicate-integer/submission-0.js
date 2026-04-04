class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        return nums.filter((a,ind)=>nums.indexOf(a) !== nums.lastIndexOf(a))[0]
    }
}
