class Solution {
    rob(nums) {
        let a = 0, b = 0;
        for (let n of nums) [a, b] = [b, Math.max(n + a, b)];
        return b;
    }
}
