// 12345678 转化成 12,345,678
let str = '12345678'

function RMB(str) {
    let res = '';

    let strList = str.split(''); // ['1', '2', '3', '4', '5', '6', '7', '8']

    for (let i in strList) {

        res += strList[i];

        if ((i+1)%3 === 0){
            res += ',';
        }
    }

    return res;
}

console.log(RMB(str))