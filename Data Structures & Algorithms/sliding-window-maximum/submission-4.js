class Solution {
    maxSlidingWindow(nums, k) {
        const res = [];
        for (let i=0; i<=nums.length-k; i++) {
            let maxi = nums[i];
            for (let j=i; j<i+k; j++) maxi = Math.max(maxi, nums[j])
            res.push(maxi)
        }
        return res;
    }
}
