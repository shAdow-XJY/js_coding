// 寄生组合式继承
// 原理：改进组合继承，利用寄生式继承的思想继承原型

// 组合继承
function Parent(name) {
    //父类的 非引用 属性
    this.name = name;
    //父类的 引用 属性
    this.school = ['小学','初中','高中'];
    //
    this.print = function () {
        console.log('名字:');
        console.log(this.name);
        console.log('学历:');
        console.log(this.school);
    }
}

Parent.prototype.printInfomation = function () {
    console.log('名字:');
    console.log(this.name);
    console.log('学历:');
    console.log(this.school);
}

function Child(name) {
    Parent.call(this,name);
}

// 组合继承的这一句用寄生式替代
// Child.prototype = new Parent();

// 寄生式继承
function createChild(parentObj) {
    function f() {}
    f.prototype = parentObj;
    return new f();
}

function inherit(childClass, ParentClass) {
    // 复制一份父类的原型
    var p = createChild(ParentClass.prototype);
    // 修正构造函数
    p.constructor = childClass;
    // 设置子类原型
    childClass.prototype = p;
}

inherit(Child, Parent);

// 输出验证结果
const studentA = new Child('studentA');
const studentB = new Child('studentB');

console.log('------------------------------------初始状态----------------------------------');
console.log('------------studentA:print()---------------------');
studentA.print();
console.log('------------studentA:printInfomation()-----------');
studentA.printInfomation();
console.log('------------studentB:print()---------------------');
studentB.print();
console.log('------------studentB:printInfomation()-----------');
studentB.printInfomation();

studentA.name = 'studentAstudentAstudentA';
studentA.school.push('大学');
studentB.name = 'studentBstudentBstudentB';
studentB.school.push('大学');
studentB.school.push('毕业寄');

console.log('------------------------------------修改后状态----------------------------------');
console.log('------------studentA:print()---------------------');
studentA.print();
console.log('------------studentA:printInfomation()-----------');
studentA.printInfomation();
console.log('------------studentB:print()---------------------');
studentB.print();
console.log('------------studentB:printInfomation()-----------');
studentB.printInfomation();

