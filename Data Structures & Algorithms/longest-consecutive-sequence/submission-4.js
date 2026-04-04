class Solution {
    longestConsecutive(nums) {
        let longest = 0;
        const set = new Set(nums);
        for (let num of set) {
            if (!set.has(num-1)) {
                let length = 1;
                while (set.has(num+length)) length++;
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}