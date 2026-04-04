class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        return s.toLowerCase()?.match(/[a-zA-Z0-9]/gi)?.reverse().join('') === s.toLowerCase().match(/[a-zA-Z0-9]/gi)?.join('')
    }
}
