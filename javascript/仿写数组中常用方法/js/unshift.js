// 在数组原型上自定义myUnshift方法(仿写数组中的unshift方法)
// myUnshift方法在数组前面添加单个或者是多个元素
Array.prototype.myUnshift = function(){
    // 先让整个数组倒序
    this.reverse();
    // 遍历arguments类数组让他每次循环-1位 
    // 并且当循环次数>=0时执行代码块 并且 i--
    for (var i = arguments.length - 1; i >= 0; i--) {
        // 把元素push到数组里面
        this.push(arguments[i]);

    }
    // 并且让数组倒序过来
    this.reverse();
}