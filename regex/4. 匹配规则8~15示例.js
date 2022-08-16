// * 8.	    \w	 任意字母数字下划线——匹配非特殊字符，即a-z、A-Z、0-9、_
var regex8 = /\w\w\w\w/ ;
console.log(8);
console.log(regex8.test("aZ9_"));
console.log(regex8.test("aZ9我")); //w 能不能匹配汉字要视你的操作系统和你的应用环境而定
console.log(regex8.test("aZ9?"));

// * 9.	    \W	 除了字母数字下划线——匹配特殊字符，即非字母、非数字、非汉字、非下划线
var regex9 = /\W\W\W/;
console.log(9);
console.log(regex9.test("aA0"));
console.log(regex9.test("aA0_"));
console.log(regex9.test("aA0?!?"));
console.log(regex9.test("{?}"))

// * 10.	\d	 [0-9]——匹配数字，即0-9
var regex10 = /我的排名是\d/ ;
console.log(10);
console.log(regex10.test("我的排名是2"));
console.log(regex10.test("我的排名是 2"));
console.log(regex10.test("我的排名是:2"));
console.log(regex10.test("我的排名是一"));
console.log(regex10.test("哇哦！我的排名是1"));

// * 11.	\D	 [^0-9]——匹配非数字，即不是数字
var regex11 = /\D不是数字/ ;
console.log(11);
console.log(regex11.test("100不是数字"));
console.log(regex11.test("一百不是数字"));
console.log(regex11.test("？？？不是数字"));

// * 12.	\s	 空格——匹配空白，即 空格
var regex12 = /1\s2\s3/ ;
console.log(12);
console.log(regex12.test("1 2 3"));
console.log(regex12.test("1 2   3"));
console.log(regex12.test("123"));

// * 13.	\S	 除了空格——匹配非空白
var regex13 = /1\S2\S3/ ;
console.log(13);
console.log(regex13.test("1?2?3"));
console.log(regex13.test("1 2 3"));
console.log(regex13.test("123"));
console.log(regex13.test("1??2??3"));

// * 14.	\b	 单词边界
var regex14 = /\bshoe\b/ ;
console.log(14);
console.log(regex14.test("Here is one shoe."));
console.log(regex14.test("Here are two shoes."));
console.log(regex14.test("Hereisoneshoe"));
console.log(regex14.test("Herearetwoshoes"));

// * 15.	\B	 除了单词边界
var regex15 = /\Bshoe\B/ ;
console.log(15);
console.log(regex15.test("Here is one shoe."));
console.log(regex15.test("Here are two shoes."));
console.log(regex15.test("Hereisoneshoe"));
console.log(regex15.test("Herearetwoshoes"));
