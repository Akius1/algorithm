function maxDepth(root){
    let maxDepth = 0;

    function diveDeep(node, currentDepth){
        if(!node){
            maxDepth = Math.max(currentDepth-1, maxDepth);
            return
        }

        diveDeep(node.left, currentDepth + 1);
        diveDeep(node.right, currentDepth + 1);
    }

    diveDeep(root, 1);
    return maxDepth;
}