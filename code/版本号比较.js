// 比较两个版本号 version1 和 version2，如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。
// 还有注意下面这种特殊情形：1 和 1.0、1.0.0、1.00.0 的版本是一样的。

// 关键是将点分割，每一部分化成number比较，分割后没有的用0补充
function compareVersion(version1, version2) {
    let v1 = version1.split('.'), v2 = version2.split('.');
    let len1 = v1.length, len2 = v2.length;
    let index1 = 0, index2 = 0;

    while (index1 < len1 || index2 < len2){
        let v1Item = 0, v2Item = 0;

        if (index1 < len1) v1Item = parseInt(v1[index1++]);
        if (index2 < len2) v2Item = parseInt(v2[index2++]);

        if (v1Item !== v2Item) return v1Item > v2Item ? 1 : -1;
    }

    return 0;
}
let version1 = '1.2.4',version2 = '1.1.5';
let version11 = '1.2',version22 = '1.10.5';
let version111 = '1.00.03',version222 = '1.0.03';

console.log(compareVersion(version1,version2))
console.log(compareVersion(version11,version22))
console.log(compareVersion(version111,version222))