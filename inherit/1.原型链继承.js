// 原理：子类实例child的__proto__指向Child的原型链prototype，而Child.prototype指向Parent类的对象实例，
//      该父类对象实例的__proto__指向Parent.prototype,所以Child可继承Parent的构造函数属性、方法和原型链属性、方法。

// 优点：可继承构造函数的属性，父类构造函数的属性，父类原型的属性
// 缺点：无法向父类构造函数传参；且所有实例共享父类实例的属性，若父类共有属性为引用类型，一个子类实例更改父类构造函数共有属性时会导致继承的共有属性发生变化；实例如下：

// 1. 父类声明，属性和方法实现
function Parent(name) {
    //父类的 非引用 属性
    this.name = name;
    //父类的 引用 属性
    this.school = ['小学','初中','高中']
}

Parent.prototype.printInfomation = function () {
    console.log('名字:');
    console.log(this.name);
    console.log('学历:');
    console.log(this.school);
}

// 2. 子类声明
// (子类中不重写的属性直接调用父类的属性，如Child可以不写name，school)
function Child(name) {
    this.name = name;
}

// 3. 原型链继承 —— Child.prototype指向Parent类的对象实例 (子类指向父实例)
Child.prototype = new Parent();

// 4. 输出验证结果
const studentA = new Child('studentA');
const studentB = new Child('studentB');

studentA.printInfomation();
studentB.printInfomation();

studentB.school.push('大学'); // 改了引用类型，所有child实例的school都被改了

studentA.printInfomation();
studentB.printInfomation();



