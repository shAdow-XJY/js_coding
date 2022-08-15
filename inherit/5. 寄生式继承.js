// 寄生式继承
// 原理：二次封装原型式继承，并拓展

// 优点：可添加新的属性和方法

var parent = {
    name: 'parent',
    school: ['小学','初中','高中'],
    print: function () {
        console.log('名字:');
        console.log(this.name);
        console.log('学历:');
        console.log(this.school);
    }
}

function createChild(parentObj) {
    function f() {}
    f.prototype = parentObj;
    return new f();
}

// 再次封装creatChild
function inherit(parentObj) {
    var obj = createChild(parentObj);

    // 新增函数
    obj.printName = function () {
        console.log(this.name);
    }
    obj.printSchool = function () {
        console.log(this.school);
    }

    return obj;
}

// 3. 实例化子对象
var studentA = inherit(parent);
var studentB = inherit(parent);

// 4. 输出验证结果
console.log('------------------------修改前：--------------------------');
studentA.print();
studentB.print();

studentA.name = 'studentA';
studentA.school.push('大学');

console.log('------------------------修改后：--------------------------');
studentA.print();
studentB.print();
console.log('---------------------依旧存在共享引用问题---------------------');

console.log('---------------------使用新的拓展方法：--------------------------');
studentA.printName();
studentA.printSchool();
studentB.printName();
studentB.printSchool();