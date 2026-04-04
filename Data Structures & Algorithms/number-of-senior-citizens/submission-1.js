class Solution {
    countSeniors(details) {
        return details.map(a => a.split('')[11] + a.split('')[12]).filter(a => a > 60).length;
    }
}
