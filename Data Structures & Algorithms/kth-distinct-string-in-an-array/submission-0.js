class Solution {
    kthDistinct = (arr, k) => arr.filter(a => arr.indexOf(a) === arr.lastIndexOf(a))[k-1] || "";
}
