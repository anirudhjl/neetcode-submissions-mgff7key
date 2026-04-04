class Solution {
    frequencySort = nums => {
        const mp = {}
        for (let num of nums) mp[num] = (mp[num] || 0) + 1;
        return nums.sort((a,b) => mp[b] !== mp[a] ? mp[a]-mp[b] : b-a);
    }
}
