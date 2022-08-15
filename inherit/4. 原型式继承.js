// 原型式继承
// 原理：类似Object.create，用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象，结果是将子对象的__proto__指向父对象

// 缺点：共享引用类型

// 1. 父对象实例声明（不是父类）
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

// 2. 返回对父对象实例的函数的调用
function createChild(parentObj) {
    function f() {

    }

    f.prototype = parentObj;

    return new f();

}

// 3. 实例化子对象
var studentA = createChild(parent);
var studentB = createChild(parent);

// 4. 输出验证结果
console.log('------------------------修改前：---------------------------');
studentA.print();
studentB.print();

studentA.name = 'studentA';
studentA.school.push('大学');

console.log('------------------------修改后：---------------------------');
studentA.print();
studentB.print();



