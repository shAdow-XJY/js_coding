var arr = [1,2,[3,4,5,[6,[7,8]],9],10,[11,12]];
//toString + map
function stringFlat(arr){
    //console.log(arr.toString().split(','))
    //['1', '2',  '3',  '4','5', '6',  '7',  '8','9', '10', '11', '12']
    arr = arr.toString().split(',').map((value,index,array)=>{
        return Number(value)
    })
    return arr;
}
console.log(stringFlat(arr))

// 原生flat
// reduce((prev,cur,index,arr)=>{},init)用法
// 两个参数，一个callback,一个初始值
// 回调的四个参数分别为，上一次 return的结果，当前项，当前索引，数组，还有初始值。
// reduce实现什么功能取决于回调内部做了什么
function flat(arr){
    if(! arr instanceof Array){
        return false;
    }

    let res = arr.reduce((pre,cur)=>{
        if(Array.isArray(cur)){
            return [...pre,...flat(cur)]
        }else{
            return [...pre,cur]
        }
    },[])
    
    return res;
}
console.log(flat(arr))

//选择扁平层次
function selectFlat(arr,level = 1) {
    if(! arr instanceof Array){
        return false;
    }

    let res = arr.reduce((pre,cur)=>{
        if(Array.isArray(cur) && level>0){
            return [...pre,...selectFlat(cur,level-1)]
        }else {
            return [...pre,cur]
        }
    },[])

    return res;
}
console.log(selectFlat(arr,2))