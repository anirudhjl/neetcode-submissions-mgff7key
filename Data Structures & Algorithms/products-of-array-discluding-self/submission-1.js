class Solution {
    productExceptSelf(nums) {
        let right = 1
        let left = 1
        const n = nums.length
        let output = new Array(n).fill(1)
        for (let i = 0; i<n; i++) {
            output[i] = left
            left *= nums[i]
        }
        for (let i = n-1; i>=0; i--) {
            output[i] *= right
            right *= nums[i]
        }
        return output
    }
}
