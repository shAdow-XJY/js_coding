// 1.match()
// 2.search()
// 3.replace()
// 4.split()


// 1.match()
// -可以根据正则表达式，从一个字符串中将符合条件的内容提取出来
// -默认情况下我们的match只会找到第一个符合要求的内容，找到以后就停止检索
// 我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容
// 他会将结果封装到一个数组里面
console.log("————————————————match()方法————————————————");
let string1 = "abcdefghijklmnopqrstuvwxyz0123456789{}[]()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(string1.match(/[A-Z]/));
console.log(string1.match(/[A-Z]/g));
console.log(string1.match(/[A-Z]/gi));

// 2.search()
// * -搜索字符串中是否含有“***”
// * -与split()相同的是他可以传一个正则表达式进去
// * search():不能全局匹配，哪怕你指定全局匹配，依然没什么卵用，他只匹配第一个
// 搜索到会返回索引，没有搜索到会返回-1
console.log("————————————————search()方法————————————————");
let string2 = "abc acc adc aec afc agc";
console.log(string2.search(/a[efg]c/));
console.log(string2.search(/a[hij]c/));

// 3.replace()
// -可以将字符串中指定内容替换为新的内容
// -参数:
// 1.被替换的内容
// 2.新的内容
console.log("————————————————replace()方法————————————————");
let string3 = "I say I love you, apple";
console.log(string3.replace(/e$/,"es"));
console.log(string3.replace(/e\b/,"es"));

// 4.split()
// -可以将一个字符串拆分为一个数组
// -方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串
console.log("————————————————split()方法————————————————");
let string4 = "1ab2bc3cd4de5";
console.log(string4.split(/[a-z]/));
console.log(string4.split(/[a-z][a-z]/));
console.log(string4.split(/[0-9]/));
