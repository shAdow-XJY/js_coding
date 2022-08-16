// * 16.    /b{1,3}/	:b出现一次到三次
var regex16 = /ab{1,3}/ ;
//匹配 a后面跟着1~3个b 的字符串
console.log(16);
console.log(regex16.test("aa"));     // F
console.log(regex16.test("ab"));     // T
console.log(regex16.test("abb"));     // T
console.log(regex16.test("abbb"));     // T
console.log(regex16.test("abbbb"));     // T

// * 17.    /b{3}/		:b出现三次
var regex17 = /ab{3}/ ;
//匹配 a后面跟着3个b 的字符串
console.log(17);
console.log(regex17.test("ab"));     // F
console.log(regex17.test("abb"));     // F
console.log(regex17.test("abbb"));     // T
console.log(regex17.test("abbbb"));     // T
console.log(regex17.test("abAbb"));     // F

// * 18.    /(ab){3}/	:ab一起出现三次
var regex18 = /(ab){3}/ ;
console.log(18);
console.log(regex18.test("ab"));     // F
console.log(regex18.test("abab"));     // F
console.log(regex18.test("ababab"));     // T
console.log(regex18.test("abABabABab"));     // F

// * 19.    /b{m,}/		:b出现m次以上
var regex19 = /b{3,}/ ;
console.log(19);
console.log(regex19.test("b"));     // F
console.log(regex19.test("bb"));     // F
console.log(regex19.test("bbb"));     // T
console.log(regex19.test("bbbb"));     // T
console.log(regex19.test("bababab"));     // F

// * 20.    +			:至少一个
var regex20 = /ab+/ ;
console.log(20);
console.log(regex20.test("a"));     // F
console.log(regex20.test("ab"));     // T
console.log(regex20.test("abb"));     // T
console.log(regex20.test("acb"));     // F

// * 21.    *			:0个或多个
var regex21 = /ab*/ ;
console.log(21);
console.log(regex21.test("a"));     // T
console.log(regex21.test("ac"));     // T
console.log(regex21.test("ab"));     // T
console.log(regex21.test("abb"));     // T

// * 22.    ?			:0个或一个
var regex22 = /ab?/ ;
console.log(22);
console.log(regex22.test("a"));     // T
console.log(regex22.test("ac"));     // T
console.log(regex22.test("ab"));     // T
console.log(regex22.test("abb"));     // T

// * 23.    ^			:以***开头，他和[]里的^不一样
var regex23 = /^a/;
// 匹配以 a为开头的字符串
console.log(23);
console.log(regex23.test("apple"));     // T
console.log(regex23.test("a shoe"));     // T
console.log(regex23.test("two shoes"));     // F

// * 24.    $			:以***结尾
var regex24 = /a$/ ;
// 匹配以 a为结尾的字符串
console.log(24);
console.log(regex24.test("banana"));     // T
console.log(regex24.test("a banana"));     // T
console.log(regex24.test("two bananas"));     // F

// * 25.    查找.和/的话需要\进行转义
var regex25 = /[0-9]\.[0-9]/ ;
console.log(25);
console.log(regex25.test("12"));     // F
console.log(regex25.test("1.2"));     // T
