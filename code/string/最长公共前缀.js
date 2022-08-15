let strs = [
    'abcde',
    'abcdeFGHIJK',
    'abcdefghijk',
    'abcdE' //,'x'
]

// 随便找一个作为标准比较就行，因为最长都不会超过任何一个的长度，这里直接找strs[0]
function longestCommonPrefix(strs) {
    if (strs.length === 0 ) return '';

    let commonPrefix = strs[0];
    for (let str of strs) {
        for (let index = 0; index < commonPrefix.length; ++index) {
            if (str[index] !== commonPrefix[index]){
                if (index === 0) return '';
                commonPrefix = commonPrefix.substring(0,index);
                break;
            }
        }
    }

    return commonPrefix;
}

console.log(longestCommonPrefix(strs))