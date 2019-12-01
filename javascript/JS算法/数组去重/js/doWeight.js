// 在数组原型上面自定义doWeight方法对数组去重 该方法不改变了原来的数组
Array.prototype.doWeight = function(){
    // this-->被调用的数组
    let newArr = [];//存储去重后的数组
    let newObj = {};//存储数组每项的属性
    // 遍历数组获取数组中的每一项进行去重操作
    for(let i=0;i<this.length;i++){
        // 如果对象中没有值那么为false 取反走进if代码
        if(!newObj[this[i]]){
            // 添加去重后的数据
            newArr.push(this[i]);
        };
        // 给对象添加属性 如果有那么为true取反不走if 
        // 如果没有为false取反为true走if
        newObj[this[i]] = 1;
    };
    return newArr;
}