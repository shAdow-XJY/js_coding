//递归
function Preorder(root) {
    let res = [];
    const pre = (_root) => {
      if (_root){
          res.push(_root.val)
          pre(_root.left)
          pre(_root.right)
      }
    }
    pre(root)
    return res
}

//迭代
function PreOrder(root) {
    let res = [];
    if(root===null){
        return [];
    }
    let tempStack = [root];
    while (tempStack.length > 0){
        //每次pop的都是一个左节点，然后下面再将右节点和左节点push进栈
        //这样的话，每一次pop完之后，还没push进子节点时，stack栈里面都是右节点哦。
        let node = tempStack.pop();
        res.push(node.val);
        //每次都把右节点先压进栈，之后把左节点叠上去
        if(node.right){
            tempStack.push(node.right)
        }
        if(node.left){
            tempStack.push(node.left)
        }
    }
    return res;
}
// 使用栈的数据结构。初始化一个栈数组和结果数组
// 1.将根节点放入栈中， 栈：[1]
// 2.取出栈顶的节点，将其放入结果数组中， 结果数组: [1]，栈: []
// 3.将取出的节点的右节点放入栈中， 栈: [3]
// 4.将取出的节点的左节点放入栈中，栈:[3,2]
// 5.回到步骤2（循环步骤2-4）取出栈顶节点，将其放入结果数组中，结果数组：[1,2],  栈:[3]
// 6.将取出的节点的右节点放入栈中， 栈: [3,5]
// 7.将取出的节点的左节点放入栈中，栈: [3,5,4]
// 8.回到步骤2....
// 最后得到结果数组[1,2,4,5,3,6,7]
