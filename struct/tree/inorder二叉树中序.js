//递归
function inorder(root) {
    let res = [];
    const ino = (_root) => {
        if (_root){
            ino(_root.left);
            res.push(_root.val);
            ino(_root.right);
        }
    }
    ino(root)
    return res;
}

//迭代
// 左 根 右
function inOrder(root) {
    let res = [];
    if (root === null){
        return [];
    }
    let tempStack = [];
    while (root !== null || tempStack.length > 0){
        while (root !== null){             //将根节点顺着左节点放进栈
            tempStack.push(root);
            root = root.left;
        }

        root = tempStack.pop();
        res.push(root.val);

        root = root.right;           //换成右节点，之后再顺着这个右节点一直
    }
    return res;
}
