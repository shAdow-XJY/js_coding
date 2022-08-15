// 镜像，只要满足本身结点值相等，然后左结点的左子树等于右结点的右子树，左结点的右子树等于右结点的左子树即可。
//
// 思路：
//
// 先判断，如果要判断的左右结点都空，那肯定true
// 如果左右结点只有一个是空，那肯定 false
// 最后判断，左右结点值，左结点的左子树是否等于右结点的右子树，左结点的右子树是否等于右结点的左子树即可，其中后两个也是进行递归判断

function mirrorBST(root) {
    if (root === null){
        return true;
    }

    const judge = (left,right) => {
      if (!left && !right){
          return true;
      }
      if (!left || !right){
          return false;
      }
      return left.val === right.val && judge(left.left,right.right) && judge(left.right,right.left);
    }

    return judge(root.left,root.right);
}