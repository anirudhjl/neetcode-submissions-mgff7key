class Solution {
    twoSum(nums, target) {
        const prevMap = new Map();
        for (let i=0; i<nums.length; i++) {
            let diff = target-nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff)+1, i+1] 
            }
            prevMap.set(nums[i], i)
        }
        return []
    }
}
