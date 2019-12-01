// 在数组原型上自定义myShift方法(仿写数组中的shift方法)
// shift方法的作用是删除数组中的第一个元素
Array.prototype.myShift = function(){
    // 利用reverse方法让数组倒序过来
    this.reverse();
    // 在利用数组pop方法删除倒序的最后一个元素
    let res = this.pop();
    // 在利用reverse方法让数组在倒序出来
    this.reverse();
    // pop方法返回结果是删除当前元素，并且返回
    return res;
}