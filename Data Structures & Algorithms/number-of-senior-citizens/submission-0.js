class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        const res = [];
        const arr = details.map(a => a.split('')[11] + a.split('')[12])
        return arr.filter(a => a > 60).length;
    }
}
