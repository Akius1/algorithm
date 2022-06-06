const invertTree = (root) => {
  function helper(node) {
    if (!node) return;

    let tempLeftNode = node.left;
    node.left = node.right;
    node.right = tempLeftNode;

    helper(node.left);
    helper(node.right);
  }
  helper(root);
  return root;
};
