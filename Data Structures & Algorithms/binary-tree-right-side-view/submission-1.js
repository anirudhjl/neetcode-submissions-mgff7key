/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    rightSideView(root) {
        let res = [];
        const dfs = (root, depth) => {
            if(!root) return;
            if (res.length === depth) res.push(root.val)
            dfs(root.right, depth+1);
            dfs(root.left, depth+1);
        }
        dfs(root, 0)
        return res;
    }
}
