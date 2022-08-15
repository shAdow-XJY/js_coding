// 递归
// 使用前序遍历，加入一个层数，层数相同放入
function levelorder(root) {
    let res = [];
    const pre = (_root,level) => {
      if (_root === null){
          return ;
      }
      if (level >= res.length){
          res.push([]);
      }
      res[level].push(_root.val);
      pre(_root.left,level+1);
      pre(_root.right,level+1);
    }

    pre(root,0);

    res = res.flat();

    return res;
}

//优先队列
//
function levelOrder(root) {
    if (root === null){
        return [];
    }
    let res = [];
    let tempQue = [root];
    while (tempQue.length > 0){
        let temp = [];
        for(let node of tempQue){
            res.push(node.val);
            if (node.left){
                temp.push(node.left);
            }
            if (node.right){
                temp.push(node.right);
            }
        }
        tempQue = temp;
    }
    return res;
}