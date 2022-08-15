// 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 示例 1：
// 输入：s = "()"
// 输出：true
// 示例2：
// 输入：s = "()[]{}"
// 输出：true

function valid(s){
    if (s.length%2 !== 0){
        return false;
    }

    const hash = new Map([
        [')','('],
        [']','['],
        ['}','{']
    ])
    const stack = [];

    for (let item of s){
        if (hash.has(item)) // ')', ']', '}'
        {
            if (hash.get(item) !== stack.pop()){
                return false;
            }
        }
        else               // '(', '[', '{'
        {
            stack.push(item);
        }
    }

    return stack.length === 0;
}

console.log(valid("([]{}"))
console.log(valid("([]{{()}}())"))