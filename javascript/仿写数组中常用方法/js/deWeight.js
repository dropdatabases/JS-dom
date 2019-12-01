Array.prototype.deWeight = function(){
    // 往这个数组里面添加去重的元素
    var newArr = [];
    var newObj = {};
    // 遍历数组获取数组中的每一项
    for(var i=0;i<this.length;i++){
        // 判断对象中的属性名如果没有就走进if，反之不走近
        if(!newObj[this[i]]){
            // 往新数组里面push去重的数据
            newArr.push(this[i]);
        };
        // 设置对象的属性名，判断是否存在
        newObj[this[i]] = 1;
    }
    // 返回去重后的数组
    return newArr;
};