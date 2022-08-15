//array.filter(function(currentValue,index,arr), thisValue)
//findIndex()里面是放函数
//indexOf()里面才是放值
var list = [0,1,1,2,4,2,6,8,3,1,0,6]

// indexOf()
function deleteMore(inputList){
    let res = [];
    for (let item of inputList){
        if(res.indexOf(item) === -1){
            res.push(item);
        }
    }
    return res;
}

// indexOf()
// array.filter(function(currentValue,index,arr), thisValue)返回新数组
function deleteMore2(inputList){
    return inputList.filter((value,index,arr)=>{
        return arr.indexOf(value) === index;
    })
}

// sort()方法会改变原始数组
function deleteMore3(inputList) {
    inputList.sort();

    let res = [inputList[0]];
    for (let item of inputList){
        if (res[res.length-1] !== item){
            res.push(item);
        }
    }

    return res;
}

// set去重
function deleteMore4(inputList) {
    const set = new Set(inputList);
    return [...set];
}

// map 方法
function deleteMore5(inputList) {
    let res = [];
    const hash = new Map();

    for (let item of inputList){
        if (!hash.has(item)){
            hash.set(item,true);
            res.push(item);
        }
    }

    return res;
}

console.log(deleteMore(list))
console.log(deleteMore2(list))
console.log(deleteMore3(list))
console.log(deleteMore4(list))
console.log(deleteMore5(list))
