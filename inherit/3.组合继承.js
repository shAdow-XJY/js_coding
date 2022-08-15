// 组合继承
// 原理：综合使用构造函数继承和原型链继承

// 优点：可继承父类原型上的属性，且可传参；每个新实例引入的构造函数是私有的
// 缺点：会执行两次父类的构造函数，消耗较大内存，子类的构造函数会代替原型上的那个父类构造函数

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

// 构造函数继承
function Child(name) {
    Parent.call(this,name);
}

// 原型链继承
Child.prototype = new Parent();


// 输出验证
let studentA = new Child('studentA');
let studentB = new Child('studentB');

console.log('------------------------父类的内部函数print：---------------------------');
studentA.print();
studentB.print();
console.log('------------------------父类的原型链函数printInfomation：---------------');
studentA.printInfomation();
studentB.printInfomation();

studentB.school.push('大学');

// 结果不互相影响
console.log('------------------------父类的内部函数print：---------------------------');
studentA.print();
studentB.print();
console.log('------------------------父类的原型链函数printInfomation：---------------');
studentA.printInfomation();
studentB.printInfomation();

