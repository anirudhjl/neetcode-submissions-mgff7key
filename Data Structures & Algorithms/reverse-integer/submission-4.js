class Solution {
    reverse(x) {
        const res = x < 0
            ? -([...x.toString().slice(1)].reverse().join(''))
            : +([...x.toString()].reverse().join(''))
        if (res < -( 2 ** 31 ) || res > 2 ** 31 - 1) return 0
        return res;
    }
}
