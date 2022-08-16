// * 16.    /b{1,3}/	:b出现一次到三次
var regex16 = /ab{1,3}/ ;
//匹配 a后面跟着1~3个b 的字符串
console.log(16);
console.log(regex16.test("aa"));
console.log(regex16.test("ab"));
console.log(regex16.test("abb"));
console.log(regex16.test("abbb"));
console.log(regex16.test("abbbb"));

// * 17.    /b{3}/		:b出现三次
var regex17 = /ab{3}/ ;
//匹配 a后面跟着3个b 的字符串
console.log(17);
console.log(regex17.test("ab"));
console.log(regex17.test("abb"));
console.log(regex17.test("abbb"));
console.log(regex17.test("abbbb"));
console.log(regex17.test("abAbb"));

// * 18.    /(ab){3}/	:ab一起出现三次
var regex18 = /(ab){3}/ ;
console.log(18);
console.log(regex18.test("ab"));
console.log(regex18.test("abab"));
console.log(regex18.test("ababab"));
console.log(regex18.test("abABabABab"));

// * 19.    /b{m,}/		:b出现m次以上
var regex19 = /b{3,}/ ;
console.log(19);
console.log(regex19.test("b"));
console.log(regex19.test("bb"));
console.log(regex19.test("bbb"));
console.log(regex19.test("bbbb"));
console.log(regex19.test("bababab"));

// * 20.    +			:至少一个
var regex20 = /ab+/ ;
console.log(20);
console.log(regex20.test("a"));
console.log(regex20.test("ab"));
console.log(regex20.test("abb"));
console.log(regex20.test("acb"));

// * 21.    *			:0个或多个
var regex21 = /ab*/ ;
console.log(21);
console.log(regex21.test("a"));
console.log(regex21.test("ac"));
console.log(regex21.test("ab"));
console.log(regex21.test("abb"));

// * 22.    ?			:0个或一个
var regex22 = /ab?/ ;
console.log(22);
console.log(regex22.test("a"));
console.log(regex22.test("ac"));
console.log(regex22.test("ab"));
console.log(regex22.test("abb"));

// * 23.    ^			:以***开头，他和[]里的^不一样
var regex23 = /^a/;
// 匹配以 a为开头的字符串
console.log(23);
console.log(regex23.test("apple"));
console.log(regex23.test("a shoe"));
console.log(regex23.test("two shoes"));

// * 24.    $			:以***结尾
var regex24 = /a$/ ;
// 匹配以 a为结尾的字符串
console.log(24);
console.log(regex24.test("banana"));
console.log(regex24.test("a banana"));
console.log(regex24.test("two bananas"));

// * 25.    查找.和/的话需要\进行转义
var regex25 = /[0-9]\.[0-9]/ ;
console.log(25);
console.log(regex25.test("12"));
console.log(regex25.test("1.2"));
