// 在数组原型上面自定义myJoin方法(仿写数组中的join)
Array.prototype.myJoin = function (str) {
    // 获取传递过来的字符串
    let all = this[0];
    // 遍历数组 让数组被指定的字符拼接成字符串
    for (let i = 1; i < this.length; i++) {
        // 拼接字符串
        all = all + str + this[i];
    };
    // 把拼接的字符串抛出
    return all;
}