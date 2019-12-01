// 往数组原型上面自定义myPop方法(仿写原数组中的pop方法)
Array.prototype.myPop = function(){
    // 声明变量存储(this-->数组)数组[this.length-1]位
    let res = this[this.length-1];
    // 让this.Length数组赋值原来数组length位-1
    // 方便重复调用该函数
    this.length = this.length-1;
    // 把res变量抛出不执行该函数
    return res;
};