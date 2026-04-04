class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    minRemoveToMakeValid(s) {
        const arr = [...s];
        const stack = [];
        for (let i=0; i<arr.length; i++) {
            if (arr[i] === '(') stack.push(i)
            else if (arr[i] === ')') {
                if (stack.length > 0) stack.pop();
                else arr[i] = '';
            }
        }
        while (stack.length >0) arr[stack.pop()] = '';
        return arr.join('');
    }
}
