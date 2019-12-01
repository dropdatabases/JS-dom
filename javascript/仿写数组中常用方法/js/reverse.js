// 在数组原型上面自定义myReverse方法(仿写数组reverse方法)
Array.prototype.myReverse = function () {
    // 循环数组中的每一项并且实现reverse倒序功能
    for(let i=0;i<this.length;i++){
        //循环每一项元素并且对每一项元素实现
        //删除每次循环的元素
        //并且利用pop函数(在每一次的最后面删除)返回结果添加的功能
        this.splice(i,0,this.pop());
    }
    // 把处理完毕的数组抛出让整个函不执行
    return this;
}