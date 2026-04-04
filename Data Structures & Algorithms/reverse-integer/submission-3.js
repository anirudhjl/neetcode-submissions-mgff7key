class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const res = x < 0
            ? '-' + parseInt([...x.toString().slice(1)].reverse().join(''))
            : parseInt([...x.toString()].reverse().join(''))
        if (res < -( 2 ** 31 ) || res > 2 ** 31 - 1) return 0
        return res;
    }
}
