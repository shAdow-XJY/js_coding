// 斐波那契数列是以下一系列数字：
//
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...
//
// 在种子数字 0 和 1 之后，后续的每一个数字都是前面两个数字之和。

// 在数学上，斐波那契数列是以递归的方法来定义：
//
// F(0)=0, F(1)=1,
// n>1时，F(n)=F(n-1)+F(n-2)。
//
// 根据该规则，返回第n个斐波那契数。

// 递归
function Fibonacci_di(n) {
    if (n === 0 || n === 1){
        return n;
    }

    return Fibonacci_di(n-2) + Fibonacci_di(n-1);
}

// 递推（动态规划 、 迭代）
function Fibonacci_dynamic(n) {
    let pre = 0;
    let next = 1;
    for (let i = 0; i < n; ++i){
        [pre , next] = [next, pre + next];
    }
    return pre;
}

// 在ES6规范中，有一个尾调用优化，可以实现高效的尾递归方案。
// ES6的尾调用优化只在严格模式下开启，正常模式是无效的。
`use strict`
function Fibonacci_tail(n, pre = 0, next = 1) {
    if (n === 0) return 0;
    if (n === 1) return next;

    return Fibonacci_tail(n-1, next, pre + next);
}

console.time('递归');
console.log(Fibonacci_di(30));
console.timeEnd('递归');

console.time('动态规划');
console.log(Fibonacci_dynamic(30));
console.timeEnd('动态规划');

console.time('尾递归');
console.log(Fibonacci_tail(30));
console.timeEnd('尾递归');

// 输出结果： 第一次运行用时：  动态规划 < 尾递归 < 递归
// 但是多次运行之后，可以发现 尾递归 的用时 会变得比 动态规划 小了