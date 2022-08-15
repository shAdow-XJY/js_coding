let list = [0,5,4,9,8,11,10]

// 1.
function secondMax(list) {
    if (list.length < 2) return false;

    let max = list[0];
    let sec = max - 1;

    for (let item of list){
        if (item > max){
            sec = max;
            max = item;
        }else if (item > sec){
            sec = item;
        }
    }

    return [max,sec];
}

// 2. sort
// sort 方法失效：为什么我们省略回调函数这个参数，就不行了呢？
// 原因很简单，当你没有传递这个参数的时候，会触发sort的默认行为，它的默认行为就是把数组中所有的项转化为字符串，然后进行unicode编码比较。
function secondMax_sort(list) {

    list.sort(function (a,b){
        return a-b
    });

    let index = list.length-2;
    while (list[index] === list[index+1]){
        index--;
    }

    return [list[list.length-1],list[index]];
}

console.log(secondMax(list));
console.log(secondMax_sort(list));