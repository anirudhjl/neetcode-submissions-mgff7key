class Solution {
    checkInclusion(s1, s2) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
        const count = new Array(26).fill(0);
        for(let i=0; i<s1.length; i++)
            count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
        for(let i=0; i<s2.length; i++) {
            count[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
            if (i >= s1.length) count[s2.charCodeAt(i-s1.length) - "a".charCodeAt(0)]++;
            if (count.every(val => val === 0)) return true;
        }
        return false;
    }
}
