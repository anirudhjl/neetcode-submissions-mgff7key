class Solution {
    preorderTraversal(root) {
        const res = [];
        const preorder = (node) => {
            if (!node) return;
            res.push(node.val);
            preorder(node.left);
            preorder(node.right);
        }
        preorder(root);
        return res;
    }
}
