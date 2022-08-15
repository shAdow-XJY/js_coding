// 原理：使用call或者apply更改子类函数的作用域，使this执行父类构造函数，子类因此可以继承父类共有属性
// 优点：可解决原型链继承的缺点
// 缺点：不可继承父类的原型链方法，构造函数不可复用

// 1. 父类声明，属性和方法实现
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

// 2. 子类声明  使用call或者apply更改子类函数的作用域，使this执行父类构造函数，子类因此可以继承父类共有属性
function Child(name) {
    Parent.call(this,name);
    // Parent.call(this,...arguments);
    // Parent.apply(this,arguments);
}

let studentA = new Child('studentA');
let studentB = new Child('studentB');

//
studentA.print();
studentB.print();

studentB.school.push('大学');

// 结果不互相影响
studentA.print();
studentB.print();

// 不能调用
// Parent.prototype.printInfomation = function () {
//     console.log('名字:');
//     console.log(this.name);
//     console.log('学历:');
//     console.log(this.school);
// }
//
// studentA.printInfomation();
// studentB.printInfomation();
