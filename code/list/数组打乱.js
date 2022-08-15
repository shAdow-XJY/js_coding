// Fisher–Yates shuffle 洗牌算法
// 该方法就是每次在数组中随机产生一个位置，依次将数组中的每一项与该次产生的随机位置上的元素交换位置：

// Math.random () Math.random () 函数返回一个浮点数， 伪随机数在范围从 0 到 小于 1 ，也就是说，从 0（包括 0）往上，但是不包括 1（排除 1）

var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function fisher(list) {
    let len = list.length;

    for (let i = 0; i < len; ++i){

        let randomIndex = Math.floor(Math.random() * len);

        let temp = list[i];
        list[i] = list[randomIndex];
        list[randomIndex] = temp;
    }

    return list;
}

console.log(fisher(list));