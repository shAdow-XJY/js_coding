//取值，小的一边，大的一边。
//每一边再次细分成[小],mid,[大]
var list = [0,1,15,9,4,2,26,8,3,12,20,6]
function quickSort(list) {

    const sort = (_list) => {
        if (_list.length <= 1){
            return _list;
        }
        let left = [];
        let right = [];
        let mid = _list[0];
        for (let item of _list){
            if (item < mid){
                left.push(item);
            }else {
                right.push(item);
            }
        }
        return [...sort(left),mid,...sort(right)];
    }

    return sort(list);
}

// splice() 方法用于添加或删除数组中的元素。
// 注意：这种方法会改变原始数组。
// 如果删除一个元素，则返回一个 只有一个 被删除元素 的数组。 如果未删除任何元素，则返回空数组。
var _quickSort = function(arr) {
    if (arr.length <= 1) { return arr; }

    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return _quickSort(left).concat([pivot], _quickSort(right));
};
console.log(_quickSort(list));