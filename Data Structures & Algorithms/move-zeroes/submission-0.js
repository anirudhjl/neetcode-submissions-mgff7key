class Solution {
    moveZeroes(nums) {
        for (let l=0, r=0; r<nums.length; r++) {
            if (nums[r] !== 0) {
                [nums[r], nums[l]] = [nums[l], nums[r]]
                l++;
            }
        }
    }
}
