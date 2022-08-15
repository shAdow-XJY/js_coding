// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 滑动窗口 + 对于每一次的判断是否有重复字符，用set的has来检索判断
// 关键是用set当成窗口，delete调整左边界，add调整右边界，has判断是否存在重复
function longestSubstring(s) {
    let maxSubstring = '', maxSublength = 0;

    const windowSet = new Set();
    let right_index = -1;
    for (let left_index = 0;left_index < s.length; left_index++){
        if (left_index !== 0){ //说明进入下一次for循环了，要调整左边界向右移一位，即删除左边第一位字符串
            //console.log(right_index);
            windowSet.delete(s.charAt(left_index-1));
        }

        while ( !windowSet.has(s.charAt(right_index+1)) && right_index+1 < s.length){
            windowSet.add(s.charAt(right_index+1));
            right_index ++;
        }

        if (right_index - left_index + 1 > maxSublength){
            maxSublength = right_index -left_index + 1;
            maxSubstring = s.substring(left_index, right_index + 1);
        }
    }

    return [maxSublength, maxSubstring];
}


let s = 'abcabcbb';
let ss = 'abcabcbbabcd';
console.log(longestSubstring(s))
console.log(longestSubstring(ss))