// https://blog.csdn.net/weixin_44154094/article/details/112685412
// https://blog.csdn.net/weixin_44799217/article/details/113704941

// 1. 使用 构造函数 创建正则表达式 ——————即使用var regex = new RegExp("正则表达式","匹配模式");

// ①
// var re = new RegExp("正则表达式","匹配模式");
// 匹配模式: i :忽略大小写, g :全局匹配模式, m :多行匹配
// ②
// test()
// -使用这个方法可以用来检查一个字符串是否符合正则表达式的规则，如果符合则返回true，否则返回false


// 用来检查字符串中是否含有a
// 大小写忽略
var regex1 = new RegExp("a","i");
console.log(regex1.test("ABCDEFG"));    // T
// 区分大小写
var regex11 = new RegExp("a","");
console.log(regex11.test("ABCDEFG"));   // F


// 2. 使用字面量创建一个正则表达式  ——————即使用var regex = /正则表达式/匹配模式
// 用来检查字符串中是否含有abc
// 大小写忽略
var regex2 = /abc/i ;
console.log(regex2.test("ABCDEFG"));    // T
// 区分大小写
var regex22 = /abc/ ;
console.log(regex22.test("ABCDEFG"));   // F



