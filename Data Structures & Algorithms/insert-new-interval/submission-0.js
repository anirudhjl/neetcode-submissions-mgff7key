class Solution {
    insert(intervals, newInterval) {
        const res = [];
        for (let interval of intervals) {
            if (interval[1] < newInterval[0]) res.push(interval);
            else if (interval[0] > newInterval[1]) {
                res.push(newInterval);
                newInterval = interval;
            }
            else newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
        }
        res.push(newInterval);
        return res;
    }
}
