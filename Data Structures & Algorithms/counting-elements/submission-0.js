class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        return arr.filter((item) => arr.includes(item+1)).length
    }
}
