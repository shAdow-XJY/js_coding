// * 1.	    |  	  表示或
// 匹配 包含 ab或Ab 的字符串
var regex1 = /ab|Ab/ ;
console.log(1);
console.log(regex1.test("---abcd---"));     // T
console.log(regex1.test("---Abcd---"));     // T
console.log(regex1.test("---ABcd---"));     // F
console.log(regex1.test("---aBcd---"));     // F

// * 2.	    []    中括号里也是或的关系	[ab] == a|b;
// 匹配 包含 abd或acd 的字符串
var regex2 = /a[bc]d/ ;
console.log(2);
console.log(regex2.test("---abd---"));      // T
console.log(regex2.test("---acd---"));      // T
console.log(regex2.test("---abcd---"));     // F
console.log(regex2.test("---add---"));      // F

// * 3.	    [a-z] 任意小写字母
// 匹配 ”[a-z]是小写字母“ 的字符串
var regex3 = /[a-z]是小写字母/
console.log(3);
console.log(regex3.test("a是小写字母"));     // T
console.log(regex3.test("z是小写字母"));     // T
console.log(regex3.test("az是小写字母"));    // T
console.log(regex3.test("a?是小写字母"));    // F
console.log(regex3.test("?是小写字母"));     // F

// * 4.	    [A-z] 任意字母
// 匹配 ”[A-z]是字母“ 的字符串
var regex4 = /[A-z]是字母/
console.log(4);
console.log(regex4.test("a是字母"));       // T
console.log(regex4.test("Z是字母"));       // T
console.log(regex4.test("Az是字母"));      // T
console.log(regex4.test("a8是字母"));      // F
console.log(regex4.test("8是字母"));       // F

// * 5.	    [^ ]  除了***以外
// 匹配 除 ”打死你“ 以外的 ”打？你“ 的字符串
var regex5 = /打[^死]你/ ;
console.log(5);
console.log(regex5.test("我打死你"));       // F
console.log(regex5.test("我打败你"));       // T
console.log(regex5.test("我打打你"));       // T
console.log(regex5.test("我打你"));        // F

// * 6.	    [0-9] 任意数字
// 匹配 ”我的排名是[0-9]“ 的字符串
var regex6 = /我的排名是[0-9]/ ;
console.log(6);
console.log(regex6.test("我的排名是1"));         // T
console.log(regex6.test("我的排名是 1"));        // F
console.log(regex6.test("我的排名是:2"));        // F
console.log(regex6.test("我的排名是一"));         // F
console.log(regex6.test("哇哦！我的排名是1"));      // T

// * 7.	    .	  匹配任意1个字符，除了换行和行结束符(\n)
// 匹配 形式为 ”-->？<--“ 的字符串
var regex7 = /-->.<--/ ;
console.log(7);
console.log(regex7.test("-->.<--"));        // T
console.log(regex7.test("--> <--"));        // T
console.log(regex7.test("--><--"));         // F
console.log(regex7.test("-->W<--"));        // T
console.log(regex7.test("-->QWQ<--"));      // F
console.log(regex7.test("-->\n<--"));       // F


