function instanceOf(leftObj,rightFunction){
    let leftProto = Object.getPrototypeOf(leftObj);
    let rightPrototype = rightFunction.prototype;
    while(true){
        if(leftProto === rightPrototype){
            return true
        }else if(leftProto === null){
            return false
        }
        leftProto = Object.getPrototypeOf(leftProto)
    }
}
const array = [1,2,3,4,5,6]
console.log(instanceOf(array,Array))
console.log(instanceOf(array,Object))
console.log(instanceOf(array,Number))