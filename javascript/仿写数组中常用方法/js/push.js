// 在数组原型上面自定义myPush方法(仿数组push方法)
Array.prototype.myPush = function(){
    // 那个数组调用myPush,this就指向调用myPush调用的数组对象
    // console.log(this);
    // 调用的时候写了多少个参数，arguments就存储几个元素
    // arguments是使用参数组成的数组，称为实参列表
    for(let i=0;i<arguments.length; i++){
        // 往数组[this.length]位赋值传递过来的参数
        this[this.length] = arguments[i];
    }
};