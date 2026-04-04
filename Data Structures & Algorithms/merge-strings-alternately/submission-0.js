class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const m = word1.length;
        const n = word2.length;
        const res = [];
        let i = 0;
        let j = 0;
        while(i<m || j<n) {
            if (i<m) res.push(word1[i++]);
            if (j<n) res.push(word2[j++]);
        }
        return res.join('')
    }
}
