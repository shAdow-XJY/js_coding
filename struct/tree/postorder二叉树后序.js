//递归
function postorder(root) {
    let res = [];
    const post = (_root)=>{
        if(_root){
            post(_root.left)
            post(_root.right)
            res.push(_root.val)
        }
    }
    post(root)
    return res;
}

//迭代__后序遍历跟前序相反，先将左push进，push根节点的值改为unshift
// 前序是 (根 左 右) ， 每个值是 res.push
// 那么后序 ： (左 右 根)， 可以这样做： 前序算法 (根 右 左)!!， 然后res.unshift
function postOrder(root) {
    let res = [];
    if (root === null){
        return [];
    }
    let tempStack = [root];
    while (tempStack.length > 0){
        let node = tempStack.pop();
        res.unshift(node.val);               //unshift
        if(node.left){
            tempStack.push(node.left)        //左右顺序跟前序相反
        }
        if(node.right){
            tempStack.push(node.right)
        }
    }
    return res;
}