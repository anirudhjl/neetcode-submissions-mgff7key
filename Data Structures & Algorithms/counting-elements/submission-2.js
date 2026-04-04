class Solution {
    countElements = arr => arr.filter((item) => arr.includes(item+1)).length;
}