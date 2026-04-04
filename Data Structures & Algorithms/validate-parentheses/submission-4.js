class Solution {
    isValid(s) {
        while (s.includes('()') || s.includes('[]') || s.includes('{}'))
            s = s.replaceAll('{}','').replaceAll('()','').replaceAll('[]','')
        return s.length === 0;
    }
}
