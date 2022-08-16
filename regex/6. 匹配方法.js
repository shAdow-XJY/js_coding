// 1.match()
// 2.search()
// 3.replace()
// 4.split()

// 1.match()
// -可以根据正则表达式，从一个字符串中将符合条件的内容提取出来
// -默认情况下我们的match只会找到第一个符合要求的内容，找到以后就停止检索
// 我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容
// 他会将结果封装到一个数组里面
//
// var str3 = "aBcd125efgh1ijk4561lmnopqrst145uvwxyz";
// var res3 = str3.match(/[A-z]/gi);
// console.log(res3);

//可以为一个正则表达式设置多个匹配模式
