function Person(name, age) {
    this.name = name;
    this.age = age;
}

function newFunc(Func,...args) {
    //new obj
    let obj = {};
    //obj.__proto__ = Func.prototype
    Object.setPrototypeOf(obj,Func.prototype)
    //console.log(Object.getPrototypeOf(obj) === Func.prototype)
    //this
    let res = Func.apply(obj,args);
    //constructor
    return res instanceof Func ? res : obj;
}

var ob = newFunc(Person,'name',10086);
console.log(ob.name)
console.log(ob.age)