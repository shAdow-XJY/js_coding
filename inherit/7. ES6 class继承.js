// 要点：
// constructor 为构造函数，即使未定义也会自动创建。
// 在父类构造函数内 this 定义的都是实例属性和方法，其他方法包括 printInfomation、getHobbies 都是原型方法。
// static 关键字定义的静态方法都必须通过类名调用，其 this 指向调用者而并非实例。
// 通过 extends 可以继承父类的所有原型属性及 static 类方法，子类 constructor 调用 super 父类构造函数实现实例属性和方法的继承。
//
// 对比：
// ES5 的继承，实质是先创造子类的实例对象 this，然后再将父类的方法添加到 this 上面（Parent.apply(this)）。
// ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到 this 上面（所以必须先调用 super 方法），然后再用子类的构造函数修改 this。

class Parent {
    // 构造函数内 this 是实例属性和方法，即每一个实例都会新创建一份name和school，解决引用问题。
    constructor(name) {
        this.name = name;
        this.school = ['小学','初中','高中'];
    }

    // 不在构造函数里面，是原型方法(或属性)，即理解的在原型链上写方法函数，不用每一个实例内部都创建一个方法。
    // 相当于前面写过的 Parent.prototype.printInfomation = function () {}
    printInfomation() {
        console.log('名字:');
        console.log(this.name);
        console.log('学历:');
        console.log(this.school);
    }

    // static方法必须用Parent.printThis()
    static printThis() {
        console.log(this);
    }
}

// 通过 extends 可以继承父类的所有原型属性及 static 类方法，子类 constructor 调用 super 父类构造函数实现实例属性和方法的继承。
class Child extends Parent
{
    constructor(name) {
        super(name);
    }
}

// 输出验证结果
const studentA = new Child('studentA');
const studentB = new Child('studentB');

console.log('------------------------------------初始状态----------------------------------');
console.log('------------studentA--------------');
console.log('实例属性name，shcool：');
console.log(studentA.name);
console.log(studentA.school);
console.log('原型方法printInfomation：');
studentA.printInfomation();
console.log('static 方法printThis，调用的this为：');
Parent.printThis();
console.log('------------studentB--------------');
console.log('实例属性name，shcool：');
console.log(studentB.name);
console.log(studentB.school);
console.log('原型方法printInfomation：');
studentB.printInfomation();
console.log('static 方法printThis，调用的this为：');
Parent.printThis();


studentA.name = 'studentAstudentAstudentA';
studentA.school.push('大学');
studentB.name = 'studentBstudentBstudentB';
studentB.school.push('大学');
studentB.school.push('毕业寄');


console.log('------------------------------------修改后状态----------------------------------');
console.log('------------studentA--------------');
console.log('实例属性name，shcool：');
console.log(studentA.name);
console.log(studentA.school);
console.log('原型方法printInfomation：');
studentA.printInfomation();
console.log('static 方法printThis，调用的this为：');
Parent.printThis();
console.log('------------studentB--------------');
console.log('实例属性name，shcool：');
console.log(studentB.name);
console.log(studentB.school);
console.log('原型方法printInfomation：');
studentB.printInfomation();
console.log('static 方法printThis，调用的this为：');
Parent.printThis();

