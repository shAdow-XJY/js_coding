//使用前序遍历，加入一个层数，子节点层数加一
function dfs(root) {
    let depth = 0;
    const pre = (_root) => {
      if (!_root){
          return 0;
      }
      let left = pre(_root.left);
      let right = pre(_root.right);
      return Math.max(left+1,right+1);
    }
    return pre(root);
}