class Solution {
    insert(intervals, newInterval) {
        const res = [];
        for (let interval of intervals) {
            if (newInterval === null || interval[1] < newInterval[0]) res.push(interval);
            else if (interval[0] > newInterval[1]) {
                res.push(newInterval);
                res.push(interval)
                newInterval = null;
            }
            else newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
        }
        newInterval !== null && res.push(newInterval);
        return res;
    }
}
