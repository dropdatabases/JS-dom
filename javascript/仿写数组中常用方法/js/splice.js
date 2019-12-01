Array.prototype.mySplice = function(index,length){
    let arr = []; //存放拼接的新数组
    let resArr = []; //作为返回值返回

    // 把index-length范围的数做成数组，作为mySplice的返回值
    for (let i = index; i < index + length; i++) {
        resArr.push(this[i]);
    }

    // 拼接新的数组分为三部分
    // 1.范围之前的，即index之前的
    for (let i = 0; i < index.length; i++) {
        arr.push(this[i]);
    }

    // 2.参数列表里面下标为2(包括2)之后的参数
    for (let i = 2; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    // 3.范围之后的所有数据
    for (let i = index + length; i < this.length; i++) {
        arr.push(this[i]);
    }

    // arr 新数组赋值给this
    this.length = 0;

    for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
    }

    return resArr;
}