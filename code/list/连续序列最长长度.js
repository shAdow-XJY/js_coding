// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// set 去重+起点遍历（！set.has(item-1)）
function longestSubList(list) {
    let length = 0;

    const set = new Set(list);
    for (let setElement of set) {
        if (!set.has(setElement - 1)){  //set中没有比当前setElement小1的数，这个数是起点，开始遍历。
            let templength = 1;
            while (set.has(setElement + templength)){
                templength++;
            }

            length = Math.max(length,templength);
        }
    }

    return length;
}


let list = [12,2,3,887,5,6,9,7,11,15,3,5,2,6,15];
console.log(longestSubList(list));
