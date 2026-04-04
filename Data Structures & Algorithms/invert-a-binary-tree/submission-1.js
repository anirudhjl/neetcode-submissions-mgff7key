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
  invertTree(node) {
    if (!node) return null;
    [node.right, node.left] = [node.left, node.right];
    this.invertTree(node.left);
    this.invertTree(node.right);
    return node;
}
}
