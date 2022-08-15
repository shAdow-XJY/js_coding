// 辗转相除法
// a / b
// b / a%b
// 直到除数为0，被除数即为最大公约数
function greatestCommonDivisor(a,b) {
    if (b === 0){
        return a;
    }

    return greatestCommonDivisor(b,a%b);
}
console.log(greatestCommonDivisor(81,5))
console.log(greatestCommonDivisor(112,8))