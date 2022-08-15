var a = {'a':'a','aa':'aa','aaa':'aaa'}  // 相同
var b = {'b':'b','bb':'bb','bbb':'bbb'}  // 不同
var c = {'a':'a','aa':'aa','aaa':'aaa'}  // 相同

// console.log(a instanceof Object)
// console.log(b instanceof Object)
// console.log(null === undefined)//false
// console.log(null == undefined) //true

console.log('-----------------初始---------------')
console.log('a == b')
console.log(a == b)
console.log('a === b')
console.log(a === b)   //false

console.log('a == c')
console.log(a == c)
console.log('a === c')
console.log(a === c)   //false

console.log('----------------- c = a ---------------')
c = a
console.log('a == c')
console.log(a == c)
console.log('a === c')
console.log(a === c)   //true

console.log('----------------- c = b ---------------')
c = b
console.log('b == c')
console.log(b == c)
console.log('b === c')
console.log(b === c)   //true


///////////////////////////////////////
var aa = 'a'  // 相同
var bb = 'b'  // 不同
var cc = 'a'  // 相同

console.log('-----------------初始---------------')
console.log('aa == bb')
console.log(aa == bb)
console.log('aa === bb')
console.log(aa === bb)

console.log('aa == cc')
console.log(aa == cc)
console.log('aa === cc')
console.log(aa === cc)




