class Solution {
    reverseList(head) {
        let prev = null;
        let curr = head;
        while (curr) [curr.next, prev, curr] = [prev, curr, curr.next];
        return prev;
    }
}
